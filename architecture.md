# 项目架构文档

## 项目概述

这是一个基于 Next.js 和 CSS Modules 构建的全屏滚动吸附演示幻灯片模板，用于丽水市公共数据平台运维服务项目的履约汇报。

## 技术栈

- **框架**: Next.js 15.3.0
- **UI库**: React 19.0.0
- **语言**: TypeScript
- **样式**: CSS Modules
- **运行环境**: Bun

## 目录结构

```
scroll-deck-template/
├── public/                      # 静态资源（图片等）
├── src/app/
│   ├── deck/
│   │   ├── index.tsx           # Deck引擎（滚动捕捉、导航核心）
│   │   ├── deck.module.css     # Deck样式（导航栏、进度条）
│   │   ├── blocks/            # 幻灯片组件
│   │   │   ├── index.tsx       # 所有slide组件
│   │   │   └── slide.module.css # slide样式
│   │   └── example-deck.tsx   # 示例内容（第1-12页）
│   ├── globals.css            # 全局主题变量
│   ├── layout.tsx            # 根布局
│   └── page.tsx              # 入口页面
├── README.md                   # 项目说明
└── package.json               # 依赖配置
```

## 核心组件

### 1. Deck引擎 (src/app/deck/index.tsx)
- 滚动吸附导航 (scroll-snap)
- 键盘方向键导航 (↑↓←→)
- 进度条显示
- 导航pill（页码+上下页按钮）

### 2. 幻灯片组件 (src/app/deck/blocks/index.tsx)

| 组件 | 用途 |
|------|------|
| CoverSlide | 封面页（Logo、标题、日期）|
| OutlineSlide | 目录/列表页 |
| MindMapSlide | 思维导图/树形结构 |
| TextSlide | 通用文本页 |
| StatsSlide | 统计数字页 |
| PipelineSlide | 流程步骤页 |
| CodeSlide | 代码展示页 |
| FeatureGridSlide | 特性网格页 |
| CardGridSlide | 卡片网格页 |
| ColumnsSlide | 多列列表页 |
| ComparisonSlide | 对比表格页 |
| TeamSlide | 团队成员页 |
| VisionSlide | 愿景/CTA页 |

### 3. 自定义Section (example-deck.tsx)
部分页面使用自定义section，绕过TextSlide的1100px宽度限制，使用1400px：
- 第5页：2.1 例行巡检
- 第6页：2.2 巡检问题
- 第7页：2.3 功能优化（主动优化）
- 第8页：2.4 功能优化（动态优化）
- 第9页：2.3 功能优化明细表
- 第10页：2.4 功能优化明细表2
- 第11页：2.5 功能优化明细表3
- 第12页：2.6 Bug修复明细表

## 主题系统

在 `globals.css` 中定义：

```css
:root {
  --color-background: #000000;      /* 背景黑色 */
  --color-foreground: #ffffff;       /* 文字白色 */
  --color-accent: #ff6b35;           /* 强调色/高亮橙色 */
  --color-depth-1: rgba(255, 255, 255, 0.04); /* 卡片背景 */
  --color-error: #ff1e12;            /* 错误红色 */
}
```

## 页面列表

| 页码 | 标题 | 内容 |
|------|------|------|
| 1 | Cover | 丽水市公共数据平台运维服务项目履约汇报 |
| 2 | 目录 | 整体服务内容 |
| 3 | MindMap | 整体服务内容详述 |
| 4 | 目录 | 本月工作内容 |
| 5 | 2.1 例行巡检 | 巡检内容+图片 |
| 6 | 2.2 巡检问题 | 问题列表（✓/✗）|
| 7 | 2.3 功能优化（主动）| 图片+描述 |
| 8 | 2.4 功能优化（动态）| 柱状图表 |
| 9 | 2.3 功能优化明细表 | 7条记录表格 |
| 10 | 2.4 功能优化明细表2 | 4条记录表格 |
| 11 | 2.5 功能优化明细表3 | 4条记录表格 |
| 12 | 2.6 Bug修复明细表 | 5条记录表格 |

## 设计规范

### 字体大小
- 左上角标题: 2.5rem, 700
- 中间正文: 2rem, 500
- ✓/✗图标: 2.2rem
- 表格内容: 1rem
- 目录项目: 2rem

### 间距
- 左上角定位: top 48px, left 40px
- 内容与顶部间距: 50-80px
- 表格行距: 12px 10px
- 卡片内边距: 20px 28px

### 颜色
- 文字: #ffffff
- 高亮: var(--color-accent) (#ff6b35)
- 已完成: #2ecc71 (绿色)
- 未完成: #ff6b35 (橙色)
- 灰色: #888

### 宽度
- 标准内容: max-width 1100px (使用TextSlide)
- 宽屏内容: max-width 1400px (使用自定义section)

## 运行命令

```bash
bun install    # 安装依赖
bun dev         # 开发服务器
bun build       # 构建生产版本
```

## 注意事项

1. 第9-12页使用自定义section绕过1100px宽度限制
2. 表格使用斑马纹和颜色区分状态
3. 图表使用CSS实现的简易柱状图
4. 目录页支持高亮当前项
5. mindMapLabel和outlineLabel使用CSS类定义

## 常见修改

### 添加新幻灯片
```tsx
<CustomSlide>
  <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
    标题
  </div>
  {/* 内容 */}
</CustomSlide>
```

### 添加表格行
在数据数组中添加新对象：
```tsx
{ no: 8, platform: "平台名", desc: "描述", date: "日期", plan: "计划", status: "已完成", doc: "文档" }
```