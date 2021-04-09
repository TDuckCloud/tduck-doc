module.exports = {
  dest: "docs",
  base: "/",
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Tduck",
      description: "企业表单问卷收集"
    }
  },
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }]
  ],
  themeConfig: {
    repo: "baomidou/mybatis-plus",
    docsRepo: "baomidou/mybatis-plus-doc",
    editLinks: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "指南",
            link: "/guide/"
          },
          {
            text: "配置",
            link: "/config/"
          },
          {
            text: "更新日志",
            link:
              "https://github.com/baomidou/mybatis-plus/blob/3.0/CHANGELOG.md"
          }
        ],
        sidebar: {
          "/guide/": genGuideSidebar(true),
          "/config/": genConfigSidebar(true)
        }
      }
	  }
  },
  plugins: [
   
  ]
};

function genGuideSidebar(isZh) {
  return [
    {
      title: isZh ? "快速入门" : "Getting Start",
      collapsable: false,
      children: ["", "quick-start", "install", "config", "annotation"]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: [
        "generator",
        "crud-interface",
        "wrapper",
        "page",
        "sequence",
        "id-generator"
      ]
    },
    {
      title: isZh ? "扩展" : "Expand",
      collapsable: false,
      children: [
        "logic-delete",
        "enum",
        "typehandler",
        "auto-fill-metainfo",
        "sql-injector",
        "p6spy",
        "safety",
        "dynamic-datasource",
        "mybatisx-idea-plugin"
      ]
    },
    {
      title: isZh ? "插件" : "Plugin",
      collapsable: false,
      children: [
        "interceptor",
        "interceptor-pagination",
        "interceptor-optimistic-locker",
        "interceptor-tenant-line",
        "interceptor-block-attack",
        "interceptor-dynamic-table-name"
      ]
    },
    {
      title: "FAQ",
      collapsable: false,
      children: ["faq", "donate"]
    }
  ];
}

function genConfigSidebar(isZh) {
  return [
    {
      title: isZh ? "配置" : "Config",
      collapsable: false,
      children: ["", "generator-config"]
    }
  ];
}
