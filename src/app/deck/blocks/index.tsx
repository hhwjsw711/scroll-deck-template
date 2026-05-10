import s from "./slide.module.css";

/* ─── Cover Slide ─── */
export function CoverSlide({
  logo,
  logoSrc,
  title,
  titleHighlight,
  subtitle,
  date,
}: {
  logo?: string;
  logoSrc?: string;
  title: string | React.ReactNode;
  titleHighlight?: string;
  subtitle?: string;
  date?: string;
}) {
  return (
    <section className={s.coverSection}>
      {(logo || logoSrc) && (
        <div className={s.coverLogoWrapper}>
          {logoSrc ? (
            <img src={logoSrc} alt={logo || ""} className={s.coverLogoImg} />
          ) : (
            <div className={s.coverLogo}>{logo}</div>
          )}
        </div>
      )}
      <div className={s.coverInner}>
        <h1 className={s.coverTitle}>
          {title}
          {titleHighlight && <span className={s.coverHighlight}>{titleHighlight}</span>}
        </h1>
        {date && <div className={s.coverDate}>{date}</div>}
        {subtitle && <p className={s.coverSubtitle}>{subtitle}</p>}
      </div>
      <div className={s.scrollHint}>滚动</div>
    </section>
  );
}

/* ─── Stats Slide ─── */
export function StatsSlide({
  label,
  title,
  titleHighlight,
  stats,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  stats: { number: string; label: string; source?: string }[];
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.statGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={s.stat}>
              <div className={s.statNumber}>{stat.number}</div>
              <div className={s.statLabel}>{stat.label}</div>
              {stat.source && <div className={s.statSource}>{stat.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Text + Pipeline Slide ─── */
export function PipelineSlide({
  label,
  title,
  titleHighlight,
  bodyLarge,
  body,
  steps,
  quote,
  quoteAttribution,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  bodyLarge?: string;
  body?: string;
  steps: { label: string; subtext?: string; blocked?: boolean }[];
  quote?: string;
  quoteAttribution?: string;
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        {bodyLarge && <p className={s.bodyLarge}>{bodyLarge}</p>}
        {body && <p className={s.body}>{body}</p>}
        <div className={s.pipeline}>
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {i > 0 && <span className={s.pipelineArrow}>→</span>}
              <div className={`${s.pipelineStep} ${step.blocked ? s.pipelineStepBlocked : ""}`}>
                {step.label}
                {step.subtext && <div className={s.pipelineStepSubtext}>{step.subtext}</div>}
              </div>
            </div>
          ))}
        </div>
        {quote && (
          <div className={s.quote}>
            <p className={s.quoteText}>{quote}</p>
            {quoteAttribution && <div className={s.quoteAttribution}>{quoteAttribution}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Code Slide ─── */
export function CodeSlide({
  label,
  title,
  titleHighlight,
  children,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  children: React.ReactNode;
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.codeBlock}>{children}</div>
      </div>
    </section>
  );
}

/* ─── Feature Grid Slide ─── */
export function FeatureGridSlide({
  label,
  title,
  titleHighlight,
  features,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  features: { icon: string; title: string; description: string }[];
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={s.feature}>
              <div className={s.featureIcon}>{f.icon}</div>
              <h4 className={s.featureTitle}>{f.title}</h4>
              <p className={s.featureDescription}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Card Grid Slide ─── */
export function CardGridSlide({
  label,
  title,
  titleHighlight,
  cards,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  cards: { title: string; description: string | React.ReactNode; highlighted?: boolean }[];
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.cardGrid}>
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${s.card} ${card.highlighted ? s.cardHighlighted : ""}`}
            >
              <h4 className={`${s.cardTitle} ${card.highlighted ? s.cardTitleHighlighted : ""}`}>
                {card.title}
              </h4>
              <p className={s.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Columns Slide ─── */
export function ColumnsSlide({
  label,
  title,
  titleHighlight,
  columns,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  columns: { heading: string; items: string[] }[];
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.columns}>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className={s.columnTitle}>{col.heading}</h4>
              <ul className={s.columnList}>
                {col.items.map((item) => (
                  <li key={item} className={s.columnItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table Slide ─── */
export function ComparisonSlide({
  label,
  title,
  titleHighlight,
  headers,
  highlightColumn,
  rows,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  headers: string[];
  highlightColumn?: number;
  rows: { feature: string; values: string[] }[];
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <table className={s.table}>
          <thead>
            <tr>
              <th></th>
              {headers.map((h, i) => (
                <th key={h} className={i === highlightColumn ? s.thHighlighted : ""}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                {row.values.map((val, i) => {
                  const isNo = val.toLowerCase() === "no" || val === "否";
                  return (
                    <td key={i} className={i === highlightColumn ? s.cellYes : isNo ? s.cellNo : ""}>
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─── Team Slide ─── */
export function TeamSlide({
  label,
  title,
  titleHighlight,
  members,
  footnote,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  members: { name: string; role: string; points: string[] }[];
  footnote?: string;
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        <div className={s.teamGrid}>
          {members.map((m) => (
            <div key={m.name} className={s.member}>
              <h4 className={s.memberName}>{m.name}</h4>
              <div className={s.memberRole}>{m.role}</div>
              <ul className={s.memberList}>
                {m.points.map((p) => (
                  <li key={p} className={s.memberPoint}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {footnote && <p className={s.footnote}>{footnote}</p>}
      </div>
    </section>
  );
}

/* ─── Vision / CTA Slide ─── */
export function VisionSlide({
  label,
  title,
  titleHighlight,
  codeInline,
  subtitle,
  links,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  codeInline?: string;
  subtitle?: string;
  links?: { label: string; href: string }[];
}) {
  return (
    <section className={s.coverSection}>
      <div className={s.coverInner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        {codeInline && (
          <div style={{ fontSize: "1.3rem", fontFamily: "monospace", color: "var(--color-accent)", marginTop: 24 }}>
            {codeInline}
          </div>
        )}
        {subtitle && (
          <p style={{ fontSize: "1.1rem", color: "rgba(var(--color-foreground-rgb), 0.5)", marginTop: 12 }}>
            {subtitle}
          </p>
        )}
        {links && (
          <div className={s.contactLinks}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={s.contactLink}>{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Generic Text Slide ─── */
export function TextSlide({
  label,
  title,
  titleHighlight,
  children,
}: {
  label: string;
  title: string;
  titleHighlight: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>{label}</div>
        <h2 className={s.title}>
          {title} <span className={s.highlight}>{titleHighlight}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}

/* ─── Outline Slide ─── */
export function OutlineSlide({
  label,
  items,
}: {
  label: string;
  items: { text: string; highlighted?: boolean }[];
}) {
  const indices = ["一", "二", "三", "四", "五", "六", "七", "八"];
  return (
    <section className={s.section}>
      <div className={s.outlineLabel}>{label}</div>
      <div className={s.inner}>
        <div className={s.outlineList}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${s.outlineItem} ${item.highlighted ? s.outlineItemActive : ""}`}
            >
              <span className={s.outlineIndex}>{indices[i] || (i + 1)}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MindMap Slide ─── */
export type TreeNode = { text: string; children?: string[] };

export function MindMapSlide({
  label,
  branches,
}: {
  label: string;
  branches: { title: string; children: TreeNode[] }[];
}) {
  return (
    <section className={`${s.section} ${s.mindMapSection}`}>
      <div className={s.mindMapLabel}>{label}</div>
      <div className={s.inner}>
        <div className={s.mindMapContainer}>
          <div className={s.mindMapBranch}>
            <div className={s.mindMapBranchTitle}>{branches[0].title}</div>
            <div className={s.mindMapChildren}>
              {branches[0].children.map((child, j) => (
                <div key={j} className={s.mindMapChild}>
                  <div className={s.mindMapChildText}>{child.text}</div>
                  {child.children && child.children.length > 0 && (
                    <div className={s.mindMapGrandchildren}>
                      {child.children.map((gc, k) => (
                        <span key={k} className={s.mindMapGrandchild}>{gc}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={s.mindMapRight}>
            {branches.slice(1).map((branch, i) => (
              <div key={i} className={s.mindMapBranch}>
                <div className={s.mindMapBranchTitle}>{branch.title}</div>
                <div className={s.mindMapChildren}>
                  {branch.children.map((child, j) => (
                    <div key={j} className={s.mindMapChild}>
                      {child.text}
                      {child.children && child.children.length > 0 && (
                        <div className={s.mindMapGrandchildren}>
                          {child.children.map((gc, k) => (
                            <span key={k} className={s.mindMapGrandchild}>{gc}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
