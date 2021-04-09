---
sidebarDepth: 3
---

# 代码生成器

AutoGenerator 是 MyBatis-Plus 的代码生成器，通过 AutoGenerator 可以快速生成 Entity、Mapper、Mapper XML、Service、Controller 等各个模块的代码，极大的提升了开发效率。

::: tip 特别说明:
自定义模板有哪些可用参数？[Github](https://github.com/baomidou/generator/blob/develop/mybatis-plus-generator/src/main/java/com/baomidou/mybatisplus/generator/engine/AbstractTemplateEngine.java) AbstractTemplateEngine 类中方法 getObjectMap 返回 objectMap 的所有值都可用。
:::

演示效果图：

![relationship](/img/generator.gif)

```java
// 演示例子，执行 main 方法控制台输入模块表名回车自动生成对应项目目录中
public class CodeGenerator {

    /**
     * <p>
     * 读取控制台内容
     * </p>
     */
    public static String scanner(String tip) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder help = new StringBuilder();
        help.append("请输入" + tip + "：");
        System.out.println(help.toString());
        if (scanner.hasNext()) {
            String ipt = scanner.next();
            if (StringUtils.isNotBlank(ipt)) {
                return ipt;
            }
        }
        throw new MybatisPlusException("请输入正确的" + tip + "！");
    }

    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator mpg = new AutoGenerator();

        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");
        gc.setOutputDir(projectPath + "/src/main/java");
        gc.setAuthor("jobob");
        gc.setOpen(false);
        // gc.setSwagger2(true); 实体属性 Swagger2 注解
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://localhost:3306/ant?useUnicode=true&useSSL=false&characterEncoding=utf8");
        // dsc.setSchemaName("public");
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("密码");
        mpg.setDataSource(dsc);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName(scanner("模块名"));
        pc.setParent("com.baomidou.ant");
        mpg.setPackageInfo(pc);

        // 自定义配置
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
                // to do nothing
            }
        };

        // 如果模板引擎是 freemarker
        String templatePath = "/templates/mapper.xml.ftl";
        // 如果模板引擎是 velocity
        // String templatePath = "/templates/mapper.xml.vm";

        // 自定义输出配置
        List<FileOutConfig> focList = new ArrayList<>();
        // 自定义配置会被优先输出
        focList.add(new FileOutConfig(templatePath) {
            @Override
            public String outputFile(TableInfo tableInfo) {
                // 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
                return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()
                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;
            }
        });
        /*
        cfg.setFileCreate(new IFileCreate() {
            @Override
            public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {
                // 判断自定义文件夹是否需要创建
                checkDir("调用默认方法创建的目录，自定义目录用");
                if (fileType == FileType.MAPPER) {
                    // 已经生成 mapper 文件判断存在，不想重新生成返回 false
                    return !new File(filePath).exists();
                }
                // 允许生成模板文件
                return true;
            }
        });
        */
        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);

        // 配置模板
        TemplateConfig templateConfig = new TemplateConfig();

        // 配置自定义输出模板
        //指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
        // templateConfig.setEntity("templates/entity2.java");
        // templateConfig.setService();
        // templateConfig.setController();

        templateConfig.setXml(null);
        mpg.setTemplate(templateConfig);

        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setSuperEntityClass("你自己的父类实体,没有就不用设置!");
        strategy.setEntityLombokModel(true);
        strategy.setRestControllerStyle(true);
        // 公共父类
        strategy.setSuperControllerClass("你自己的父类控制器,没有就不用设置!");
        // 写于父类中的公共字段
        strategy.setSuperEntityColumns("id");
        strategy.setInclude(scanner("表名，多个英文逗号分割").split(","));
        strategy.setControllerMappingHyphenStyle(true);
        strategy.setTablePrefix(pc.getModuleName() + "_");
        mpg.setStrategy(strategy);
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());
        mpg.execute();
    }

}
```

更多详细配置，请参考[代码生成器配置](../config/generator-config.md)一文。

## 使用教程

### 添加依赖

MyBatis-Plus 从 `3.0.3` 之后移除了代码生成器与模板引擎的默认依赖，需要手动添加相关依赖：

- 添加 代码生成器 依赖

  ```xml
  <dependency>
      <groupId>com.baomidou</groupId>
      <artifactId>mybatis-plus-generator</artifactId>
      <version>latest-version</version>
  </dependency>
  ```

- 添加 模板引擎 依赖，MyBatis-Plus 支持 Velocity（默认）、Freemarker、Beetl，用户可以选择自己熟悉的模板引擎，如果都不满足您的要求，可以采用自定义模板引擎。

  Velocity（默认）：

  ```xml
  <dependency>
      <groupId>org.apache.velocity</groupId>
      <artifactId>velocity-engine-core</artifactId>
      <version>latest-velocity-version</version>
  </dependency>
  ```

  Freemarker：

  ```xml
  <dependency>
      <groupId>org.freemarker</groupId>
      <artifactId>freemarker</artifactId>
      <version>latest-freemarker-version</version>
  </dependency>
  ```

  Beetl：

  ```xml
  <dependency>
      <groupId>com.ibeetl</groupId>
      <artifactId>beetl</artifactId>
      <version>latest-beetl-version</version>
  </dependency>
  ```

  注意！如果您选择了非默认引擎，需要在 AutoGenerator 中 设置模板引擎。

  ```java
  AutoGenerator generator = new AutoGenerator();

  // set freemarker engine
  generator.setTemplateEngine(new FreemarkerTemplateEngine());

  // set beetl engine
  generator.setTemplateEngine(new BeetlTemplateEngine());

  // set custom engine (reference class is your custom engine class)
  generator.setTemplateEngine(new CustomTemplateEngine());

  // other config
  ...
  ```

### 编写配置

MyBatis-Plus 的代码生成器提供了大量的自定义参数供用户选择，能够满足绝大部分人的使用需求。

- 配置 GlobalConfig

  ```java
  GlobalConfig globalConfig = new GlobalConfig();
  globalConfig.setOutputDir(System.getProperty("user.dir") + "/src/main/java");
  globalConfig.setAuthor("jobob");
  globalConfig.setOpen(false);
  ```

- 配置 DataSourceConfig

  ```java
  DataSourceConfig dataSourceConfig = new DataSourceConfig();
  dataSourceConfig.setUrl("jdbc:mysql://localhost:3306/ant?useUnicode=true&useSSL=false&characterEncoding=utf8");
  dataSourceConfig.setDriverName("com.mysql.jdbc.Driver");
  dataSourceConfig.setUsername("root");
  dataSourceConfig.setPassword("password");
  ```

## 自定义模板引擎

请继承类 com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine

## 自定义代码模板

```java
//指定自定义模板路径, 位置：/resources/templates/entity2.java.ftl(或者是.vm)
//注意不要带上.ftl(或者是.vm), 会根据使用的模板引擎自动识别
TemplateConfig templateConfig = new TemplateConfig()
    .setEntity("templates/entity2.java");

AutoGenerator mpg = new AutoGenerator();
//配置自定义模板
mpg.setTemplate(templateConfig);
```

## 自定义属性注入

```java
InjectionConfig injectionConfig = new InjectionConfig() {
    //自定义属性注入:abc
    //在.ftl(或者是.vm)模板中，通过${cfg.abc}获取属性
    @Override
    public void initMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("abc", this.getConfig().getGlobalConfig().getAuthor() + "-mp");
        this.setMap(map);
    }
};
AutoGenerator mpg = new AutoGenerator();
//配置自定义属性注入
mpg.setCfg(injectionConfig);
```

```xml
entity2.java.ftl
自定义属性注入abc=${cfg.abc}

entity2.java.vm
自定义属性注入abc=$!{cfg.abc}
```

## 字段其他信息查询注入

![relationship](/img/custom-fields.png)

```java
new DataSourceConfig().setDbQuery(new MySqlQuery() {

    /**
     * 重写父类预留查询自定义字段<br>
     * 这里查询的 SQL 对应父类 tableFieldsSql 的查询字段，默认不能满足你的需求请重写它<br>
     * 模板中调用：  table.fields 获取所有字段信息，
     * 然后循环字段获取 field.customMap 从 MAP 中获取注入字段如下  NULL 或者 PRIVILEGES
     */
    @Override
    public String[] fieldCustom() {
        return new String[]{"NULL", "PRIVILEGES"};
    }
})
```

<script>
export default {
  mounted () {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", "https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.json", false)
    xmlHttp.send(null)
    var mpVersion = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    xmlHttp.open("GET", "https://img.shields.io/maven-central/v/org.apache.velocity/velocity-engine-core.json", false)
    xmlHttp.send(null)
    var velocityVersion = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    xmlHttp.open("GET", "https://img.shields.io/maven-central/v/org.freemarker/freemarker.json", false)
    xmlHttp.send(null)
    var freemarkerVersion = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    xmlHttp.open("GET", "https://img.shields.io/maven-central/v/com.ibeetl/beetl.json", false)
    xmlHttp.send(null)
    var beetlVersion = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    var codeNodeList = document.querySelectorAll('code')
    for (var i = 0; i < codeNodeList.length; i++) {
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('latest-version', mpVersion)
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('latest-velocity-version', velocityVersion)
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('latest-freemarker-version', freemarkerVersion)
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('latest-beetl-version', beetlVersion)
    }
  }
}
</script>
