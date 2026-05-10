# 项目架构文档

## 项目概述

这是一个基于 Next.js 和 CSS Modules 构建的全屏滚动吸附演示幻灯片模板，用于丽水市公共数据平台运维服务项目的履约汇报。

## 技术栈

- **框架**: Next.js 15.3.0
- **UI库**: React 19.0.0
- **语言**: TypeScript
- **样式**: CSS Modules
- **运行时**: Bun
- **依赖**: qrcode.react (二维码分享功能)

## 目录结构

```
scroll-deck-template/
├── public/                      # 静态资源（图片等）
│   ├── china-telecom-logo.svg   # 中国电信Logo
│   └── image*.png               # 各类展示图片
├── src/app/
│   ├── deck/
│   │   ├── index.tsx            # Deck引擎（滚动捕捉、导航核心）
│   │   ├── deck.module.css      # Deck样式（导航栏、进度条、分享按钮）
│   │   ├── blocks/
│   │   │   ├── index.tsx        # 所有slide组件
│   │   │   └── slide.module.css # 所有slide样式
│   │   └── example-deck.tsx     # 示例内容（第1-17页）
│   ├── globals.css              # 全局主题变量
│   ├── layout.tsx              # 根布局（暗黑背景 bg-black）
│   └── page.tsx                # 入口页面
├── architecture.md             # 本文档
├── README.md                   # 项目说明
├── package.json               # 依赖配置
└── next.config.js             # Next.js配置
```

## 核心组件

### 1. Deck引擎 (src/app/deck/index.tsx)
- 滚动吸附导航 (scroll-snap-type: y mandatory)
- 键盘方向键导航 (↑↓←→)
- 触摸滑动导航 (touchstart/touchend)
- 进度条显示 (顶部3px进度条)
- 导航Pill（底部居中页码+上下页按钮）
- 分享按钮（右下角二维码弹窗）

### 2. 幻灯片组件 (src/app/deck/blocks/index.tsx)

| 组件 | 用途 | 样式类 |
|------|------|--------|
| CoverSlide | 封面页（Logo、标题、日期、滚动提示）| coverSection, coverTitle, coverDate |
| OutlineSlide | 目录/列表页（带序号的一二三）| outlineLabel, outlineList, outlineItem |
| MindMapSlide | 思维导图/树形结构（左右分栏）| mindMapLabel, mindMapContainer, mindMapBranch |
| TextSlide | 通用文本页 | label, title, highlight |
| StatsSlide | 统计数字页（卡片网格）| statGrid, stat, statNumber |
| PipelineSlide | 流程步骤页（带箭头）| pipeline, pipelineStep, pipelineArrow |
| CodeSlide | 代码展示页 | codeBlock |
| FeatureGridSlide | 特性网格页 | featureGrid, feature |
| CardGridSlide | 卡片网格页 | cardGrid, card, cardHighlighted |
| ColumnsSlide | 多列列表页 | columns, columnTitle, columnList |
| ComparisonSlide | 对比表格页 | table, thHighlighted, cellYes, cellNo |
| TeamSlide | 团队成员页 | teamGrid, member |
| VisionSlide | 愿景/CTA页 | coverSection, contactLinks |

### 3. 自定义Section (example-deck.tsx)
部分页面使用自定义section，绕过TextSlide的1100px宽度限制，使用1400px：
- 第5页：2.1 例行巡检 (mobileSection, mobileImageGrid)
- 第6页：2.2 巡检问题 (mobileProblemList, mobileCheckOk/mobileCheckNo)
- 第7页：2.3 功能优化（主动优化）(mobileImageGrid)
- 第8页：2.4 功能优化（动态优化）(mobileChartWrapper, mobileChartBars)
- 第9-12页：功能优化明细表 (mobileTableSection, mobileTable)
- 第13页：2.7 服务器资源配置 (mobileSection, mobileImageGrid)
- 第14页：2.8 服务器资源配置明细表 (mobileTableSection)
- 第15页：2.9 安全风险处置 (mobileSection, mobileImageGrid)
- 第16页：2.10 安全配置管理 (mobileSection, mobileProblemList)
- 第17页：2.11 数据迁移 (mobileTableSection, 24行9列)

## 主题系统

### globals.css 定义
```css
:root {
  --color-background: #ffffff;        /* 实际被layout覆盖为黑色 */
  --color-foreground: #000000;        /* 实际被layout覆盖为白色 */
  --color-foreground-rgb: 0, 0, 0;   /* 用于rgba透明色 */
  --color-accent: #C00000;            /* 强调色/高亮红色（中国红） */
  --color-accent-rgb: 192, 0, 0;
  --color-depth-1: rgba(0, 0, 0, 0.04); /* 卡片背景 */
  --color-error: #ff1e12;             /* 错误红色 */
}
```

### layout.tsx 强制覆盖
```tsx
<body className="antialiased bg-black">{children}</body>
```
背景强制为黑色，文字为白色。

