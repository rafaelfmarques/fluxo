# Style Guide: Fluxo (Neon Dark)

## 1. Brand Identity
**Name:** fluxo (lowercase, font-weight: 300)
**Core Concept:** Precision, Tech-focused, High-fidelity Wealth Management.
**Aesthetic:** Deep Dark Mode with high-contrast electric neon accents.

## 2. Color Palette
### Surfaces & Backgrounds
- **Base Background:** `#060B14` (Deep space blue)
- **Primary Cards/Surfaces:** `#152236` (Navy surface)
- **Secondary Surfaces:** `#0D1825` (Darker elevation)
- **Borders:** `1px solid #1E3045`

### Accent Colors (Neon)
- **Primary (Electric Cyan):** `#00F5D4`
  - Usage: Total balance, main CTAs, active states, brand logo.
  - Effect: `text-shadow: 0 0 12px rgba(0, 245, 212, 0.53)`
  - Effect: `box-shadow: 0 0 20px rgba(0, 245, 212, 0.2)`
- **Success (Neon Lime):** `#B4FF6A`
  - Usage: Income, positive growth, met targets.
- **Danger (Neon Pink):** `#FF4D6A`
  - Usage: Expenses, withdrawals, alerts.
- **Warning (Neon Amber):** `#FFB020`
  - Usage: Goals in progress, pending items.

## 3. Typography
- **Technical/Financial Data:** `JetBrains Mono`
  - Usage: All currency values, percentages, chart labels, titles.
  - Weight: 300-400 (Light/Regular).
- **Interface/Body Copy:** `Plus Jakarta Sans`
  - Usage: Labels, descriptions, navigation, small UI text.
  - Weight: 400-500.

## 4. Components & Layout
- **Grid:** 12-column desktop grid with generous gutters.
- **Border Radius:** `8px` for cards and major UI elements (consistent with `ROUND_EIGHT`).
- **Icons:** Thin stroke (1.5px - 2px) consistent with the technical aesthetic.
- **Charts:** Clean lines, no fill gradients, neon glows for active data points.

## 5. Development Notes
- Apply a subtle grain or noise overlay for texture on deep backgrounds if required.
- Use `backdrop-filter: blur()` for sticky headers and overlays.
- Interactive elements should have a slight `scale(0.98)` on click.