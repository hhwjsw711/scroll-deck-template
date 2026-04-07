import { Deck } from "./index";
import {
  CoverSlide,
  StatsSlide,
  PipelineSlide,
  CodeSlide,
  FeatureGridSlide,
  CardGridSlide,
  ColumnsSlide,
  ComparisonSlide,
  TeamSlide,
  VisionSlide,
} from "./blocks";

/**
 * 示例幻灯片，展示所有可用的幻灯片类型。
 * 复制此文件并修改数据以创建你自己的演示文稿。
 */
export function ExampleDeck() {
  return (
    <Deck>
      {/* 1. Cover */}
      <CoverSlide
        logo="你的 LOGO"
        title="你的醒目标题"
        titleHighlight="配上强调色。"
        subtitle="副标题解释核心价值主张。"
      />

      {/* 2. Stats */}
      <StatsSlide
        label="转型"
        title="用大数字讲述"
        titleHighlight="一个故事。"
        stats={[
          { number: "25亿元", label: "营收里程碑", source: "6个月" },
          { number: "2000万+", label: "活跃用户", source: "年增长3倍" },
          { number: "150+", label: "企业客户" },
          { number: "99.9%", label: "正常运行SLA" },
        ]}
      />

      {/* 3. Pipeline / Flow */}
      <PipelineSlide
        label="差距"
        title="展示一个工作流程"
        titleHighlight="哪里出了问题。"
        bodyLarge="你的用户可以轻松完成步骤1-3。"
        body="但步骤4-6是他们碰壁的地方。"
        steps={[
          { label: "步骤 1" },
          { label: "步骤 2" },
          { label: "步骤 3" },
          { label: "步骤 4?", blocked: true },
          { label: "步骤 5?", blocked: true },
        ]}
      />

      {/* 4. Pipeline with subtexts */}
      <PipelineSlide
        label="问题"
        title="每个步骤都需要"
        titleHighlight="不同的工具。"
        steps={[
          { label: "图像", subtext: "Flux" },
          { label: "视频", subtext: "Kling" },
          { label: "语音", subtext: "ElevenLabs" },
          { label: "音乐", subtext: "Suno" },
        ]}
        quote={"\"企业部署平均使用14个不同的模型。\""}
        quoteAttribution={"—— a16z, 2026"}
      />

      {/* 5. Code */}
      <CodeSlide
        label="解决方案"
        title="一个接口"
        titleHighlight="搞定一切。"
      >
        <span style={{ color: "rgba(var(--color-foreground-rgb), 0.3)" }}>
          {"// 一次调用完成所有操作"}
        </span>
        <br /><br />
        <span style={{ color: "var(--color-accent)" }}>const</span>{" "}
        result = <span style={{ color: "rgb(97, 175, 239)" }}>yourApi.run</span>
        ({"{"}
        <br />
        {"  "}input: <span style={{ color: "rgb(152, 195, 121)" }}>{'"你的提示词"'}</span>,
        <br />
        {"  "}format: <span style={{ color: "rgb(152, 195, 121)" }}>{'"mp4"'}</span>,
        <br />
        {"}"});
        <br /><br />
        → <span style={{ color: "rgb(152, 195, 121)" }}>完成.mp4</span>
      </CodeSlide>

      {/* 6. Feature Grid */}
      <FeatureGridSlide
        label="底层技术"
        title="一切所需"
        titleHighlight="尽在一处。"
        features={[
          { icon: "50+", title: "集成", description: "所有服务商，统一接口。" },
          { icon: "1", title: "API密钥", description: "统一计费，单一仪表盘。" },
          { icon: "¥0", title: "智能缓存", description: "相同请求命中缓存。" },
          { icon: "</>", title: "开源", description: "可复刻、可定制、可私有部署。" },
          { icon: "↻", title: "自动路由", description: "自动选择最佳服务商。" },
          { icon: "⚡", title: "快速", description: "亚秒级响应时间。" },
        ]}
      />

      {/* 7. Card Grid */}
      <CardGridSlide
        label="护城河"
        title="为什么"
        titleHighlight="我们能赢。"
        cards={[
          { title: "渠道壁垒", description: "已嵌入用户工作场景中。", highlighted: true },
          { title: "开源", description: "企业客户需要私有部署。" },
          { title: "编排层", description: "模型商品化，工作流不会。" },
          { title: "网络效应", description: "用得越多，对大家都越好。" },
        ]}
      />

      {/* 8. Columns */}
      <ColumnsSlide
        label="进展"
        title="已在"
        titleHighlight="落地。"
        columns={[
          { heading: "产品", items: ["开源SDK", "50+集成", "智能体技能"] },
          { heading: "需求", items: ["2千元预购", "30家代理在等候", "100个品牌排队"] },
          { heading: "渠道", items: ["嵌入主流工具", "自然增长", "技能市场"] },
        ]}
      />

      {/* 9. Comparison Table */}
      <ComparisonSlide
        label="竞争格局"
        title="我们不竞争。"
        titleHighlight="我们处于顶层。"
        headers={["我们", "竞品A", "竞品B", "竞品C"]}
        highlightColumn={0}
        rows={[
          { feature: "开源", values: ["是", "否", "否", "否"] },
          { feature: "多服务商", values: ["50+模型", "单一", "模板", "自有模型"] },
          { feature: "智能体原生", values: ["一等公民", "仅API", "否", "否"] },
        ]}
      />

      {/* 10. Team */}
      <TeamSlide
        label="团队"
        title="由"
        titleHighlight="有经验的人打造。"
        members={[
          {
            name: "张三",
            role: "CEO / 工程",
            points: ["在Y公司打造了X", "此前创业公司被收购", "行业深耕10年+"],
          },
          {
            name: "李四",
            role: "联合创始人 / 增长",
            points: ["用户增长至100万", "此前融资X百万", "领域专家"],
          },
        ]}
        footnote="此前曾在XX公司共事。"
      />

      {/* 11. Vision / CTA */}
      <VisionSlide
        label="愿景"
        title="今天这很难。明天只需"
        titleHighlight="一行代码。"
        codeInline="yourApi.run()"
        subtitle='是你领域的新的 print("你好世界")。'
        links={[
          { label: "you@company.com", href: "mailto:you@company.com" },
          { label: "github.com/you", href: "https://github.com/you" },
          { label: "yoursite.com", href: "https://yoursite.com" },
        ]}
      />
    </Deck>
  );
}
