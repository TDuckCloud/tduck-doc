# 字段类型处理器

> 类型处理器，用于 JavaType 与 JdbcType 之间的转换，用于 PreparedStatement 设置参数值和从 ResultSet 或 CallableStatement 中取出一个值，本文讲解 `mybaits-plus` 内置常用类型处理器如何通过`TableField`注解快速注入到 `mybatis` 容器中。

示例工程：

👉 [mybatis-plus-sample-typehandler](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-typehandler)

- JSON 字段类型

```java
@Data
@Accessors(chain = true)
@TableName(autoResultMap = true)
public class User {
    private Long id;

    ...


    /**
     * 注意！！ 必须开启映射注解
     *
     * @TableName(autoResultMap = true)
     *
     * 以下两种类型处理器，二选一 也可以同时存在
     *
     * 注意！！选择对应的 JSON 处理器也必须存在对应 JSON 解析依赖包
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    // @TableField(typeHandler = FastjsonTypeHandler.class)
    private OtherInfo otherInfo;

}
```

该注解对应了 XML 中写法为
```xml
<result column="other_info" jdbcType="VARCHAR" property="otherInfo" typeHandler="com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler" />

```

