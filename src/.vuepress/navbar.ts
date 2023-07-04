import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/blog/",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/notes/",
    children: [
      {
        text: "C++",
        prefix: "cpp/",
        icon: "",
        children: [
          { text: "基础入门", link: "basic" },
          { text: "核心编程", link: "core" },
        ],
      },
      { text: "Java基础", link: "java" },
    ],
  },


]);
