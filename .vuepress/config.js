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
            title: "Tduck填鸭",
            description: "企业表单问卷收集"
        }
    },
    head: [
        ["link", {rel: "icon", href: `/favicon.ico`}]
    ],
    themeConfig: {
        repo: "TDuckCloud/tduck-platform",
        docsRepo: "TDuckCloud/tduck-doc",
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
                        text: "更新日志",
                        link: "/log/"
                    }
                ],
                sidebar: {
                    "/guide/": genGuideSidebar(true),
                    "/log/": genUpdateLogSidebar(true)
                }
            }
        }
    },
    plugins: []
};

function genGuideSidebar(isZh) {
    return [
        {
            title: isZh ? "快速入门" : "Getting Start",
            collapsable: false,
            children: ["", "local-run", "deploy",]
        },
        {
            title: isZh ? "项目架构" : "Core",
            collapsable: false,
            children: [
            ]
        },
        {
            title: isZh ? "系统配置" : "Core",
            collapsable: false,
            children: [
                "api-config",
                "storage-config",
                "front-config",
                "api-security",
                "close-validate",
                "close-wx",
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: ["faq"]
        }
    ];
}



function genUpdateLogSidebar(isZh) {
    return [
        {
            title: isZh ? "更新日志" : "Config",
            collapsable: false,
            children: [""]
        }
    ];
}
