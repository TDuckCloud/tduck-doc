(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"代码生成器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码生成器配置"}},[a._v("#")]),a._v(" 代码生成器配置")]),a._v(" "),t("h2",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[a._v("#")]),a._v(" 基本配置")]),a._v(" "),t("h3",{attrs:{id:"datasource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datasource"}},[a._v("#")]),a._v(" dataSource")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("DataSourceConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("数据源配置，通过该配置，指定需要生成代码的具体数据库，具体请查看 "),t("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E6%BA%90-datasourceconfig-%E9%85%8D%E7%BD%AE"}},[a._v("数据源配置")])]),a._v(" "),t("h3",{attrs:{id:"strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strategy"}},[a._v("#")]),a._v(" strategy")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("StrategyConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("数据库表配置，通过该配置，可指定需要生成哪些表或者排除哪些表，具体请查看 "),t("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E9%85%8D%E7%BD%AE"}},[a._v("数据库表配置")])]),a._v(" "),t("h3",{attrs:{id:"packageinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packageinfo"}},[a._v("#")]),a._v(" packageInfo")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("PackageConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("包名配置，通过该配置，指定生成代码的包路径，具体请查看 "),t("a",{attrs:{href:"#%E5%8C%85%E5%90%8D%E9%85%8D%E7%BD%AE"}},[a._v("包名配置")])]),a._v(" "),t("h3",{attrs:{id:"template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[a._v("#")]),a._v(" template")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("TemplateConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("模板配置，可自定义代码生成的模板，实现个性化操作，具体请查看 "),t("a",{attrs:{href:"#%E6%A8%A1%E6%9D%BF%E9%85%8D%E7%BD%AE"}},[a._v("模板配置")])]),a._v(" "),t("h3",{attrs:{id:"globalconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#globalconfig"}},[a._v("#")]),a._v(" globalConfig")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("GlobalConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("全局策略配置，具体请查看 "),t("a",{attrs:{href:"#%E5%85%A8%E5%B1%80%E7%AD%96%E7%95%A5-globalconfig-%E9%85%8D%E7%BD%AE"}},[a._v("全局策略配置")])]),a._v(" "),t("h3",{attrs:{id:"injectionconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#injectionconfig"}},[a._v("#")]),a._v(" injectionConfig")]),a._v(" "),t("ul",[t("li",[a._v("类型："),t("code",[a._v("InjectionConfig")])]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("p",[a._v("注入配置，通过该配置，可注入自定义参数等操作以实现个性化操作，具体请查看 "),t("a",{attrs:{href:"#%E6%B3%A8%E5%85%A5-injectionconfig-%E9%85%8D%E7%BD%AE"}},[a._v("注入配置")])]),a._v(" "),t("h2",{attrs:{id:"数据源-datasourceconfig-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据源-datasourceconfig-配置"}},[a._v("#")]),a._v(" 数据源 "),t("code",[a._v("dataSourceConfig")]),a._v(" 配置")]),a._v(" "),t("h3",{attrs:{id:"dbquery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbquery"}},[a._v("#")]),a._v(" dbQuery")]),a._v(" "),t("ul",[t("li",[a._v("数据库信息查询类")]),a._v(" "),t("li",[a._v("默认由 "),t("code",[a._v("dbType")]),a._v(" 类型决定选择对应数据库内置实现")])]),a._v(" "),t("p",[a._v("实现 "),t("code",[a._v("IDbQuery")]),a._v(" 接口自定义数据库查询 "),t("code",[a._v("SQL 语句")]),a._v(" 定制化返回自己需要的内容")]),a._v(" "),t("h3",{attrs:{id:"dbtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbtype"}},[a._v("#")]),a._v(" dbType")]),a._v(" "),t("ul",[t("li",[a._v("数据库类型")]),a._v(" "),t("li",[a._v("该类内置了常用的数据库类型【必须】")])]),a._v(" "),t("h3",{attrs:{id:"schemaname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schemaname"}},[a._v("#")]),a._v(" schemaName")]),a._v(" "),t("ul",[t("li",[a._v("数据库 schema name")]),a._v(" "),t("li",[a._v("例如 "),t("code",[a._v("PostgreSQL")]),a._v(" 可指定为 "),t("code",[a._v("public")])])]),a._v(" "),t("h3",{attrs:{id:"typeconvert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typeconvert"}},[a._v("#")]),a._v(" typeConvert")]),a._v(" "),t("ul",[t("li",[a._v("类型转换")]),a._v(" "),t("li",[a._v("默认由 "),t("code",[a._v("dbType")]),a._v(" 类型决定选择对应数据库内置实现")])]),a._v(" "),t("p",[a._v("实现 "),t("code",[a._v("ITypeConvert")]),a._v(" 接口自定义数据库 "),t("code",[a._v("字段类型")]),a._v(" 转换为自己需要的 "),t("code",[a._v("java")]),a._v(" 类型，内置转换类型无法满足可实现 "),t("code",[a._v("IColumnType")]),a._v(" 接口自定义")]),a._v(" "),t("h3",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[a._v("#")]),a._v(" url")]),a._v(" "),t("ul",[t("li",[a._v("驱动连接的URL")])]),a._v(" "),t("h3",{attrs:{id:"drivername"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drivername"}},[a._v("#")]),a._v(" driverName")]),a._v(" "),t("ul",[t("li",[a._v("驱动名称")])]),a._v(" "),t("h3",{attrs:{id:"username"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[a._v("#")]),a._v(" username")]),a._v(" "),t("ul",[t("li",[a._v("数据库连接用户名")])]),a._v(" "),t("h3",{attrs:{id:"password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[a._v("#")]),a._v(" password")]),a._v(" "),t("ul",[t("li",[a._v("数据库连接密码")])]),a._v(" "),t("h2",{attrs:{id:"数据库表配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库表配置"}},[a._v("#")]),a._v(" 数据库表配置")]),a._v(" "),t("h3",{attrs:{id:"iscapitalmode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iscapitalmode"}},[a._v("#")]),a._v(" isCapitalMode")]),a._v(" "),t("p",[a._v("是否大写命名")]),a._v(" "),t("h3",{attrs:{id:"skipview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipview"}},[a._v("#")]),a._v(" skipView")]),a._v(" "),t("p",[a._v("是否跳过视图")]),a._v(" "),t("h3",{attrs:{id:"naming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naming"}},[a._v("#")]),a._v(" naming")]),a._v(" "),t("p",[a._v("数据库表映射到实体的命名策略")]),a._v(" "),t("h3",{attrs:{id:"columnnaming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#columnnaming"}},[a._v("#")]),a._v(" columnNaming")]),a._v(" "),t("p",[a._v("数据库表字段映射到实体的命名策略, 未指定按照 naming 执行")]),a._v(" "),t("h3",{attrs:{id:"tableprefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tableprefix"}},[a._v("#")]),a._v(" tablePrefix")]),a._v(" "),t("p",[a._v("表前缀")]),a._v(" "),t("h3",{attrs:{id:"fieldprefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fieldprefix"}},[a._v("#")]),a._v(" fieldPrefix")]),a._v(" "),t("p",[a._v("字段前缀")]),a._v(" "),t("h3",{attrs:{id:"superentityclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#superentityclass"}},[a._v("#")]),a._v(" superEntityClass")]),a._v(" "),t("p",[a._v("自定义继承的Entity类全称，带包名")]),a._v(" "),t("h3",{attrs:{id:"superentitycolumns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#superentitycolumns"}},[a._v("#")]),a._v(" superEntityColumns")]),a._v(" "),t("p",[a._v("自定义基础的Entity类，公共字段")]),a._v(" "),t("h3",{attrs:{id:"supermapperclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supermapperclass"}},[a._v("#")]),a._v(" superMapperClass")]),a._v(" "),t("p",[a._v("自定义继承的Mapper类全称，带包名")]),a._v(" "),t("h3",{attrs:{id:"superserviceclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#superserviceclass"}},[a._v("#")]),a._v(" superServiceClass")]),a._v(" "),t("p",[a._v("自定义继承的Service类全称，带包名")]),a._v(" "),t("h3",{attrs:{id:"superserviceimplclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#superserviceimplclass"}},[a._v("#")]),a._v(" superServiceImplClass")]),a._v(" "),t("p",[a._v("自定义继承的ServiceImpl类全称，带包名")]),a._v(" "),t("h3",{attrs:{id:"supercontrollerclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supercontrollerclass"}},[a._v("#")]),a._v(" superControllerClass")]),a._v(" "),t("p",[a._v("自定义继承的Controller类全称，带包名")]),a._v(" "),t("h3",{attrs:{id:"enablesqlfilter-since-3-3-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enablesqlfilter-since-3-3-1"}},[a._v("#")]),a._v(" enableSqlFilter（since 3.3.1）")]),a._v(" "),t("p",[a._v("默认激活进行sql模糊表名匹配")]),a._v(" "),t("p",[a._v("关闭之后likeTable与notLikeTable将失效，include和exclude将使用内存过滤")]),a._v(" "),t("p",[a._v("如果有sql语法兼容性问题的话，请手动设置为false")]),a._v(" "),t("p",[a._v("已知无法使用：MyCat中间件， "),t("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/issues/2102",target:"_blank",rel:"noopener noreferrer"}},[a._v("支持情况传送门"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"include"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[a._v("#")]),a._v(" include")]),a._v(" "),t("p",[a._v("需要包含的表名，当enableSqlFilter为false时，允许正则表达式（与exclude二选一配置）")]),a._v(" "),t("h3",{attrs:{id:"liketable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liketable"}},[a._v("#")]),a._v(" likeTable")]),a._v(" "),t("p",[a._v("自3.3.0起，模糊匹配表名（与notLikeTable二选一配置）")]),a._v(" "),t("h3",{attrs:{id:"exclude"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[a._v("#")]),a._v(" exclude")]),a._v(" "),t("p",[a._v("需要排除的表名，当enableSqlFilter为false时，允许正则表达式")]),a._v(" "),t("h3",{attrs:{id:"notliketable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notliketable"}},[a._v("#")]),a._v(" notLikeTable")]),a._v(" "),t("p",[a._v("自3.3.0起，模糊排除表名")]),a._v(" "),t("h3",{attrs:{id:"entitycolumnconstant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitycolumnconstant"}},[a._v("#")]),a._v(" entityColumnConstant")]),a._v(" "),t("p",[a._v("【实体】是否生成字段常量（默认 false）")]),a._v(" "),t("h3",{attrs:{id:"entitybuildermodel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitybuildermodel"}},[a._v("#")]),a._v(" "),t("s",[a._v("entityBuilderModel")])]),a._v(" "),t("p",[a._v("【实体】是否为构建者模型（默认 false），自3.3.2开始更名为 "),t("a",{attrs:{href:"#chainmodel%EF%BC%88since-3-3-2%EF%BC%89"}},[a._v("chainModel")])]),a._v(" "),t("h3",{attrs:{id:"chainmodel-since-3-3-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chainmodel-since-3-3-2"}},[a._v("#")]),a._v(" chainModel（since 3.3.2）")]),a._v(" "),t("p",[a._v("【实体】是否为链式模型（默认 false）")]),a._v(" "),t("h3",{attrs:{id:"entitylombokmodel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitylombokmodel"}},[a._v("#")]),a._v(" entityLombokModel")]),a._v(" "),t("p",[a._v("【实体】是否为lombok模型（默认 false）")]),a._v(" "),t("p",[a._v("3.3.2以下版本默认生成了链式模型，3.3.2以后，默认不生成，如有需要，请开启 "),t("a",{attrs:{href:"#chainmodel%EF%BC%88since-3-3-2%EF%BC%89"}},[a._v("chainModel")])]),a._v(" "),t("h3",{attrs:{id:"entitybooleancolumnremoveisprefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitybooleancolumnremoveisprefix"}},[a._v("#")]),a._v(" entityBooleanColumnRemoveIsPrefix")]),a._v(" "),t("p",[a._v("Boolean类型字段是否移除is前缀（默认 false）")]),a._v(" "),t("h3",{attrs:{id:"restcontrollerstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restcontrollerstyle"}},[a._v("#")]),a._v(" restControllerStyle")]),a._v(" "),t("p",[a._v("生成 "),t("code",[a._v("@RestController")]),a._v(" 控制器")]),a._v(" "),t("h3",{attrs:{id:"controllermappinghyphenstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controllermappinghyphenstyle"}},[a._v("#")]),a._v(" controllerMappingHyphenStyle")]),a._v(" "),t("p",[a._v("驼峰转连字符")]),a._v(" "),t("h3",{attrs:{id:"entitytablefieldannotationenable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitytablefieldannotationenable"}},[a._v("#")]),a._v(" entityTableFieldAnnotationEnable")]),a._v(" "),t("p",[a._v("是否生成实体时，生成字段注解")]),a._v(" "),t("h3",{attrs:{id:"versionfieldname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versionfieldname"}},[a._v("#")]),a._v(" versionFieldName")]),a._v(" "),t("p",[a._v("乐观锁属性名称")]),a._v(" "),t("h3",{attrs:{id:"logicdeletefieldname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logicdeletefieldname"}},[a._v("#")]),a._v(" logicDeleteFieldName")]),a._v(" "),t("p",[a._v("逻辑删除属性名称")]),a._v(" "),t("h3",{attrs:{id:"tablefilllist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablefilllist"}},[a._v("#")]),a._v(" tableFillList")]),a._v(" "),t("p",[a._v("表填充字段")]),a._v(" "),t("h2",{attrs:{id:"包名配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包名配置"}},[a._v("#")]),a._v(" 包名配置")]),a._v(" "),t("h3",{attrs:{id:"parent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parent"}},[a._v("#")]),a._v(" parent")]),a._v(" "),t("p",[a._v("父包名。如果为空，将下面子包名必须写全部， 否则就只需写子包名")]),a._v(" "),t("h3",{attrs:{id:"modulename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modulename"}},[a._v("#")]),a._v(" moduleName")]),a._v(" "),t("p",[a._v("父包模块名")]),a._v(" "),t("h3",{attrs:{id:"entity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity"}},[a._v("#")]),a._v(" entity")]),a._v(" "),t("p",[a._v("Entity包名")]),a._v(" "),t("h3",{attrs:{id:"service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[a._v("#")]),a._v(" service")]),a._v(" "),t("p",[a._v("Service包名")]),a._v(" "),t("h3",{attrs:{id:"serviceimpl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serviceimpl"}},[a._v("#")]),a._v(" serviceImpl")]),a._v(" "),t("p",[a._v("Service Impl包名")]),a._v(" "),t("h3",{attrs:{id:"mapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapper"}},[a._v("#")]),a._v(" mapper")]),a._v(" "),t("p",[a._v("Mapper包名")]),a._v(" "),t("h3",{attrs:{id:"xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[a._v("#")]),a._v(" xml")]),a._v(" "),t("p",[a._v("Mapper XML包名")]),a._v(" "),t("h3",{attrs:{id:"controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[a._v("#")]),a._v(" controller")]),a._v(" "),t("p",[a._v("Controller包名")]),a._v(" "),t("h3",{attrs:{id:"pathinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pathinfo"}},[a._v("#")]),a._v(" pathInfo")]),a._v(" "),t("p",[a._v("路径配置信息")]),a._v(" "),t("h2",{attrs:{id:"模板配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板配置"}},[a._v("#")]),a._v(" 模板配置")]),a._v(" "),t("h3",{attrs:{id:"entity-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity-2"}},[a._v("#")]),a._v(" entity")]),a._v(" "),t("p",[a._v("Java 实体类模板")]),a._v(" "),t("h3",{attrs:{id:"entitykt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entitykt"}},[a._v("#")]),a._v(" entityKt")]),a._v(" "),t("p",[a._v("Kotin 实体类模板")]),a._v(" "),t("h3",{attrs:{id:"service-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-2"}},[a._v("#")]),a._v(" service")]),a._v(" "),t("p",[a._v("Service 类模板")]),a._v(" "),t("h3",{attrs:{id:"serviceimpl-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serviceimpl-2"}},[a._v("#")]),a._v(" serviceImpl")]),a._v(" "),t("p",[a._v("Service impl 实现类模板")]),a._v(" "),t("h3",{attrs:{id:"mapper-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapper-2"}},[a._v("#")]),a._v(" mapper")]),a._v(" "),t("p",[a._v("mapper 模板")]),a._v(" "),t("h3",{attrs:{id:"xml-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml-2"}},[a._v("#")]),a._v(" xml")]),a._v(" "),t("p",[a._v("mapper xml 模板")]),a._v(" "),t("h3",{attrs:{id:"controller-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller-2"}},[a._v("#")]),a._v(" controller")]),a._v(" "),t("p",[a._v("controller 控制器模板")]),a._v(" "),t("h2",{attrs:{id:"全局策略-globalconfig-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局策略-globalconfig-配置"}},[a._v("#")]),a._v(" 全局策略 "),t("code",[a._v("globalConfig")]),a._v(" 配置")]),a._v(" "),t("h3",{attrs:{id:"outputdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outputdir"}},[a._v("#")]),a._v(" outputDir")]),a._v(" "),t("ul",[t("li",[a._v("生成文件的输出目录")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("D 盘根目录")])])]),a._v(" "),t("h3",{attrs:{id:"fileoverride"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fileoverride"}},[a._v("#")]),a._v(" fileOverride")]),a._v(" "),t("ul",[t("li",[a._v("是否覆盖已有文件")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"open"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[a._v("#")]),a._v(" open")]),a._v(" "),t("ul",[t("li",[a._v("是否打开输出目录")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("true")])])]),a._v(" "),t("h3",{attrs:{id:"enablecache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enablecache"}},[a._v("#")]),a._v(" enableCache")]),a._v(" "),t("ul",[t("li",[a._v("是否在xml中添加二级缓存配置")]),a._v(" "),t("li",[a._v("默认值：`false")])]),a._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[a._v("#")]),a._v(" author")]),a._v(" "),t("ul",[t("li",[a._v("开发人员")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("h3",{attrs:{id:"kotlin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[a._v("#")]),a._v(" kotlin")]),a._v(" "),t("ul",[t("li",[a._v("开启 Kotlin 模式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"swagger2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger2"}},[a._v("#")]),a._v(" swagger2")]),a._v(" "),t("ul",[t("li",[a._v("开启 swagger2 模式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"activerecord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activerecord"}},[a._v("#")]),a._v(" activeRecord")]),a._v(" "),t("ul",[t("li",[a._v("开启 ActiveRecord 模式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"baseresultmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseresultmap"}},[a._v("#")]),a._v(" baseResultMap")]),a._v(" "),t("ul",[t("li",[a._v("开启 BaseResultMap")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"basecolumnlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basecolumnlist"}},[a._v("#")]),a._v(" baseColumnList")]),a._v(" "),t("ul",[t("li",[a._v("开启 baseColumnList")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("false")])])]),a._v(" "),t("h3",{attrs:{id:"datetype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datetype"}},[a._v("#")]),a._v(" dateType")]),a._v(" "),t("ul",[t("li",[a._v("时间类型对应策略")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("TIME_PACK")])])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("注意事项:")]),a._v(" "),t("p",[a._v("如下配置 "),t("code",[a._v("%s")]),a._v(" 为占位符")])]),a._v(" "),t("h3",{attrs:{id:"entityname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entityname"}},[a._v("#")]),a._v(" entityName")]),a._v(" "),t("ul",[t("li",[a._v("实体命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sEntity")]),a._v(" 生成 "),t("code",[a._v("UserEntity")])])]),a._v(" "),t("h3",{attrs:{id:"mappername"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mappername"}},[a._v("#")]),a._v(" mapperName")]),a._v(" "),t("ul",[t("li",[a._v("mapper 命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sDao")]),a._v(" 生成 "),t("code",[a._v("UserDao")])])]),a._v(" "),t("h3",{attrs:{id:"xmlname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xmlname"}},[a._v("#")]),a._v(" xmlName")]),a._v(" "),t("ul",[t("li",[a._v("Mapper xml 命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sDao")]),a._v(" 生成 "),t("code",[a._v("UserDao.xml")])])]),a._v(" "),t("h3",{attrs:{id:"servicename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servicename"}},[a._v("#")]),a._v(" serviceName")]),a._v(" "),t("ul",[t("li",[a._v("service 命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sBusiness")]),a._v(" 生成 "),t("code",[a._v("UserBusiness")])])]),a._v(" "),t("h3",{attrs:{id:"serviceimplname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serviceimplname"}},[a._v("#")]),a._v(" serviceImplName")]),a._v(" "),t("ul",[t("li",[a._v("service impl 命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sBusinessImpl")]),a._v(" 生成 "),t("code",[a._v("UserBusinessImpl")])])]),a._v(" "),t("h3",{attrs:{id:"controllername"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controllername"}},[a._v("#")]),a._v(" controllerName")]),a._v(" "),t("ul",[t("li",[a._v("controller 命名方式")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")]),a._v("\n例如："),t("code",[a._v("%sAction")]),a._v(" 生成 "),t("code",[a._v("UserAction")])])]),a._v(" "),t("h3",{attrs:{id:"idtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idtype"}},[a._v("#")]),a._v(" idType")]),a._v(" "),t("ul",[t("li",[a._v("指定生成的主键的ID类型")]),a._v(" "),t("li",[a._v("默认值："),t("code",[a._v("null")])])]),a._v(" "),t("h2",{attrs:{id:"注入-injectionconfig-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注入-injectionconfig-配置"}},[a._v("#")]),a._v(" 注入 "),t("code",[a._v("injectionConfig")]),a._v(" 配置")]),a._v(" "),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" map")]),a._v(" "),t("ul",[t("li",[a._v("自定义返回配置 Map 对象")]),a._v(" "),t("li",[a._v("该对象可以传递到模板引擎通过 "),t("code",[a._v("cfg.xxx")]),a._v(" 引用")])]),a._v(" "),t("h3",{attrs:{id:"fileoutconfiglist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fileoutconfiglist"}},[a._v("#")]),a._v(" fileOutConfigList")]),a._v(" "),t("ul",[t("li",[a._v("自定义输出文件")]),a._v(" "),t("li",[a._v("配置 "),t("code",[a._v("FileOutConfig")]),a._v(" 指定模板文件、输出文件达到自定义文件生成目的")])]),a._v(" "),t("h3",{attrs:{id:"filecreate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filecreate"}},[a._v("#")]),a._v(" fileCreate")]),a._v(" "),t("ul",[t("li",[a._v("自定义判断是否创建文件")]),a._v(" "),t("li",[a._v("实现 "),t("code",[a._v("IFileCreate")]),a._v(" 接口")])]),a._v(" "),t("p",[a._v("该配置用于判断某个类是否需要覆盖创建，当然你可以自己实现差异算法 "),t("code",[a._v("merge")]),a._v(" 文件")]),a._v(" "),t("h3",{attrs:{id:"initmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initmap"}},[a._v("#")]),a._v(" initMap")]),a._v(" "),t("ul",[t("li",[a._v("注入自定义 Map 对象(注意需要setMap放进去)")])])])}),[],!1,null,null,null);e.default=s.exports}}]);