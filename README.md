# blacking的个人博客

基于 Astro 和 AstroPaper 构建的黑白极简个人博客，部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

开发地址默认为 `http://localhost:4321/blog/`。

## 发布文章

在 `src/content/posts/published/` 中创建 Markdown 或 MDX 文件：

```markdown
---
title: "文章标题"
description: "一句话摘要"
pubDatetime: 2026-11-17T10:00:00+08:00
category: "个人思考"
tags:
  - 创业
  - 思考
featured: false
draft: false
---

正文内容。
```

推送到 `main` 分支后，GitHub Actions 会自动构建并发布。

## 评论

1. 在 GitHub 仓库中启用 Discussions。
2. 安装并配置 Giscus。
3. 复制 `.env.example` 为 `.env`，填写：

```text
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY_ID=
```

## 访问统计

可选接入 Umami：

```text
PUBLIC_UMAMI_WEBSITE_ID=
PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```
