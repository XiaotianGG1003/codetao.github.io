import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "韬的小站",
  description: "记录学习",
  head: [
    ['meta', { name: 'author', content: '韬'}],
    ['meta', { name: 'keyword', content: '韬的小站，博客'}],
    
  ],
  
  theme,

  // plugins: [
  //   docsearchPlugin: {
        
  //   }
  // ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