### 颜色使用规范
- 文字: #ffffff
- 高亮/强调: var(--color-accent) (#C00000)
- 已完成状态: #2ecc71 (绿色)
- 未完成状态: #ff6b35 (橙色)
- 目录默认背景: #888888 (灰色)
- 目录激活背景: var(--color-accent)

## 页面列表

| 页码 | 标题 | 组件类型 | 内容 |
|------|------|----------|------|
| 1 | Cover | CoverSlide | 丽水市公共数据平台运维服务项目履约汇报 |
| 2 | 目录 | OutlineSlide | 整体服务内容（高亮第一项）|
| 3 | MindMap | MindMapSlide | 整体服务内容详述（三栏思维导图）|
| 4 | 目录 | OutlineSlide | 本月工作内容（高亮第二项）|
| 5-8 | 工作详情 | Custom Section | 例行巡检、问题列表、功能优化 |
| 9-12 | 明细表 | MobileTableSection | 功能优化和Bug修复记录表 |
| 13 | 2.7 服务器资源配置 | MobileSection | 云资源盘点（180台），图片+文字说明 |
| 14 | 2.8 服务器资源配置 | MobileTableSection | 6行资源变更明细表（新增/升配）|
| 15 | 2.9 安全风险处置 | MobileSection | 19个漏洞整改，图片+文字说明 |
| 16 | 2.10 安全配置管理 | MobileSection | 3项配置项，全部完成 |
| 17 | 2.11 数据迁移 | MobileTableSection | 24行迁移进度表（9列），前3步已完成 |

## 移动端适配

### 响应式断点
- 断点: 768px
- 所有响应式样式在 `@media (max-width: 768px)` 中定义

### 各页面移动端适配规则

#### 通用
- 边距从 80px 40px 缩小到 48px 16px
- 字体按比例缩小
- 网格布局改为单列

#### CoverSlide
- Logo: top:16px, left:16px, height:32px
- 标题: clamp(1.8rem, 8vw, 3rem)
- 日期: 1rem, margin-top: 24px
- 滚动提示: bottom: 20px

#### OutlineSlide (第2、4页)
- 标签: top: 24px, left: 16px, font-size: 1.2rem
- 列表项: font-size: 1rem, padding: 12px 16px
- 间距: gap: 16px
- 容器: width: 100%, padding: 0 16px

#### MindMapSlide (第3页)
- 标签: top: 24px, left: 16px, font-size: 1.2rem
- 容器: grid-template-columns: 1fr (单列)
- 分支标题: font-size: 0.9rem
- 子项: font-size: 0.75rem, padding: 2px 4px

#### 自定义表格页面 (第5-14页)
- 标签: top: 24px, left: 16px, font-size: 1.2rem
- 图片: 垂直堆叠, max-height: 30vh
- 图表: 缩小柱子和标签
- 表格: font-size: 0.7rem
- 描述文字: font-size: 0.9rem, margin-top: 24px (仅mobileTableSection内)

### Deck导航移动端
- 导航Pill: bottom: 16px, 更小按钮
- 分享按钮: 移动端隐藏 (display: none)
- 进度条: height: 2px

## 设计规范

### 字体大小
- 左上角标签: 2.5rem, 700 (PC) / 1.2rem (Mobile)
- 中间正文: 2rem, 500 (PC) / 1rem (Mobile)
- ✓/✗图标: 2.2rem (PC) / 1.2rem (Mobile)
- 表格内容: 1rem (PC) / 0.7rem (Mobile)
- 目录项目: 2rem (PC) / 1rem (Mobile)

### 间距
- 左上角定位: top 48px, left 40px (PC) / top 24px, left 16px (Mobile)
- 内容与顶部间距: 50-80px (PC) / 50px (Mobile)
- 表格行距: 12px 10px (PC) / 8px 6px (Mobile)
- 卡片内边距: 20px 28px (PC) / 20px (Mobile)

### 宽度
- 标准内容: max-width 1100px (使用TextSlide的inner容器)
- 宽屏内容: max-width 1400px (使用自定义section)
- 移动端: width: 100%, padding: 0 16px

## 运行命令

```bash
bun install    # 安装依赖
bun dev         # 开发服务器 (localhost:3000)
bun build       # 构建生产版本
bun start       # 启动生产服务器
```

## 重要提示

1. **主题覆盖**: layout.tsx 强制使用黑色背景，需同步修改 globals.css 或 layout.tsx
2. **移动端 !important**: 某些样式使用 !important 强制覆盖避免特异性问题
3. **section:has() 选择器**: 用于 OutlineSlide 和 MindMapSlide 的移动端特定样式
4. **表格斑马纹**: 通过 `background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent"` 实现
5. **图表纯CSS实现**: 柱状图使用 flex 布局 + height 百分比

## 修改记录

### 2026-05-10 新增5页PPT（服务器资源+安全+数据迁移）
- 第13页：2.7 服务器资源配置，图片+文字，180台云资源盘点
- 第14页：2.8 服务器资源配置明细表，6行资源变更（新增1台/升配5台）
- 第15页：2.9 安全风险处置，图片+文字，19个漏洞已整改
- 第16页：2.10 安全配置管理，3项配置项全部完成
- 第17页：2.11 数据迁移，24行9列表格，迁移进度（前3步已完成）
- 修复 mobileTableSection 使用 flex-direction: column，确保描述文字在表格上方
- 添加移动端 .mobileText 和 .mobileHighlight 样式适配
- 更新 architecture.md 页面列表和自定义Section说明

### 2026-05-10 移动端适配优化 (续)
- 修复 MindMapSlide (第3页) 移动端样式不生效问题，使用 mindMapSection 专用类替代 section:has() 选择器
- 调整 MindMapSlide 移动端间距: gap 16px→12px, margin-top 50px→48px, 统一字体大小
- 调整第5、7页图片移动端布局: 改为每行一张图片 (width: 100%)
- 合并重复的 .mobileImg 移动端样式定义

### 2026-05-10 移动端适配优化
- 为 OutlineSlide (第2、4页) 添加完整的移动端样式
- 为 MindMapSlide (第3页) 添加完整的移动端样式
- 统一标签位置: top: 24px, left: 16px
- 目录页保持与 PC 端一致的灰色背景/圆角风格，仅缩小尺寸
- 清理了重复的移动端样式定义