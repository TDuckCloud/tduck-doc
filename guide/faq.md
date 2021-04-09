---
sidebarDepth: 0
---

# 常见问题

[[toc]]

## 如何排除非表中字段？

以下三种方式选择一种即可：

- 使用 `transient` 修饰

  ```java
  private transient String noColumn;
  ```

- 使用 `static` 修饰

  ```java
  private static String noColumn;
  ```

- 使用 `TableField` 注解

  ```java
  @TableField(exist=false)
  private String noColumn;
  ```

## 排除实体父类属性
```
/**
 * 忽略父类 createTime 字段映射
 */
private transient String createTime;
```

## 出现 `Invalid bound statement (not found)` 异常

> 不要怀疑，正视自己，这个异常肯定是你插入的姿势不对……

- 检查是不是引入 jar 冲突

- 检查 Mapper.java 的扫描路径

  - 方法一：在 `Configuration` 类上使用注解 `MapperScan`

  ```java
  @Configuration
  @MapperScan("com.yourpackage.*.mapper")
  public class YourConfigClass{
    ...
  }
  ```

  - 方法二：在`Configuration`类里面，配置`MapperScannerConfigurer`（[查看示例](https://gitee.com/baomidou/mybatisplus-spring-boot/blob/config%E6%96%B9%E5%BC%8F/src/main/java/com/baomidou/springboot/config/MybatisPlusConfig.java)）

  ```java
  @Bean
  public MapperScannerConfigurer mapperScannerConfigurer(){
      MapperScannerConfigurer scannerConfigurer = new MapperScannerConfigurer();
      //可以通过环境变量获取你的mapper路径,这样mapper扫描可以通过配置文件配置了
      scannerConfigurer.setBasePackage("com.yourpackage.*.mapper");
      return scannerConfigurer;
  }
  ```

- 检查是否指定了主键？如未指定，则会导致 `selectById` 相关 ID 无法操作，请用注解 `@TableId` 注解表 ID 主键。当然 `@TableId` 注解可以没有！但是你的主键必须叫 id（忽略大小写）

- SqlSessionFactory不要使用原生的，请使用MybatisSqlSessionFactory

- 检查是否自定义了SqlInjector，是否复写了getMethodList()方法，该方法里是否注入了你需要的方法(可参考DefaultSqlInjector)

## 自定义 SQL 无法执行

问题描述：指在 XML 中里面自定义 SQL，却无法调用。本功能同 `MyBatis` 一样需要配置 XML 扫描路径：

- Spring MVC 配置（参考[mybatisplus-spring-mvc](https://gitee.com/baomidou/mybatisplus-spring-mvc/blob/dev/src/main/resources/spring/spring-mybatis.xml)）

```xml
<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource" />
    <property name="typeAliasesPackage" value="xxx.entity" />
    <property name="mapperLocations" value="classpath*:/mybatis/*/*.xml"/>
    ...
</bean>
```

- Spring Boot 配置（参考[mybatisplus-spring-boot](https://gitee.com/baomidou/mybatisplus-spring-boot/blob/2.x/src/main/resources/application.yml)）

```yaml
mybatis-plus:
  mapper-locations: classpath*:/mapper/**/*.xml
```
- 对于`IDEA`系列编辑器，XML 文件是不能放在 java 文件夹中的，IDEA 默认不会编译源码文件夹中的 XML 文件，可以参照以下方式解决：

  - 将配置文件放在 resource 文件夹中
  - 对于 Maven 项目，可指定 POM 文件的 resource

  ```xml
  <build>
    <resources>
        <resource>
            <!-- xml放在java目录下-->
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include>
            </includes>
        </resource>
        <!--指定资源的位置（xml放在resources下，可以不用指定）-->
        <resource>
            <directory>src/main/resources</directory>
        </resource>
    </resources>
  </build>
  ```
  

::: tip
注意！Maven 多模块项目的扫描路径需以 `classpath*:` 开头 （即加载多个 jar 包下的 XML 文件）
:::

## 启动时异常

- 异常一：

  ```
  java.lang.ClassCastException: sun.reflect.generics.reflectiveObjects.TypeVariableImpl cannot be cast to java.lang.Class
  ```

  MapperScan 需要排除 com.baomidou.mybatisplus.mapper.BaseMapper 类 及其 子类（自定义公共 Mapper），比如：

  ```java
  import com.baomidou.mybatisplus.core.mapper.BaseMapper;

  public interface SuperMapper<T> extends BaseMapper<T> {
      // your methods
  }
  ```

- 异常二：

  ```
  Injection of autowired
  ```

  原因：低版本不支持泛型注入，请升级 Spring 版本到 4+ 以上。

- 异常三：

  ```
  java.lang.NoSuchMethodError: org.apache.ibatis.session.Configuration.getDefaultScriptingLanguageInstance() Lorg/apache/ibatis/scripting/LanguageDriver
  ```

  版本引入问题：3.4.1 版本里没有，3.4.2 里面才有！

## 关于 Long 型主键填充不生效的问题

检查是不是用了`long`而不是`Long`！
::: tip
`long`类型默认值为 0，而 MP 只会判断是否为 `null`
:::

## ID_WORKER 生成主键太长导致 js 精度丢失

JavaScript 无法处理 Java 的长整型 Long 导致精度丢失，具体表现为主键最后两位永远为 0，解决思路： Long 转为 String 返回

- FastJson 处理方式

  ```java {6}
  @Override
  public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
      FastJsonHttpMessageConverter fastJsonConverter = new FastJsonHttpMessageConverter();
      FastJsonConfig fjc = new FastJsonConfig();
      // 配置序列化策略
      fjc.setSerializerFeatures(SerializerFeature.BrowserCompatible);
      fastJsonConverter.setFastJsonConfig(fjc);
      converters.add(fastJsonConverter);
  }
  ```

- JackJson 处理方式

  - 方式一

    ```java
    // 注解处理，这里可以配置公共 baseEntity 处理
    @JsonSerialize(using=ToStringSerializer.class)
    public long getId() {
        return id;
    }
    ```

  - 方式二

    ```java
    // 全局配置序列化返回 JSON 处理
    final ObjectMapper objectMapper = new ObjectMapper();
    SimpleModule simpleModule = new SimpleModule();
    simpleModule.addSerializer(Long.class, ToStringSerializer.instance);
    objectMapper.registerModule(simpleModule);
    ```

- 比较一般的处理方式：增加一个 `public String getIdStr()` 方法，前台获取 `idStr`

## 插入或更新的字段有 空字符串 或者 `null`

FieldStrategy 有三种策略：

- IGNORED：忽略
- NOT_NULL：非 NULL，默认策略
- NOT_EMPTY：非空

当用户有更新字段为 空字符串 或者 `null` 的需求时，需要对 `FieldStrategy` 策略进行调整：

- 方式一：调整全局的验证策略

  注入配置 GlobalConfiguration 属性 fieldStrategy

- 方式二：调整字段验证注解

  根据具体情况，在需要更新的字段中调整验证注解，如验证非空：

  ```java
  @TableField(strategy=FieldStrategy.NOT_EMPTY)
  ```

- 方式三：使用 `UpdateWrapper` (3.x)

  使用以下方法来进行更新或插入操作：

  ```java
  //updateAllColumnById(entity) // 全部字段更新: 3.0已经移除
  mapper.update(
     new User().setName("mp").setAge(3),
     Wrappers.<User>lambdaUpdate()
             .set(User::getEmail, null) //把email设置成null
             .eq(User::getId, 2)
  );
  //也可以参考下面这种写法
  mapper.update(
      null,
      Wrappers.<User>lambdaUpdate()
         .set(User::getAge, 3)
         .set(User::getName, "mp")
         .set(User::getEmail, null) //把email设置成null
         .eq(User::getId, 2)
  );
  
  ```

## 字段类型为 `bit`、`tinyint(1)` 时映射为 `boolean` 类型

默认mysql驱动会把tinyint(1)字段映射为boolean: 0=false, 非0=true

MyBatis 是不会自动处理该映射，如果不想把tinyint(1)映射为boolean类型:

* 修改类型tinyint(1)为tinyint(2)或者int
* 需要修改请求连接添加参数 `tinyInt1isBit=false`，如下：

```xml
jdbc:mysql://127.0.0.1:3306/mp?tinyInt1isBit=false
```

## 出现 2 个 `limit` 语句

原因：配了 2 个分页拦截器! 检查配置文件或者代码，只留一个！

## insert 后如何返回主键

insert 后主键会自动 set 到实体的 ID 字段，所以你只需要 getId() 就好

## MP 如何查指定的几个字段

EntityWrapper.sqlSelect 配置你想要查询的字段

```java
//2.x
EntityWrapper<H2User> ew = new EntityWrapper<>();
ew.setSqlSelect("test_id as id, name, age");//只查询3个字段
List<H2User> list = userService.selectList(ew);
for(H2User u:list){
    Assert.assertNotNull(u.getId());
    Assert.assertNotNull(u.getName());
    Assert.assertNull(u.getPrice()); // 这个字段没有查询出来
}

//3.x
mapper.selectList(
    Wrappers.<User>lambdaQuery()
    .select(User::getId, User::getName)
);
//或者使用QueryWrapper
mapper.selectList(
    new QueryWrapper<User>()
    .select("id","name")
);

```

## mapper 层二级缓存问题

我们建议缓存放到 service 层，你可以自定义自己的 BaseServiceImpl 重写注解父类方法，继承自己的实现。

## mapper 层二级缓存刷新问题

如果你按照 mybatis 的方式配置第三方二级缓存，并且使用 2.0.9 以上的版本，则会发现自带的方法无法更新缓存内容，那么请按如下方式解决（二选一）：

1.在代码中 mybatis 的 mapper 层添加缓存注释，声明 implementation 或 eviction 的值为 cache 接口的实现类
```java
@CacheNamespace(implementation=MybatisRedisCache.class,eviction=MybatisRedisCache.class)
public interface DataResourceMapper extends BaseMapper<DataResource>{}
```

2.在对应的 mapper.xml 中将原有注释修改为链接式声明，以保证 xml 文件里的缓存能够正常
```xml
<cache-ref namespace="com.mst.cms.dao.DataResourceMapper"></cache-ref>
```

## `Cause: org.apache.ibatis.type.TypeException:Error setting null for parameter #1 with JdbcType OTHER`

> 配置 jdbcTypeForNull=NULL
> Spring Bean 配置方式：

```java
MybatisConfiguration configuration = new MybatisConfiguration();
configuration.setDefaultScriptingLanguage(MybatisXMLLanguageDriver.class);
configuration.setJdbcTypeForNull(JdbcType.NULL);
configuration.setMapUnderscoreToCamelCase(true);//开启下划线转驼峰
sqlSessionFactory.setConfiguration(configuration);
```

> yml 配置
```yaml
mybatis-plus:
  configuration:
    jdbc-type-for-null: 'null' 
```

## 自定义 sql 里使用 Page 对象传参无法获取

> Page 对象是继承 RowBounds，是 Mybatis 内置对象，无法在 mapper 里获取
> 请使用自定义 Map/对象，或者通过@Param("page") int page,size 来传参

## 如何使用:【Map下划线自动转驼峰】

指的是：`resultType="java.util.Map"`

- spring boot

```java
@Bean
public ConfigurationCustomizer configurationCustomizer() {
    return i -> i.setObjectWrapperFactory(new MybatisMapWrapperFactory());
}
```

## 在 wrapper 中如何使用 `limit` 限制 SQL

```java
// 取 1 条数据
wrapper.last("limit 1");
```

## 通用 insertBatch 为什么放在 service 层处理

- SQL 长度有限制海量数据量单条 SQL 无法执行，就算可执行也容易引起内存泄露 JDBC 连接超时等
- 不同数据库对于单条 SQL 批量语法不一样不利于通用
- 目前的解决方案：循环预处理批量提交，虽然性能比单 SQL 慢但是可以解决以上问题。


## 3.x数据库关键字如何处理？

在以前的版本是自动识别关键字进行处理的，但是3.x移除了这个功能。

1. 不同的数据库对关键字的处理不同,很难维护。

2. 在数据库设计时候本身不建议使用关键字。
3. 交由用户去处理关键字。

```java
@TableField(value = "`status`")
private Boolean status;
```

## MybatisPlusException: Your property named "xxx" cannot find the corresponding database column name!

针对3.1.1以及后面的版本：

现象： 单元测试没问题，启动服务器进行调试就出现这个问题

原因： dev-tools, 3.1.1+针对字段缓存，使用.class来作为key替换了原来的className, 而使用dev-tools会把.class使用不同的classLoader加载，导致可能出现找不到的情况

解决方案： 去掉dev-tools插件

## Error attempting to get column 'create_time' from result set. Cause: java.sql.SQLFeatureNotSupportedException

3.1.0之前版本没问题，针对3.1.1以及后续版本出现上述问题

现象： 集成druid数据源，使用3.1.0之前版本没问题，升级mp到3.1.1+后，运行时报错:java.sql.SQLFeatureNotSupportedException

原因： mp3.1.1+使用了新版jdbc，LocalDateTime等新日期类型处理方式升级，但druid在1.1.21版本之前不支持，[参考issue](https://github.com/baomidou/mybatis-plus/issues/1245)

解决方案： 1. 升级druid到1.1.21解决这个问题；2.保持mp版本3.1.0；3.紧跟mp版本，换掉druid数据源

## mp版本从3.1.0及以下版本升级到高版本，JDK8日期新类型LocalDateTime等无法映射（报错）

MP_3.1.0及之前的版本，依赖的是mybatis 3.5.0, 

MP_3.1.1升级了mybatis的依赖到3.5.1， 而mybatis 3.5.1 对于新日期类型，需要JDBC driver支持JDBC 4.2 API.

如果你的jdbc驱动版本不支持，那么就会出现新日期类型报错。

参考 blog.mybatis.org
```text
There is one backward incompatible changes since 3.5.0.
    Because of the fix for #1478 , LocalDateTypeHandler, LocalTimeTypeHandler and LocalDateTimeTypeHandler now require a JDBC driver that supports JDBC 4.2 API.
    [EDIT] These type handlers no longer work with Druid. Please see #1516 .
```

## Failed to bind properties under 'mybatis-plus.configuration.incomplete-result-maps[0].assistant.configuration.mapped-statements[0].parameter-map.parameter-mappings[0]' to org.apache.ibatis.mapping.ParameterMapping

springboot 2.2.0 之前无此问题, springboot 2.2.0 出现此问题

现象: 1.本地启动无问题，打成war包部署到服务器报此问题

原因：springboot 2.2.0 构造器注入的问题， mybatis 私有构造器不能绑定属性， 造成依赖mybatis的框架比如MP报错
[参考issue]（https://github.com/spring-projects/spring-boot/issues/18670）
此问题已在springboot2.2.1中修复

解决方案：1.将springboot降级到2.1.x或升级到2.2.1起 (建议springboot2.2.2)

## 分离打包部署出现ClassNotFoundException

针对3.3.2以下版本：

现象： 开发工具运行没问题，打包部署服务器执行lambda表达式出现ClassNotFoundException

原因： 执行反序化时类加载器错误

解决方案： 去除spring-boot-maven-plugin插件进行打包或升级至3.3.2，参考示例（[分离打包](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-assembly)）


## 启动 mybatis 本身的 log 日志

```yaml
# 方式一
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl 
    
# 方式二 application.yml 中增加配置，指定 mapper 文件所在的包
logging:
  level:
    com.baomidou.example.mapper: debug
```


## 如何 update 时 column=column+1

``` java
@TableField(update="%s+1",updateStrategy=FieldStrategy.IGNORED)
private Integer column;
```
> 该方式绑定在 entity 上,baseMapper提供的 `update(entity,updateWrapper)` 中的`entity`不能null,而且所有的update方法均不能再改变此值为字段实际的指定值