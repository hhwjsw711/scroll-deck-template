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
  TextSlide,
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

      {/* 4. Outline (本月工作内容) */}
      <OutlineSlide
        label="目录"
        items={[
          { text: "整体服务内容", highlighted: false },
          { text: "本月工作内容", highlighted: true },
          { text: "下月工作计划", highlighted: false },
        ]}
      />

      {/* 5. 例行巡检 */}
      <section style={{ minHeight: "100vh", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
          2.1 例行巡检
        </div>
        <div style={{ fontSize: "2rem", lineHeight: 1.8, textAlign: "center", maxWidth: "1200px", marginTop: "50px", fontWeight: 500 }}>
          例行巡检服务涵盖<span style={{ color: "var(--color-accent)", fontWeight: 700 }}>业务系统、服务器和数据库</span>的巡检。<br/>
          <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>数据共享平台及攻防演练期间每日巡检</span>，<span style={{ color: "var(--color-accent)", fontWeight: 700 }}>核心业务管理等其他子能力平台每周巡检</span>。
        </div>
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "1.5rem", width: "100%", maxWidth: "1400px" }}>
          <img src="/image23.png" alt="巡检图片1" style={{ width: "48%", maxHeight: "50vh", objectFit: "contain", borderRadius: "10px" }} />
          <img src="/image24.png" alt="巡检图片2" style={{ width: "48%", maxHeight: "50vh", objectFit: "contain", borderRadius: "10px" }} />
        </div>
      </section>

