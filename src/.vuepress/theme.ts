import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
  //  部署域名
  hostname: "https://codetao.cc",

  //  作者
  author: {
    name: "韬",
    url: "https://codetao.cc",
  },

  //  站点图标
  favicon: 'icon.png',
  // navbar
  navbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  //  导航栏图标
  logo: "/logo.png",
  logoDark: "/logo.png",
  //  导航栏仓库地址
  repoDisplay: false,
  repo: "vuepress-theme-hope/vuepress-theme-hope",

  // sidebar
  sidebar,

  //页面信息
  pageInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "Word"],
  print: false,
  //  是否在桌面模式下右侧展示标题列表
  toc: true,

  blog: {
    name: "韬",
    avatar: "hero.svg",
    roundAvatar: false,
    description: "一名普通在校大学生",
    medias: {
      GitHub: "https://github.com/XiaotianGG1003",
      // BiliBili: "https://example.com",
      // Email: "mailto:info@example.com",
      // QQ: "https://example.com",
    },
    //文章信息
    articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag"],
  },

  docsDir: "src",
  
  //  字体图标资源链接
  iconAssets: "fontawesome-with-brands",


  //  页脚的默认内容
  footer: "主题使用 <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a> | <a href=\"/about/website.html\" target=\"_blank\">关于网站</a>",
  //  是否默认显示页脚
  displayFooter: true,
  copyright: "Copyright © 2023 韬",

  encrypt: {
    config: {
      //加密
      //"/demo/encrypt.html": ["1234"],
    },
  },


  lastUpdated: true,
  contributors: true,
  editLink: false,
  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  

  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      comment: false,
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },



    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },


});
