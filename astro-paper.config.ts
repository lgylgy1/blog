import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lgylgy1.github.io",
    title: "blacking的个人博客",
    description: "你好，我是blacking，一个创业路上的探索者。",
    author: "blacking",
    profile: "https://github.com/lgylgy1",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/lgylgy1/blog/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/lgylgy1",
      linkTitle: "访问 blacking 的 GitHub",
    },
    {
      name: "mail",
      url: "mailto:2985302084@qq.com",
      linkTitle: "发送邮件给 blacking",
    },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
