---
name: Fiscal Integrity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a personal finance environment where clarity, security, and precision are paramount. The brand personality is **reliable, professional, and sophisticated**, designed to alleviate the stress of financial management through a calm and organized interface.

The design style follows a **Modern Corporate** aesthetic with a strong emphasis on **Minimalism**. It prioritizes heavy white space (generous "breathing room") to prevent cognitive overload during data-heavy tasks. Visual hierarchy is established through meticulous typography and a structured layering system rather than decorative elements. The goal is to evoke an emotional response of "being in control."

## Colors

The palette is anchored in **Deep Navy (#0F172A)** to communicate stability and institutional trust. This is balanced by **Emerald Green (#10B981)**, which serves as a functional accent representing growth, positive balances, and "safe" actions.

- **Primary:** Deep Navy. Used for core branding, primary buttons, and heavy headings.
- **Secondary:** Emerald Green. Used for success states, trend-up indicators, and primary CTAs related to growth.
- **Neutral:** A range of Slate grays. The background is a crisp Off-white (#F8FAFC) to maintain a high-contrast environment for maximum readability.
- **Semantic:** Use high-chroma red for alerts/debts and amber for pending transactions, ensuring they contrast sharply against the primary navy.

## Typography

This design system utilizes a dual-font strategy. **Plus Jakarta Sans** is used for headlines to provide a modern, slightly softer professional feel. **Inter** is utilized for all body text, data points, and labels due to its exceptional legibility and systematic character, which is critical for reading financial figures.

Maintain high contrast at all times. Use `600` weight for semantic labels (like "Account Balance") to ensure they stand out against the background without requiring large font sizes. Numeric data should always use `body-md` or larger to ensure clarity.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (centered 12-column grid) and a **Fluid Grid** on mobile. The spacing rhythm is strictly based on an **8px base unit** to ensure mathematical harmony and alignment across all data visualizations.

- **Desktop:** 12 columns, 24px gutters, 40px minimum side margins.
- **Tablet:** 8 columns, 16px gutters, 24px margins.
- **Mobile:** 4 columns, 16px gutters, 16px margins.

Spacing between cards and sections should be "Airy" (`stack-lg`), allowing the user to focus on one financial category at a time without visual clutter.

## Elevation & Depth

To maintain a clean, professional look, this design system uses **Tonal Layers** combined with **Ambient Shadows**. 

- **Level 0 (Background):** The base neutral color.
- **Level 1 (Cards/Surfaces):** Pure white background with a very soft, diffused shadow (Blur: 12px, Y: 4px, Color: 10% opacity of Primary Color).
- **Level 2 (Modals/Popovers):** Higher elevation with a more pronounced shadow (Blur: 24px, Y: 8px, Color: 15% opacity of Primary Color).

Avoid heavy borders; use subtle 1px strokes in a light gray (#E2E8F0) only when cards sit on an identical background color.

## Shapes

The shape language is **Rounded**, using a 0.5rem (8px) radius for standard components like buttons and input fields. Larger containers like "Financial Summary Cards" use `rounded-lg` (16px) to create a distinct, modern enclosure for data. This moderate roundness balances the "strictness" of financial data with a more approachable, user-friendly feel.

## Components

### Buttons
- **Primary:** Deep Navy background, White text. High-contrast, 8px radius.
- **Secondary:** Transparent background, 1px Navy border.
- **Success:** Emerald Green background. Reserved for "Deposit" or "Save" actions.

### Cards
Cards are the primary container for all financial data. They must have a white background, 16px rounded corners, and the Level 1 ambient shadow. Padding inside cards should be generous (24px or 32px).

### Input Fields
Inputs use a light gray border (#CBD5E1) that shifts to Primary Navy on focus. Labels sit clearly above the field in `label-md` style. Error states must use a 1px Red border and a supporting text hint.

### Data Visualizations
- **Line Charts:** Use Emerald Green for positive trends, with a soft gradient fill beneath the line.
- **Progress Bars:** Use a thick (8px) track with the Primary Navy or Secondary Green for the fill.
- **Chips:** Small, low-saturation backgrounds (e.g., light green background with dark green text) for categorizing transactions (e.g., "Food," "Rent").

### Navigation
A clean sidebar (Desktop) or bottom bar (Mobile) using Deep Navy icons on a white background. The active state is indicated by a vertical bar or small dot in Emerald Green.