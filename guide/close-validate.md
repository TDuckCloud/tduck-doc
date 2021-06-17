# 图形验证码

### 图形验证码能使敏感操作更安全，建议开启。
如需关闭请打开tduck-platform/tduck-api/src/main/resources/application.yml 
```yaml

aj:
  captcha:
    enable: true # 关闭验证码
```

### 验证码拦截逻辑
tduck-api/src/main/java/com/tduck/cloud/api/web/filter/ValidateCodeFilter.java
```
public class ValidateCodeFilter implements Filter {
  
    //需要进行滑动验证的接口
    private List<String> validateUrls = Lists.newArrayList(
            "/login/account",
            "/retrieve/password/email",
            "/retrieve/password/phone/code");

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        // 如果不是需要拦截的 则不拦截
        if (!StrUtil.containsAnyIgnoreCase(httpServletRequest.getRequestURI(),
                validateUrls.toArray(new String[validateUrls.size()]))) {
            filterChain.doFilter(request, response);
            return;
        }
        // 判断是否携带滑动验证码验证
        String code = request.getParameter("slideCode");
        if (StrUtil.isBlank(code)) {
            ResponseUtils.outJson(response, Result.failed(ResponseCodeConstants.NEED_VERIFICATION, ""));
            return;
        }
        CaptchaService captchaService = SpringContextUtils.getBean(CaptchaService.class);
        CaptchaVO vo = new CaptchaVO();
        vo.setCaptchaVerification(code);
        if (!captchaService.verification(vo).isSuccess()) {
            ResponseUtils.outJson(response, Result.failed(ResponseCodeConstants.FAIL, ResponseCodeConstants.VALIDATE_CODE_FAIL_MSG));
            return;
        }
        filterChain.doFilter(request, response);
    }

}

```
