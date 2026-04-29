# My Home Page

一个基于 Astro 5 + React 19 + Tailwind CSS 4 构建的个人主页，采用「抹茶·治愈」风格的视觉设计系统。

## 项目特点

- **Astro 5**：现代化的静态站点生成器，提供极致的性能优化
- **React 19**：用于构建动态交互组件（Hero、导航栏、主题切换等）
- **Tailwind CSS 4**：实用优先的 CSS 框架，实现快速样式开发
- **抹茶视觉系统**：以抹茶绿色系为核心，暖木棕和深墨绿为辅助的统一配色方案
- **深色模式**：支持亮色/暗色主题切换，暗色适配深墨绿背景
- **响应式设计**：完美适配各种屏幕尺寸（桌面/平板/手机）
- **动画效果**：使用 Framer Motion 实现流畅的入场动画和头像浮动效果
- **毛玻璃卡片**：半透明卡片配合模糊效果，与背景图完美融合
- **装饰引用块**：格言以 ❝❞ 装饰引号优雅呈现

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [React](https://react.dev/) - UI 组件库
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架（v4）
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Lucide React](https://lucide.dev/) - 图标库
- [Vite](https://vitejs.dev/) - 构建工具

## AI 辅助开发工具

本项目在开发过程中使用了以下 AI 编程助手，显著提升了开发效率：

- **[Lingma (通义灵码)](https://tongyi.aliyun.com/lingma/)** - 阿里云推出的智能编码助手，提供代码补全、解释、优化等功能
- **[Trae](https://www.trae.ai/)** - 字节跳动推出的 AI 编程工具，支持智能代码生成和项目理解

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

启动后，在浏览器中打开 `http://localhost:4321` 查看效果。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist/` 目录。

### 预览生产版本

```bash
pnpm preview
```

## 部署到 EdgeOne Pages

EdgeOne Pages 是腾讯云提供的一站式前端托管服务，支持从 Git 仓库自动部署。

### 方式一：通过控制台部署（推荐）

1. **登录 EdgeOne 控制台**
   - 访问 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone)
   - 选择「Pages」-> 「新建项目」

2. **关联 Git 仓库**
   - 选择代码源（GitHub / GitLab / Gitee 等）
   - 授权并选择本项目仓库

3. **配置构建设置**
   - **框架预设**：选择 `Astro`
   - **构建命令**：`pnpm build`
   - **输出目录**：`dist`
   - **Node 版本**：建议选择 `18.x` 或更高

4. **环境变量（可选）**
   - 如有需要，可在「环境变量」中添加

5. **点击「创建并部署」**
   - 系统会自动拉取代码、构建并部署
   - 部署完成后会生成一个默认域名

6. **绑定自定义域名（可选）**
   - 在「域名管理」中绑定自己的域名
   - 按照提示配置 DNS 解析

### 方式二：通过 CLI 部署

1. **安装 EdgeOne CLI**

```bash
npm install -g @edgeone/cli
```

2. **登录 EdgeOne**

```bash
eo login
```

3. **构建项目**

```bash
pnpm build
```

4. **部署到 EdgeOne Pages**

```bash
eo pages deploy dist
```

### 自动部署配置

如果通过 Git 关联部署，每次推送到主分支（如 `main` 或 `master`）时，EdgeOne Pages 会自动触发构建和部署。

你可以在 EdgeOne 控制台的「构建日志」中查看部署状态和日志。

## 项目结构

```
My-Home-Page/
├── src/
│   ├── components/      # React 组件
│   │   ├── Hero.tsx    # 头部区域组件（头像、昵称、格言）
│   │   ├── Nav.tsx     # 导航栏组件（4 个抹茶风格按钮）
│   │   ├── Footer.tsx  # 底部信息组件（版权、友链、统计）
│   │   └── ThemeToggle.tsx  # 主题切换组件（毛玻璃按钮）
│   ├── layouts/
│   │   └── Layout.astro  # 页面布局模板（字体、SEO、统计脚本）
│   ├── pages/
│   │   └── index.astro   # 主页（毛玻璃卡片容器布局）
│   └── styles/
│       └── index.css     # 全局样式（抹茶色系 CSS 变量 + Tailwind）
├── docs/
│   └── superpowers/
│       ├── specs/        # 设计文档
│       └── plans/        # 实施计划
├── astro.config.mjs    # Astro 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目依赖
```

## 自定义配置

### 修改主题色

编辑 `src/styles/index.css` 中的 `@theme` 区块，调整以下 CSS 变量：

| 变量 | 默认值 | 用途 |
|------|--------|------|
| `--color-matcha-deep` | `#5B8C5A` | 主色调 / 强调色 |
| `--color-matcha-mid` | `#81C784` | 悬停 / 渐变 |
| `--color-matcha-light` | `#A5D6A7` | 点缀 / 装饰 |
| `--color-matcha-pale` | `#E8F5E9` | 背景 / 卡片 |
| `--color-dark-green` | `#2D3A2D` | 深墨绿 / 亮色模式文字 |
| `--color-warm-brown` | `#8D6E63` | 辅助色 / 引用装饰 |

### 修改背景图片

编辑 `src/pages/index.astro` 中的背景图片 URL。

### 修改个人信息

编辑 `src/components/Hero.tsx` 中的昵称和格言文字。

### 修改导航链接

编辑 `src/components/Nav.tsx` 中的 `links` 数组。

## 许可证

GPL v3 License
