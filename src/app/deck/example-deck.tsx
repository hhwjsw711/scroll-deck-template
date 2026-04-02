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
 * Example deck showing all available slide types.
 * Copy this file and modify the data to create your own presentation.
 */
export function ExampleDeck() {
  return (
    <Deck>
      {/* 1. Cover */}
      <CoverSlide
        logo="YOUR LOGO"
        title="Your bold headline "
        titleHighlight="with accent color."
        subtitle="A subtitle that explains the key value prop."
      />

      {/* 2. Stats */}
      <StatsSlide
        label="The Shift"
        title="Big numbers that tell"
        titleHighlight="a story."
        stats={[
          { number: "$2.5B", label: "Revenue milestone", source: "6 months" },
          { number: "20M+", label: "Active users", source: "Growing 3x YoY" },
          { number: "150+", label: "Enterprise clients" },
          { number: "99.9%", label: "Uptime SLA" },
        ]}
      />

      {/* 3. Pipeline / Flow */}
      <PipelineSlide
        label="The Gap"
        title="Show a workflow where"
        titleHighlight="something breaks."
        bodyLarge="Your users can do steps 1-3 easily."
        body="But steps 4-6 are where they hit a wall."
        steps={[
          { label: "Step 1" },
          { label: "Step 2" },
          { label: "Step 3" },
          { label: "Step 4?", blocked: true },
          { label: "Step 5?", blocked: true },
        ]}
      />

      {/* 4. Pipeline with subtexts */}
      <PipelineSlide
        label="The Problem"
        title="Each step needs a"
        titleHighlight="different tool."
        steps={[
          { label: "Image", subtext: "Flux" },
          { label: "Video", subtext: "Kling" },
          { label: "Speech", subtext: "ElevenLabs" },
          { label: "Music", subtext: "Suno" },
        ]}
        quote={"\u201CEnterprise deployments use a median of 14 different models.\u201D"}
        quoteAttribution={"\u2014 a16z, 2026"}
      />

      {/* 5. Code */}
      <CodeSlide
        label="The Solution"
        title="One API"
        titleHighlight="for everything."
      >
        <span style={{ color: "rgba(var(--color-foreground-rgb), 0.3)" }}>
          {"// One call does it all"}
        </span>
        <br /><br />
        <span style={{ color: "var(--color-accent)" }}>const</span>{" "}
        result = <span style={{ color: "rgb(97, 175, 239)" }}>yourApi.run</span>
        ({"{"}
        <br />
        {"  "}input: <span style={{ color: "rgb(152, 195, 121)" }}>{'"your prompt here"'}</span>,
        <br />
        {"  "}format: <span style={{ color: "rgb(152, 195, 121)" }}>{'"mp4"'}</span>,
        <br />
        {"}"});
        <br /><br />
        → <span style={{ color: "rgb(152, 195, 121)" }}>done.mp4</span>
      </CodeSlide>

      {/* 6. Feature Grid */}
      <FeatureGridSlide
        label="Under the Hood"
        title="Everything you need"
        titleHighlight="in one place."
        features={[
          { icon: "50+", title: "Integrations", description: "All providers, one interface." },
          { icon: "1", title: "API Key", description: "Unified billing, single dashboard." },
          { icon: "$0", title: "Smart Cache", description: "Identical requests hit cache." },
          { icon: "</>", title: "Open Source", description: "Fork, customize, self-host." },
          { icon: "↻", title: "Auto-Routing", description: "Pick the best provider automatically." },
          { icon: "⚡", title: "Fast", description: "Sub-second response times." },
        ]}
      />

      {/* 7. Card Grid */}
      <CardGridSlide
        label="Defensibility"
        title="Why"
        titleHighlight="we win."
        cards={[
          { title: "Distribution moat", description: "Already embedded where users work.", highlighted: true },
          { title: "Open source", description: "Enterprise customers need to self-host." },
          { title: "Orchestration layer", description: "Models commoditize. The workflow doesn't." },
          { title: "Network effects", description: "More usage = better for everyone." },
        ]}
      />

      {/* 8. Columns */}
      <ColumnsSlide
        label="Traction"
        title="Already"
        titleHighlight="shipping."
        columns={[
          { heading: "Product", items: ["Open-source SDK", "50+ integrations", "Agent skills"] },
          { heading: "Demand", items: ["$2K pre-orders", "30 agencies on waitlist", "100 brands waiting"] },
          { heading: "Distribution", items: ["Inside top tools", "Organic growth", "Skill marketplace"] },
        ]}
      />

      {/* 9. Comparison Table */}
      <ComparisonSlide
        label="Landscape"
        title="We don't compete."
        titleHighlight="We sit on top."
        headers={["Us", "Competitor A", "Competitor B", "Competitor C"]}
        highlightColumn={0}
        rows={[
          { feature: "Open source", values: ["Yes", "No", "No", "No"] },
          { feature: "Multi-provider", values: ["50+ models", "Single", "Templates", "Own model"] },
          { feature: "Agent-native", values: ["First-class", "API only", "No", "No"] },
        ]}
      />

      {/* 10. Team */}
      <TeamSlide
        label="Team"
        title="Built by people who've"
        titleHighlight="done this before."
        members={[
          {
            name: "Jane Doe",
            role: "CEO / Engineering",
            points: ["Built X at Company Y", "Previously sold startup", "10+ years in the space"],
          },
          {
            name: "John Smith",
            role: "Co-founder / Growth",
            points: ["Scaled to 1M users", "Raised $XM before", "Domain expert"],
          },
        ]}
        footnote="Previously worked together at Acme Corp."
      />

      {/* 11. Vision / CTA */}
      <VisionSlide
        label="Vision"
        title="Today this is hard. Tomorrow it's"
        titleHighlight="one line of code."
        codeInline="yourApi.run()"
        subtitle='is the new print("hello world") for your space.'
        links={[
          { label: "you@company.com", href: "mailto:you@company.com" },
          { label: "github.com/you", href: "https://github.com/you" },
          { label: "yoursite.com", href: "https://yoursite.com" },
        ]}
      />
    </Deck>
  );
}
