# 插件主体(必看!)(since 3.4.0)

##  MybatisPlusInterceptor 

该插件是核心插件,目前代理了 `Executor#query` 和 `Executor#update` 和 `StatementHandler#prepare` 方法

### 属性

> `private List<InnerInterceptor> interceptors = new ArrayList<>();`

### InnerInterceptor

我们提供的插件都将基于此接口来实现功能

目前已有的功能:

- 自动分页: PaginationInnerInterceptor
- 多租户: TenantLineInnerInterceptor
- 动态表名: DynamicTableNameInnerInterceptor
- 乐观锁: OptimisticLockerInnerInterceptor
- sql性能规范: IllegalSQLInnerInterceptor
- 防止全表更新与删除: BlockAttackInnerInterceptor

::: tip 注意:
使用多个功能需要注意顺序关系,建议使用如下顺序
- 多租户,动态表名
- 分页,乐观锁
- sql性能规范,防止全表更新与删除

总结: 对sql进行单次改造的优先放入,不对sql进行改造的最后放入
:::

## 使用方式(以分页插件举例)

### spring-mvc
``` xml
<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">
    <!-- 其他属性 略 --> 
    <property name="configuration" ref="configuration"/>
    <property name="plugins">
        <array>
            <ref bean="mybatisPlusInterceptor"/>
        </array>
    </property>
</bean>

<bean id="configuration" class="com.baomidou.mybatisplus.core.MybatisConfiguration">
    <!-- 需配置该值为false,避免1或2级缓存可能出现问题,该属性会在旧插件移除后一同移除 -->
    <property name="useDeprecatedExecutor" value="false"/>
</bean>

<bean id="mybatisPlusInterceptor" class="com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor">
    <property name="interceptors">
        <list>
            <ref bean="paginationInnerInterceptor"/>
        </list>
    </property>
</bean>

<bean id="paginationInnerInterceptor" class="com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor">
    <!-- 对于单一数据库类型来说,都建议配置该值,避免每次分页都去抓取数据库类型 -->
    <constructor-arg name="dbType" value="H2"/>
</bean>
```

### spring-boot
``` java
@Configuration
@MapperScan("scan.your.mapper.package")
public class MybatisPlusConfig {

    /**
     * 新的分页插件,一缓和二缓遵循mybatis的规则,需要设置 MybatisConfiguration#useDeprecatedExecutor = false 避免缓存出现问题(该属性会在旧插件移除后一同移除)
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.H2));
        return interceptor;
    }

    @Bean
    public ConfigurationCustomizer configurationCustomizer() {
        return configuration -> configuration.setUseDeprecatedExecutor(false);
    }
}
```

### mybatis-config.xml

```xml
<plugins>
  <plugin interceptor="com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor">
    <property name="@page" value="com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor"/>
    <property name="page:dbType" value="h2"/>
  </plugin>
</plugins>
```

> property 的配置说明详见 `MybatisPlusInterceptor#setProperties` 的源码方法注释


## 拦截忽略注解 @InterceptorIgnore

| 属性名 | 类型 | 默认值 | 描述 |
| :-: | :-: | :-: | :-: |
| tenantLine | String | "" | 行级租户 |
| dynamicTableName | String | "" | 动态表名 |
| blockAttack | String | "" | 攻击 SQL 阻断解析器,防止全表更新与删除 |
| illegalSql | String | "" | 垃圾SQL拦截 |

> 该注解作用于 xxMapper.java 方法之上
> 各属性代表对应的插件
> 各属性不给值则默认为 false 设置为 true 忽略拦截
> 更多说明详见源码注释