{/* 6. 巡检问题 */}
      <section style={{ minHeight: "100vh", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
          2.2 巡检问题
        </div>
        <div style={{ marginTop: "80px", maxWidth: "1400px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px", fontSize: "2rem" }}>
            <span style={{ color: "var(--color-accent)", fontSize: "2.2rem", fontWeight: 700 }}>✓</span>
            <span>10.100.152.222 服务器内存占用超过93%（已申请扩容）</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px", fontSize: "2rem" }}>
            <span style={{ color: "var(--color-accent)", fontSize: "2.2rem", fontWeight: 700 }}>✓</span>
            <span>接口调用次数与资源视窗接口调用量差8500万（已调整，异常情况待排查）</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px", fontSize: "2rem" }}>
            <span style={{ color: "var(--color-accent)", fontSize: "2.2rem", fontWeight: 700 }}>✓</span>
            <span>专题库：使用目录、共享接口数量、接口调用量数值异常（已调整）</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px", fontSize: "2rem", color: "#888" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 700 }}>✗</span>
            <span>数据共享平台负载分流异常（待验证）</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px", fontSize: "2rem", color: "#888" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 700 }}>✗</span>
            <span>资源视窗存在一些数据对不上的问题，如供需监控页面数据异常（待处理）</span>
          </div>
        </div>
      </section>

      {/* 7. 功能优化 */}
      <section style={{ minHeight: "100vh", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
          2.3 功能优化（主动优化）
        </div>
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "50px", width: "100%", maxWidth: "1400px" }}>
          <img src="/image31.png" alt="功能优化图片1" style={{ width: "48%", maxHeight: "50vh", objectFit: "contain", borderRadius: "10px" }} />
          <img src="/image32.png" alt="功能优化图片2" style={{ width: "48%", maxHeight: "50vh", objectFit: "contain", borderRadius: "10px" }} />
        </div>
        <div style={{ fontSize: "2rem", lineHeight: 1.8, textAlign: "center", maxWidth: "1200px", marginTop: "1.5rem", fontWeight: 500 }}>
          基于现状的主动优化：项目初期，对丽水市公共数据全平台进行全面摸查，形成《丽水市公共平台现状分析报告》，并针对报告中发现的问题，计划对<span style={{ color: "var(--color-accent)", fontWeight: 700 }}>门户、数据目录平台、数据共享平台</span>进行底层迭代升级。
        </div>
      </section>

      {/* 8. 响应需求的动态优化 */}
      <section style={{ minHeight: "100vh", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
          2.4 功能优化（动态优化）
        </div>
        <div style={{ marginTop: "0", width: "100%", maxWidth: "1400px" }}>
          <div style={{ fontSize: "2rem", textAlign: "center", marginBottom: "8rem", lineHeight: 1.8 }}>
            响应需求的动态优化：根据业主方的新要求及业务需求变化，持续开展平台功能的适应性提升与改进。<span style={{ color: "var(--color-accent)", fontWeight: 700 }}>本月新增11项，上月留存4项，共计15项</span>；目前已闭环处置10项，剩余5项正在处理中。
          </div>
          {/* 图表区域 */}
          <div style={{ padding: "0 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: "200px" }}>
              {["门户", "核心业务平台", "数据目录平台", "数据治理平台", "数据开放平台", "数据归档平台"].map((platform, idx) => {
                const data = [
                  { label: "本月新增", value: [1, 2, 2, 1, 4, 1][idx], color: "#ff6b35" },
                  { label: "上月留存", value: [2, 0, 2, 0, 0, 0][idx], color: "#4ecdc4" },
                  { label: "已闭环", value: [1, 2, 1, 1, 4, 1][idx], color: "#2ecc71" },
                  { label: "未闭环", value: [2, 0, 3, 0, 0, 0][idx], color: "#e74c3c" }
                ];
                return (
                  <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "14%" }}>
                    <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "200px" }}>
                      {data.map((d, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <span style={{ fontSize: "1rem", fontWeight: 700, color: d.color, marginBottom: "4px" }}>{d.value}</span>
                          <div style={{ 
                            width: "24px", 
                            height: `${d.value * 45}px`, 
                            background: d.color,
                            borderRadius: "4px 4px 0 0"
                          }} />
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: "1rem", marginTop: "8px", textAlign: "center" }}>{platform}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 图例 */}
          <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", fontSize: "1.3rem", marginTop: "1.5rem" }}>
            <span><span style={{ color: "#ff6b35", fontWeight: 700 }}>▇</span> 本月新增</span>
            <span><span style={{ color: "#4ecdc4", fontWeight: 700 }}>▇</span> 上月留存</span>
            <span><span style={{ color: "#2ecc71", fontWeight: 700 }}>▇</span> 已闭环</span>
            <span><span style={{ color: "#e74c3c", fontWeight: 700 }}>▇</span> 未闭环</span>
          </div>
        </div>
      </section>

      {/* 9. 功能优化明细表 */}
      <section style={{ minHeight: "100vh", scrollSnapAlign: "start", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "48px", left: "40px", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)" }}>
          2.3 功能优化（明细表）
        </div>
        <div style={{ width: "100%", padding: "0 20px", boxSizing: "border-box", maxWidth: "1400px", marginTop: "60px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1rem" }}>
            <thead>
              <tr style={{ background: "var(--color-accent)", color: "#fff" }}>
                <th style={{ padding: "16px 12px", border: "1px solid #fff", width: "6%" }}>序号</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff", width: "12%" }}>所属子平台</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff" }}>功能描述</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff" }}>提出时间</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff" }}>计划完成时间</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff", width: "10%" }}>完成情况</th>
                <th style={{ padding: "16px 12px", border: "1px solid #fff" }}>关联文档</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, platform: "工作门户", desc: "部门知识库应用上架至公共数据平台门户，并实现单点登录功能对接。", date: "2025/12/30", plan: "", status: "未完成", doc: "" },
                { no: 2, platform: "工作门户", desc: "账号安全管理：实施6个月未使用自动冻结、12个月未使用自动注销策略。", date: "2026/2/5", plan: "", status: "未完成", doc: "" },
                { no: 3, platform: "工作门户", desc: "工作门户模块排版调整：专题库、镇街数仓、数据产品、数据安全、数据归档、资源视窗、AI服务单独一个模块。并且各模块通过权限自适应。", date: "2026/4/20", plan: "2026/4/30", status: "已完成", doc: "MH-REQ-20260420-001, GGSJ-VER-20260430-001-V4.2.8" },
                { no: 4, platform: "数据目录平台", desc: "将数据安全名单纳入统一管理（数据安全负责人（分管领导）、数据安全管理员A岗、数据安全管理员B岗）。", date: "2026/3/12", plan: "", status: "未完成", doc: "SJML-REQ-20260312-004" },
                { no: 5, platform: "数据目录平台", desc: "运维工单调整优化。", date: "2026/3/12", plan: "", status: "未完成", doc: "SJML-REQ-20260312-003" },
                { no: 6, platform: "数据目录平台", desc: "对数据目录平台-用户管理-数据专员管理模块功能进行优化：1.移除数据专员修改按钮；2.删除方式由物理删除改为逻辑删除；3.新增数据专员时支持附件上传与查看。", date: "2026/4/9", plan: "2026/4/16", status: "已完成", doc: "SJML-REQ-20260409-001, GGSJ-VER-20260416-001-V4.2.6" },
                { no: 7, platform: "数据目录平台", desc: "1、调整设置顺序与逻辑：将现有操作流程强制调整为先完成数据分级，再依据分级结果确定开放属性，确保属性判定有据可依。2、增设强制校验规则：在平台后台增加刚性校验机制。例如，当目录中包含L3或L4级数据项时，系统应自动禁用无条件开放选项，并予以提示。", date: "2026/4/20", plan: "2026/10/15", status: "未完成", doc: "SJML-REQ-20260420-003" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ padding: "12px 10px", border: "1px solid #888", textAlign: "center" }}>{row.no}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888" }}>{row.platform}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888" }}>{row.desc}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888", textAlign: "center" }}>{row.date}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888", textAlign: "center" }}>{row.plan}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888", textAlign: "center", color: row.status === "已完成" ? "#2ecc71" : "#ff6b35" }}>{row.status}</td>
                  <td style={{ padding: "12px 10px", border: "1px solid #888", textAlign: "center" }}>{row.doc}</td>
                </tr>
              ))}
            </tbody>
</table>
        </div>
      </section>

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
