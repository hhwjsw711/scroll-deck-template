import { Deck } from "./index";
import s from "./blocks/slide.module.css";
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
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.1 例行巡检</div>
        <p className={s.mobileText}>
          例行巡检服务涵盖<span className={s.mobileHighlight}>业务系统、服务器和数据库</span>的巡检。
          <span className={s.mobileHighlight}>数据共享平台及攻防演练期间每日巡检</span>，
          <span className={s.mobileHighlight}>核心业务管理等其他子能力平台每周巡检</span>。
        </p>
        <div className={s.mobileImageGrid}>
          <img src="/image23.png" alt="巡检图片1" className={s.mobileImg} />
          <img src="/image24.png" alt="巡检图片2" className={s.mobileImg} />
        </div>
      </section>

{/* 6. 巡检问题 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.2 巡检问题</div>
        <div className={s.mobileProblemList}>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>10.100.152.222 服务器内存占用超过93%（已申请扩容）</span>
          </div>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>接口调用次数与资源视窗接口调用量差8500万（已调整，异常情况待排查）</span>
          </div>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>专题库：使用目录、共享接口数量、接口调用量数值异常（已调整）</span>
          </div>
          <div className={`${s.mobileProblemItem} ${s.mobileProblemItemPending}`}>
            <span className={s.mobileCheckNo}>✗</span>
            <span>数据共享平台负载分流异常（待验证）</span>
          </div>
          <div className={`${s.mobileProblemItem} ${s.mobileProblemItemPending}`}>
            <span className={s.mobileCheckNo}>✗</span>
            <span>资源视窗存在一些数据对不上的问题，如供需监控页面数据异常（待处理）</span>
          </div>
        </div>
      </section>

      {/* 7. 功能优化 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.3 功能优化（主动优化）</div>
        <div className={s.mobileImageGrid}>
          <img src="/image31.png" alt="功能优化图片1" className={s.mobileImg} />
          <img src="/image32.png" alt="功能优化图片2" className={s.mobileImg} />
        </div>
        <p className={s.mobileText}>
          基于现状的主动优化：项目初期，对丽水市公共数据全平台进行全面摸查，形成《丽水市公共平台现状分析报告》，
          并针对报告中发现的问题，计划对<span className={s.mobileHighlight}>门户、数据目录平台、数据共享平台</span>进行底层迭代升级。
        </p>
      </section>

      {/* 8. 响应需求的动态优化 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.4 功能优化（动态优化）</div>
        <div className={s.mobileChartWrapper}>
          <p className={s.mobileChartIntro}>
            响应需求的动态优化：根据业主方的新要求及业务需求变化，持续开展平台功能的适应性提升与改进。
            <span className={s.mobileHighlight}>本月新增11项，上月留存4项，共计15项</span>；
            目前已闭环处置10项，剩余5项正在处理中。
          </p>
          <div className={s.mobileChartArea}>
            <div className={s.mobileChartBars}>
              {["门户", "核心业务平台", "数据目录平台", "数据治理平台", "数据开放平台", "数据归档平台"].map((platform, idx) => {
                const data = [
                  { value: [1, 2, 2, 1, 4, 1][idx], color: "#ff6b35" },
                  { value: [2, 0, 2, 0, 0, 0][idx], color: "#4ecdc4" },
                  { value: [1, 2, 1, 1, 4, 1][idx], color: "#2ecc71" },
                  { value: [2, 0, 3, 0, 0, 0][idx], color: "#e74c3c" }
                ];
                return (
                  <div key={idx} className={s.mobileChartColumn}>
                    <div className={s.mobileChartStacks}>
                      {data.map((d, i) => (
                        <div key={i} className={s.mobileChartItem}>
                          <span className={s.mobileChartValue} style={{ color: d.color }}>{d.value}</span>
                          <div className={s.mobileChartBar} style={{ background: d.color, height: `${d.value * 35}px` }} />
                        </div>
                      ))}
                    </div>
                    <div className={s.mobileChartLabel}>{platform}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.mobileChartLegend}>
            <span><span style={{ color: "#ff6b35", fontWeight: 700 }}>▇</span> 本月新增</span>
            <span><span style={{ color: "#4ecdc4", fontWeight: 700 }}>▇</span> 上月留存</span>
            <span><span style={{ color: "#2ecc71", fontWeight: 700 }}>▇</span> 已闭环</span>
            <span><span style={{ color: "#e74c3c", fontWeight: 700 }}>▇</span> 未闭环</span>
          </div>
        </div>
      </section>

{/* 9. 功能优化明细表 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.3 功能优化（明细表）</div>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "6%" }}>序号</th>
                <th style={{ width: "12%" }}>所属子平台</th>
                <th>功能描述</th>
                <th>提出时间</th>
                <th>计划完成时间</th>
                <th style={{ width: "10%" }}>完成情况</th>
                <th>关联文档</th>
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
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.platform}</td>
                  <td>{row.desc}</td>
                  <td style={{ textAlign: "center" }}>{row.date}</td>
                  <td style={{ textAlign: "center" }}>{row.plan}</td>
                  <td style={{ textAlign: "center", color: row.status === "已完成" ? "#2ecc71" : "#ff6b35" }}>{row.status}</td>
                  <td style={{ textAlign: "center" }}>{row.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. 功能优化明细表2 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.4 功能优化（明细表2）</div>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "6%" }}>序号</th>
                <th style={{ width: "12%" }}>所属子平台</th>
                <th>功能描述</th>
                <th>提出时间</th>
                <th>计划完成时间</th>
                <th style={{ width: "10%" }}>完成情况</th>
                <th>关联文档</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, platform: "数据治理平台", desc: "数据治理规则配置增加审批流程，将新开发规则/规则配置流转至部门数据确认。", date: "2026/4/15", plan: "2026/4/30", status: "待更新", doc: "SJZL-REQ-20260415-001" },
                { no: 2, platform: "数据归档平台", desc: "与目录平台接口对接，注销完成的目录及时推送至归档平台。", date: "2026/4/15", plan: "2026/4/30", status: "待更新", doc: "SJGD-REQ-20260415-001" },
                { no: 3, platform: "核心业务平台", desc: "接口/ding/dingUser逻辑优化", date: "2026/4/15", plan: "2026/4/16", status: "已完成", doc: "HXYW-REQ-20260415-001, GGSJ-VER-20260416-001-V4.2.6" },
                { no: 4, platform: "核心业务平台", desc: "为在系统上展示核心业务梳理成果，需对大量业务事项数据进行批量修改。前期开发中已实现业务事项的修改留痕，但当时二级、三级业务框架尚未恢复，因此这两个层级的修改留痕功能暂未覆盖。现需补充开发二级业务、三级业务修改留痕功能，覆盖业务事项、业务事项管理模块，包含历史版本留存、修改记录生成与展示。", date: "2026/4/15", plan: "2026/4/16", status: "已完成", doc: "HXYW-REQ-20260408-001, GGSJ-VER-20260416-001-V4.2.6" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.platform}</td>
                  <td>{row.desc}</td>
                  <td style={{ textAlign: "center" }}>{row.date}</td>
                  <td style={{ textAlign: "center" }}>{row.plan}</td>
                  <td style={{ textAlign: "center", color: row.status === "已完成" ? "#2ecc71" : "#ff6b35" }}>{row.status}</td>
                  <td style={{ textAlign: "center" }}>{row.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. 功能优化明细表3 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.5 功能优化（明细表3）</div>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "6%" }}>序号</th>
                <th style={{ width: "12%" }}>所属子平台</th>
                <th>功能描述</th>
                <th>提出时间</th>
                <th>计划完成时间</th>
                <th style={{ width: "10%" }}>完成情况</th>
                <th>关联文档</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, platform: "数据开放平台", desc: "当前数据开放平台仅支持无条件开放数据的上架，缺少受限数据的开放。为补充受限数据的开放业务流程，需对平台进行以下功能优化：①名称规范：按浙江省统一要求，将完全开放数据改为无条件开放数据，并新增受限开放目录。②筛选功能：在开放数据页面新增开放属性筛选条件，选项包含：全部、无条件开放、受限开放。", date: "2026/4/20", plan: "2026/4/30", status: "已完成", doc: "SJKF-REQ-20260420-001, GGSJ-VER-20260430-001-V4.2.8" },
                { no: 2, platform: "数据开放平台", desc: "①数据开放后台于开放目录模块的各页面中，针对数据项新增敏感等级字段，并将开放平台自身的脱敏功能下架。②将质量检查工具与敏感等级关联。当目录字段中存在高敏感等级（L4/L3）时，系统需检测该字段是否已配置脱敏处理。若未处理，则禁止进入下一步操作，并提示当前目录存在高敏感字段未处理，以便运营人员精准定位和处理。", date: "2026/4/20", plan: "2026/4/30", status: "已完成", doc: "SJKF-REQ-20260420-002, GGSJ-VER-20260430-001-V4.2.8" },
                { no: 3, platform: "数据开放平台", desc: "数据开放平台前端首页，数据项单位用万，保留两位小数；条数用亿，保留两位小数；共开放改为已上架开放。", date: "2026/4/21", plan: "2026/4/21", status: "已完成", doc: "SJKF-REQ-20260421-004, GGSJ-VER-20260421-001-V4.2.7" },
                { no: 4, platform: "数据开放平台", desc: "数据成果模块下添加成果与案例标签进行区分，并在条件筛选区域添加类型条件，用于筛选成果与案例。", date: "2026/4/20", plan: "2026/4/30", status: "已完成", doc: "SJKF-REQ-20260420-003, GGSJ-VER-20260430-001-V4.2.8" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.platform}</td>
                  <td>{row.desc}</td>
                  <td style={{ textAlign: "center" }}>{row.date}</td>
                  <td style={{ textAlign: "center" }}>{row.plan}</td>
                  <td style={{ textAlign: "center", color: row.status === "已完成" ? "#2ecc71" : "#ff6b35" }}>{row.status}</td>
                  <td style={{ textAlign: "center" }}>{row.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Bug修复明细表 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.6 Bug修复（明细表）</div>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "6%" }}>序号</th>
                <th style={{ width: "12%" }}>所属子平台</th>
                <th>功能描述</th>
                <th>提出时间</th>
                <th>计划完成时间</th>
                <th style={{ width: "10%" }}>完成情况</th>
                <th>关联文档</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, platform: "数据目录平台", desc: "目录默认定级需获取安全团队的推荐等级，但发现部分新编目录未按此执行。", date: "2026/4/27", plan: "2026/4/30", status: "已完成", doc: "SJML-BUG-20260427-001, GGSJ-VER-20260430-001-V4.2.7" },
                { no: 2, platform: "数据目录平台", desc: "目录批量审批时产生多条重复工单、流转错误、审批报错问题。", date: "2026/4/25", plan: "2026/4/30", status: "已完成", doc: "SJML-BUG-20260425-001, GGSJ-VER-20260430-001-V4.2.7" },
                { no: 3, platform: "数据目录平台", desc: "目录变更流程提交及审批通过后出现报错。", date: "2026/4/30", plan: "2026/4/30", status: "已完成", doc: "SJML-BUG-20260430-001, GGSJ-VER-20260430-001-V4.2.7" },
                { no: 4, platform: "数据目录平台", desc: "数据目录执行更新操作后，页面中应用系统名称字段未展示实际名称，仅显示数字编码，无法识别对应应用系统信息。", date: "2026/4/2", plan: "2026/4/2", status: "已完成", doc: "SJML-BUG-20260402-001, GGSJ-VER-20260402-001-V4.2.5" },
                { no: 5, platform: "专题库", desc: "专题库平台数据统计异常。", date: "2026/4/27", plan: "2026/4/27", status: "已完成", doc: "ZTK-BUG-20260416-001, GGSJ-VER-20260416-001-V4.2.6" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.platform}</td>
                  <td>{row.desc}</td>
                  <td style={{ textAlign: "center" }}>{row.date}</td>
                  <td style={{ textAlign: "center" }}>{row.plan}</td>
                  <td style={{ textAlign: "center", color: row.status === "已完成" ? "#2ecc71" : "#ff6b35" }}>{row.status}</td>
                  <td style={{ textAlign: "center" }}>{row.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. 服务器资源配置 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.7 服务器资源配置</div>
        <div className={s.mobileImageGrid}>
          <img src="/image33.png" alt="服务器资源配置" className={s.mobileImg} />
        </div>
        <p className={s.mobileText}>
          本月盘点<span className={s.mobileHighlight}>"丽水市公共数据管理综合应用"</span>下的云资源，补充遗漏的原位于电信老华三云的3台资源，
          当前云资源总数<span className={s.mobileHighlight}>180台</span>。
          下一步，计划进一步摸查各资源的具体使用情况，并据此编制《丽水市公共数据平台资源梳理报告》。
        </p>
      </section>

      {/* 14. 服务器资源配置明细 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.8 服务器资源配置（明细表）</div>
        <p className={s.mobileText}>
          本月新增1台服务器，用于授权运营业务，并对5台现有资源进行了升配。详情如下：
        </p>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "5%" }}>序号</th>
                <th style={{ width: "10%" }}>所属子平台</th>
                <th style={{ width: "8%" }}>云资源分类</th>
                <th>云资源情况</th>
                <th style={{ width: "10%" }}>完成情况</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, platform: "授权运营", type: "新增", desc: "配合授权运营团队申请服务器1台，配置：电信政务外网区，Kylin V10 Hygon 64Bit-麒麟 SP3，2C8G200G内存。", status: "已完成" },
                { no: 2, platform: "前置库", type: "升配", desc: "10.100.152.215磁盘空间不足，配合从500G扩容到800G", status: "已完成" },
                { no: 3, platform: "前置库", type: "升配", desc: "10.100.152.174为新申请的共享前置库。为整合资源，需将原分散在5台自建数据库上的前置库统一迁移，共申请2台新库：一台归集前置，一台共享前置。当前共享前置库原计划按1:1资源配置（4C8G3T），但迁移过程中发现配置不足，现申请扩容至16C64G3T。", status: "已完成" },
                { no: 4, platform: "归集库", type: "升配", desc: "10.100.152.89原存储空间需从3TB扩容至8TB。原RDS归集库磁盘上限仅支持3TB，已出现资源过载，因此申请新库用于大表归集。为满足信创要求，现需将原归集库（RDS，IP：10.100.152.231）上的数据迁移至新库，故须进行扩容。", status: "已完成" },
                { no: 5, platform: "交换平台", type: "升配", desc: "内存从32G扩到64G，4月17日巡检发现，服务器（10.100.152.222）内存占用高达93%。主要原因为交换平台的MinIO服务（用于存储交换配置文件）占用内存较多。故将该服务器内存从32GB扩容至64GB。", status: "已完成" },
                { no: 6, platform: "共享平台", type: "升配", desc: "10.100.152.187为满足信创要求，原数据共享平台业务库需从RDS迁移至新库。因迁移过程中云平台反馈当前配置（8C16G2000G）不足，现申请升级至16C64G3T。", status: "已完成" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.platform}</td>
                  <td style={{ textAlign: "center" }}>{row.type}</td>
                  <td>{row.desc}</td>
                  <td style={{ textAlign: "center", color: "#2ecc71" }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 15. 安全风险处置 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.9 安全风险处置</div>
        <div className={s.mobileImageGrid}>
          <img src="/image36.png" alt="安全风险处置" className={s.mobileImg} />
        </div>
        <p className={s.mobileText}>
          4月份安全部门常规漏扫共检出<span className={s.mobileHighlight}>19个漏洞</span>，目前已全部完成整改，并已与安全团队核实确认。
        </p>
      </section>

      {/* 16. 安全配置管理 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.10 安全配置管理</div>
        <div className={s.mobileProblemList}>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>敏感数据处理（10.100.152.91）3306端口白名单策略添加数据库安全管控平台相关地址。</span>
          </div>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>数据开放平台（10.100.152.21）3306端口白名单策略添加数据库安全管控平台相关地址。</span>
          </div>
          <div className={s.mobileProblemItem}>
            <span className={s.mobileCheckOk}>✓</span>
            <span>数据宝（39.191.224.219）开通端口88，用于信创迁移。</span>
          </div>
        </div>
      </section>

      {/* 17. 数据迁移 */}
      {(() => {
        const dataMigrationRows = [
          { platform: "核心业务平台", old: "i-5by01lz3w6inc65b1c58（39.191.224.42）", new: "i-5by01l7faxr9gza38cr4（10.212.70.6）" },
          { platform: "核心业务平台", old: "rm-5byimx0n0huqr7b86（10.100.152.52）", new: "rm-5byrwls3i115x35xq（10.100.152.191）" },
          { platform: "前置01", old: "i-5by05vrvxhlclk8l0mnl（10.53.129.6/10.100.152.215）", new: "rm-5by31wd12yi5m9ni6（10.100.152.175）" },
          { platform: "前置02", old: "rm-5by67577rqd7052y5（10.100.152.9）", new: "rm-5by31wd12yi5m9ni6（10.100.152.175）" },
          { platform: "前置03", old: "i-5by05vrvxhlclk8l0mn（10.53.129.86/10.100.152.217）", new: "rm-5by31wd12yi5m9ni6（10.100.152.175）" },
          { platform: "前置04", old: "i-5by05vrvxhlclk8l0mno（10.53.129.112/10.100.152.218）", new: "rm-5byazls3msc4d08ad（10.100.152.174）" },
          { platform: "前置05", old: "i-5by05vrvxhlclm7m4om（10.53.129.121/10.100.152.219）", new: "rm-5byazls3msc4d08ad（10.100.152.174）" },
          { platform: "前置06", old: "i-5by061xcx6grai0hfw3r（10.53.129.16/10.100.152.216）", new: "rm-5byazls3msc4d08ad（10.100.152.174）" },
          { platform: "前置07", old: "i-5by0682tupsahibbpejm（10.53.129.32/10.100.152.1）", new: "rm-5byazls3msc4d08ad（10.100.152.174）" },
          { platform: "目录", old: "rm-5byk9j4p3228536fb（10.100.152.76）", new: "rm-5bybydah4t37j7ug9（10.100.152.190）" },
          { platform: "上报平台", old: "rm-5by247j62tjea8864（10.100.152.59）", new: "rm-5by7fup9fbbz82ly6（10.100.152.189）" },
          { platform: "数据共享平台", old: "rm-5bymqtq463j65zz2g（10.100.152.118）", new: "rm-5by428n13g032o4q（10.100.152.188）" },
          { platform: "数据共享平台", old: "rm-5byg3ag22c54k5a47（10.100.152.45）", new: "rm-5by467cxzu9c58811（10.100.152.186）" },
          { platform: "数据共享平台", old: "rm-5by219bvw0amut3mf（10.100.152.46）", new: "rm-5byp06289644v569e" },
          { platform: "数据共享平台", old: "rm-5bytuk4q9nriz130u（10.100.152.233）", new: "rm-5byp6ckhkh8t09lvz（10.100.152.184）" },
          { platform: "数据交换平台", old: "rm-5byw86c0f45zik7dp（10.100.152.231）", new: "pc-5by4v8822yn1us33z（10.100.152.89）" },
          { platform: "数据交换平台", old: "rm-5by15y2q0jc43o7ld（10.100.152.69）", new: "rm-5by290ous0mgq8c2（10.100.152.183）" },
          { platform: "回流库", old: "rm-5by7611tvevz363l9（10.100.152.119）", new: "rm-5byq1dr4oq1302jb0（10.100.152.178）" },
          { platform: "归档平台", old: "rm-5bytn3h36u156b310（10.100.152.124）", new: "rm-5byu554ll7g67264a（10.100.152.179）" },
          { platform: "专题库", old: "rm-5by0659qhg78700g7（10.100.152.28）", new: "rm-5bydl5l8y97j083es（10.100.152.182）" },
          { platform: "专题库", old: "rm-5bylr8ep3z84jach8（10.100.152.38）", new: "rm-5by844x7bvcz5w7mq（10.100.152.181）" },
          { platform: "数据治理", old: "rm-5byiv39k6p84s7fbu（10.100.152.29）", new: "pc-5bye687gk7je19g06（10.100.152.180）" },
          { platform: "数据开放平台", old: "rm-5by5i116p8826es4a（10.100.152.25）", new: "rm-5by43u1e7521cc95（10.100.152.176）" },
          { platform: "敏感数据", old: "rm-5by450862ftp969vo（10.100.152.146）", new: "rm-5by8cvl7pa02d2w04（10.100.152.177）" },
        ];
        return (
          <section className={s.mobileTableSection}>
            <div className={s.mobileLabel}>2.11 数据迁移</div>
            <div className={s.mobileTableWrapper}>
              <table className={s.mobileTable}>
                <thead>
                  <tr>
                    <th style={{ width: "4%" }}>序号</th>
                    <th style={{ width: "10%" }}>所属子平台</th>
                    <th style={{ width: "18%" }}>原资源</th>
                    <th style={{ width: "18%" }}>对应新资源</th>
                    <th style={{ width: "5%" }}>环境准备与检查（同步）</th>
                    <th style={{ width: "5%" }}>全量迁移（异步）</th>
                    <th style={{ width: "5%" }}>增量同步与监控（同步）</th>
                    <th style={{ width: "5%" }}>应用切换与验证（异步、业务中断）</th>
                    <th style={{ width: "5%" }}>适配验证（同步）</th>
                  </tr>
                </thead>
                <tbody>
                  {dataMigrationRows.map((row, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                      <td style={{ textAlign: "center" }}>{idx + 1}</td>
                      <td>{row.platform}</td>
                      <td>{row.old}</td>
                      <td>{row.new}</td>
                      <td style={{ textAlign: "center", color: "#2ecc71" }}>✓</td>
                      <td style={{ textAlign: "center", color: "#2ecc71" }}>✓</td>
                      <td style={{ textAlign: "center", color: "#2ecc71" }}>✓</td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })()}

      {/* 18. 数据迁移（图片） */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.12 数据迁移</div>
        <div className={s.mobileImageGrid}>
          <img src="/image39.png" alt="数据迁移" className={s.mobileImg} />
        </div>
      </section>

      {/* 19. 配置管理 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.13 配置管理</div>
        <p className={s.mobileText}>
          一、本月开展各子能力平台的角色及对应权限关系梳理，当前进度<span className={s.mobileHighlight}>20%</span>。
        </p>
        <p className={s.mobileText} style={{ marginTop: 16 }}>
          二、青田县业务事项审核人变更：因项烨恺调岗，修改青田县业务事项业务审核人项烨恺为<span className={s.mobileHighlight}>梁炎炎</span>。
        </p>
        <div className={s.mobileImageGrid}>
          <img src="/image40.png" alt="配置管理" className={s.mobileImg} />
        </div>
      </section>

      {/* 20. 软件版本变更情况 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.14 软件版本变更情况</div>
        <div className={s.mobileImageGrid}>
          <img src="/image41.png" alt="软件版本变更" className={s.mobileImg} />
        </div>
        <p className={s.mobileText}>
          除特殊情况外，各子平台均统一在每周四晚上进行更新。
        </p>
        <p className={s.mobileText} style={{ marginTop: 16 }}>
          4月1日-4月30日期间，平台按计划进行了4次迭代升级，逐步提升用户体验。
        </p>
      </section>

      {/* 21. 节假日值班 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.15 节假日值班</div>
        <div className={s.mobileImageGrid}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/image42.png" alt="清明节值班表" style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }} />
            <span className={s.mobileImageLabel}>清明节值班表</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/image43.png" alt="值班记录表" style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }} />
            <span className={s.mobileImageLabel}>值班记录表</span>
          </div>
        </div>
      </section>

{/* 22. 人员考勤管理 */}
      <section className={s.mobileSection}>
        <div className={s.mobileLabel}>2.16 人员考勤管理</div>
        <p className={s.mobileText}>
          4月请假情况（共4名驻场人员）
        </p>
        <p className={s.mobileText} style={{ marginTop: 16 }}>
          <span className={s.mobileHighlight}>吴津津</span>：因带母亲去杭州做左肾病上极血管平滑肌瘤手术，请假6天。期间远程办公，现场工作由毛炜勇驻场处理。
        </p>
        <p className={s.mobileText} style={{ marginTop: 16 }}>
          <span className={s.mobileHighlight}>王平度</span>：因家比较远，五一未能抢到票，申请请假一天。
        </p>
        <div className={s.mobileImageGrid}>
<img src="/image44.png" alt="人员考勤管理" className={s.mobileImg} />
        </div>
      </section>

      {/* 23. 文档管理 */}
      <section className={s.mobileTableSection}>
        <div className={s.mobileLabel}>2.17 文档管理</div>
        <div className={s.mobileTableWrapper}>
          <table className={s.mobileTable}>
            <thead>
              <tr>
                <th style={{ width: "4%" }}>序号</th>
                <th style={{ width: "30%" }}>文件名</th>
                <th style={{ width: "15%" }}>完成时间</th>
                <th style={{ width: "8%" }}>数量</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, name: "服务周报", time: "每周", count: "5份" },
                { no: 2, name: "巡检报告", time: "每日/周", count: "35份" },
                { no: 3, name: "需求确认单", time: "按需", count: "11份" },
                { no: 4, name: "Bug分析报告", time: "按需", count: "5份" },
                { no: 5, name: "软件版本上线更新单", time: "按需", count: "4份" },
                { no: 6, name: "云资源梳理清单", time: "按需", count: "1份" },
                { no: 7, name: "服务器资源申请表", time: "按需", count: "6份" },
                { no: 8, name: "安全风险处置确认单", time: "按需", count: "1份" },
                { no: 9, name: "4月份端口申请记录清单", time: "按需", count: "1份" },
                { no: 10, name: "数据迁移方案（待上会）", time: "按需", count: "1份" },
                { no: 11, name: "平台角色-权限对应表（初稿）", time: "按需", count: "1份" },
                { no: 12, name: "4月份驻场人员考勤签到表", time: "2026.5.8", count: "1份" },
                { no: 13, name: "节假日值班表、值班记录表", time: "按需", count: "各一份" },
                { no: 14, name: "实施方案（待上会）", time: "按需", count: "1份" },
                { no: 15, name: "会议纪要", time: "按需", count: "5份" },
                { no: 16, name: "4月份履约报告（待编写）", time: "每月", count: "1份" },
                { no: 17, name: "4月份满意度评价（待评价）", time: "每月", count: "各区县至少1份" },
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--color-depth-1)" : "transparent" }}>
                  <td style={{ textAlign: "center" }}>{row.no}</td>
                  <td>{row.name}</td>
                  <td style={{ textAlign: "center" }}>{row.time}</td>
                  <td style={{ textAlign: "center" }}>{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 24. 下月工作计划目录 */}
      <OutlineSlide
        label="目录"
        items={[
          { text: "整体服务内容" },
          { text: "本月工作内容" },
          { text: "下月工作计划", highlighted: true },
        ]}
      />

      {/* 25. 结束页 */}
      <section className={s.coverSection} style={{ background: "var(--color-accent)" }}>
        <div className={s.coverInner}>
          <h1 className={s.coverTitle} style={{ color: "#ffffff" }}>谢谢！</h1>
        </div>
      </section>
    </Deck>
  );
}
