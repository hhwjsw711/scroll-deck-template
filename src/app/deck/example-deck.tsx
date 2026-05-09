import { Deck } from "./index";
import {
  CoverSlide,
  OutlineSlide,
  MindMapSlide,
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
        logoSrc="/china-telecom-logo.svg"
        title={<><span>丽水市公共数据平台</span><span>运维服务项目</span><span>履约汇报</span></>}
        date="2026年5月9日"
      />

      {/* 2. Outline */}
      <OutlineSlide
        label="目录"
        items={[
          { text: "整体服务内容", highlighted: true },
          { text: "本月工作内容" },
          { text: "下月工作计划" },
        ]}
      />

      {/* 3. MindMap */}
      <MindMapSlide
        label="1.1 整体服务内容"
        branches={[
          { title: "定制软件开发运维", children: [
            { text: "例行巡检" },
            { text: "功能优化", children: ["基于现状的主动优化（门户、目录、共享平台底层迭代）", "响应需求的动态优化"] },
            { text: "Bug修复" },
            { text: "故障处置" },
            { text: "服务器资源配置", children: ["现有云资源基线梳理，形成《丽水市公共数据平台资源梳理报告》", "针对新增服务器、资源扩容、资源重配等需求，需求申请配置"] },
            { text: "安全风险处置" },
            { text: "安全配置管理" },
            { text: "数据安全" },
            { text: "数据迁移" },
            { text: "服务密码接口保障" },
            { text: "安全合规性保障", children: ["等保复测", "密评复测"] },
            { text: "配置管理", children: ["梳理各子平台当前的角色配置及对应权限关系", "按需调整人员角色权限"] },
            { text: "文档管理" },
            { text: "技术咨询" },
            { text: "应急演练", children: ["数据开放平台（5月）", "数据共享平台（12月）"] },
            { text: "与其他平台对接" },
            { text: "数据维护与统计" },
            { text: "咨询协助" }
          ]},
          { title: "通用系统软件运维", children: [
            { text: "安全产品运维：浙江CA站点证书采购" },
            { text: "产品软件运维：市数据可视化支撑平台（DataV）资源申请" }
          ]},
          { title: "其他", children: [
            { text: "多模态数据归集存储平台（视频、图像、语音等）" },
            { text: "配合协助丽水本土方言高质量数据集建设工作方案编写" },
            { text: "配合9县市区语音数据集采集工作" },
            { text: "探索建设公共数据高质量数据集标注平台" },
            { text: "积极探索高质量数据集" },
            { text: "积极对接各类企业、行业协会等单位，挖掘高质量数据供给和需求" },
            { text: "主动参与企业专场宣讲解读，供需对接等活动" },
            { text: "配合协助编制《物联感知数据资源编目标准规范》" },
            { text: "积极参加各类行业案例比赛" }
          ]},
        ]}
      />

      {/* 4. Stats */}
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
