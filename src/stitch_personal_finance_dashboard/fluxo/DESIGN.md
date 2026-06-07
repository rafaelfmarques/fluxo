---
name: Fluxo
colors:
  surface: '#0e141d'
  surface-dim: '#0e141d'
  surface-bright: '#343944'
  surface-container-lowest: '#090e17'
  surface-container-low: '#161c25'
  surface-container: '#1a2029'
  surface-container-high: '#252a34'
  surface-container-highest: '#30353f'
  on-surface: '#dee2f0'
  on-surface-variant: '#b9cac4'
  inverse-surface: '#dee2f0'
  inverse-on-surface: '#2b313b'
  outline: '#83948f'
  outline-variant: '#3a4a46'
  surface-tint: '#00dfc1'
  primary: '#d7fff3'
  on-primary: '#00382f'
  primary-container: '#00f5d4'
  on-primary-container: '#006c5c'
  inverse-primary: '#006b5b'
  secondary: '#bac7e1'
  on-secondary: '#243145'
  secondary-container: '#3d495f'
  on-secondary-container: '#acb9d3'
  tertiary: '#fff5e4'
  on-tertiary: '#3c2f00'
  tertiary-container: '#ffd651'
  on-tertiary-container: '#745c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#26fedc'
  primary-fixed-dim: '#00dfc1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#d6e3fe'
  secondary-fixed-dim: '#bac7e1'
  on-secondary-fixed: '#0e1c30'
  on-secondary-fixed-variant: '#3b475d'
  tertiary-fixed: '#ffe086'
  tertiary-fixed-dim: '#eac33f'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#0e141d'
  on-background: '#dee2f0'
  surface-variant: '#30353f'
  surface-base: '#060B14'
  surface-elevated: '#0D1825'
  surface-card: '#152236'
  border-subtle: '#1E3045'
  neon-lime-income: '#B4FF6A'
  neon-rose-expense: '#FF4D6A'
  neon-amber-alert: '#FFB020'
  glow-cyan: rgba(0, 245, 212, 0.2)
  text-glow-cyan: rgba(0, 245, 212, 0.53)
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '300'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style
The design system is engineered for a high-performance personal finance environment, characterized by a "Deep Dark Tech" aesthetic. It targets a modern, data-conscious audience that values precision and visual clarity in a low-light setting. 

The style is a fusion of **Minimalism** and **Cyber-Tech**. It relies on deep ebony surfaces contrasted with vibrant, electric neon accents. By avoiding heavy gradients and opting for thin strokes and "glow" effects, the system achieves a sophisticated, futuristic feel without sacrificing readability. The brand identity is understated and technical, anchored by a lowercase wordmark that feels surgical and intentional.

## Colors
The palette is centered on a "Deep Dark" foundation to minimize eye strain and maximize the impact of functional color. 

- **Primary Neon (Electric Cyan):** Used strictly for interactive elements (CTAs), primary balances, and active states. It represents the "pulse" of the application.
- **Functional Neons:** Color is used semantically to categorize financial data—Lime for positive cash flow, Rose for outflows, and Amber for attention-required items.
- **Surface Strategy:** Layers are built using progressively lighter shades of navy-black to create depth without relying on traditional drop shadows.

## Typography
The typography strategy creates a deliberate contrast between data and interface. 

- **Data Representation:** All large numerical values, balances, and transaction amounts must use **JetBrains Mono**. The monospaced nature ensures that numbers align perfectly in lists and dashboard views, reinforcing the "technical" feel of a financial instrument.
- **Interface Text:** General UI labels, descriptions, and navigation items use **Hanken Grotesk** at light weights (300). This provides a soft, approachable counterpoint to the rigid mono font.
- **Styling:** Key numerical displays should implement a subtle `text-shadow` using the primary cyan to simulate a cathode-ray glow effect.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop and a **Fluid Grid** for mobile devices. 

- **Rhythm:** An 8px base unit (derived from 4px increments) governs all padding and margins. 
- **Grid:** On desktop, a 12-column grid is used with a fixed max-width to maintain scanability of financial data. On mobile, a 4-column fluid grid is used.
- **Density:** The layout should feel "airy" but structured. Use generous margins between cards (24px+) to allow the subtle neon glow of active elements room to breathe without overlapping adjacent content.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Luminous Borders** rather than traditional shadows.

- **Stacking:** The base background is the darkest layer (#060B14). Secondary surfaces (navigation sidebars, headers) sit at #0D1825. Interactive cards and modals sit at the highest level (#152236).
- **Outlines:** Every elevated surface must feature a 1px solid border (#1E3045). This "ghost border" technique defines the architecture of the UI in a dark environment where shadows are often invisible.
- **Glow:** Only the "Primary" or "Active" element receives an outer glow (`box-shadow: 0 0 20px #00F5D433`). This limits visual noise and directs the user’s eye to the most important action or data point.

## Shapes
The shape language is "Soft-Tech." While the overall vibe is futuristic, completely sharp corners are avoided to keep the interface feeling like a modern consumer app rather than a terminal.

- **Standard Radius:** Elements like buttons and cards use a 0.25rem (4px) radius.
- **Container Radius:** Larger layout blocks or "feature cards" can scale up to 0.5rem (8px) to soften the perimeter of the screen.
- **Icons:** Icons must be "Stroke" style with a consistent 1.5px weight. Avoid filled icons unless used as a status indicator.

## Components
- **Buttons:** Primary CTAs are solid Electric Cyan with dark navy text (#060B14). Secondary buttons are ghost-style with a 1px Cyan border and a subtle cyan glow on hover.
- **Cards:** Background: #152236; Border: 1px solid #1E3045. For the "Total Balance" card, apply the primary neon border and text-shadow on the balance figure.
- **Inputs:** Dark backgrounds (#060B14) with a #1E3045 border. On focus, the border transitions to Electric Cyan with a soft glow.
- **Chips/Status:** Use the secondary neons (Lime, Rose, Amber) as low-opacity backgrounds with high-opacity text for categorization (e.g., a "Food" expense tag would have a faint Rose background and bright Rose text).
- **Lists:** Transaction items should be separated by a simple 1px horizontal line (#1E3045). Numbers must be right-aligned using the monospaced font.