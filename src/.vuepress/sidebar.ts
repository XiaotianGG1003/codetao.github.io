import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      link: "/blog/",
      prefix: "blog/",
      collapsible: true,
      children: "structure"
    },
    {
      // 必要的，分组的标题文字
      text: "笔记",
      // 可选的, 分组标题对应的图标
      icon: "pen-to-square",
      // 可选的, 分组标题对应的链接
      link: "/notes/",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "notes/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 必要的，分组的子项目
      children: "structure"
    },

  ],
  
  //  单独配置
  // "/notes/": "structure",
});
