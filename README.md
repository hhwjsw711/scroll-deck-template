# Scroll Deck Template

A full-screen, scroll-snap presentation deck built with Next.js and CSS Modules. Inspired by [varg.ai/why](https://varg.ai/why).

## Features

- **Scroll-snap navigation** — Each slide takes full viewport height, snaps on scroll
- **Progress bar** — Fixed progress indicator at the top
- **Keyboard navigation** — Arrow keys (↑↓ or ←→) to navigate slides
- **Navigation pill** — Floating slide counter with up/down buttons
- **Dark theme** — CSS custom properties for easy theming
- **Mobile responsive** — Works on all screen sizes
- **10+ slide types** — Cover, stats, pipeline, code, features, cards, columns, comparison, team, vision

## Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Usage

### 1. Create your deck

Edit `src/app/deck/example-deck.tsx` or create a new file:

```tsx
import { Deck } from "./deck";
import { CoverSlide, StatsSlide, ... } from "./deck/blocks";

export function MyDeck() {
  return (
    <Deck>
      <CoverSlide
        logo="ACME"
        title="We're building "
        titleHighlight="the future."
        subtitle="One API to rule them all."
      />
      <StatsSlide
        label="Traction"
        title="Numbers that"
        titleHighlight="matter."
        stats={[
          { number: "$10M", label: "ARR", source: "2024" },
          { number: "50K", label: "Users" },
        ]}
      />
      {/* Add more slides... */}
    </Deck>
  );
}
```

### 2. Available Slide Types

| Component | Use Case |
|-----------|----------|
| `CoverSlide` | Opening slide with logo, title, subtitle |
| `StatsSlide` | Grid of stat cards with numbers |
| `PipelineSlide` | Flow diagram with optional blocked steps |
| `CodeSlide` | Code snippet with syntax highlighting |
| `FeatureGridSlide` | Grid of feature cards with icons |
| `CardGridSlide` | Cards with optional highlight |
| `ColumnsSlide` | Multi-column lists |
| `ComparisonSlide` | Feature comparison table |
| `TeamSlide` | Team member cards |
| `VisionSlide` | Closing CTA with links |
| `TextSlide` | Generic slide with custom children |

### 3. Theming

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-background: #000000;
  --color-foreground: #ffffff;
  --color-accent: #ff6b35;       /* Change this for brand color */
  --color-depth-1: rgba(255, 255, 255, 0.04);
  --color-error: #ff1e12;
}
```

## Structure

```
src/app/
├── deck/
│   ├── index.tsx              # Deck engine (scroll-snap, nav, keyboard)
│   ├── deck.module.css        # Deck chrome styles (nav pill, progress bar)
│   └── blocks/
│       ├── index.tsx           # All slide components
│       └── slide.module.css    # All slide styles
├── globals.css                 # Theme variables
├── layout.tsx                  # Root layout
└── page.tsx                    # Entry point
```

## License

MIT
