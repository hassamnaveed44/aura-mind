# Aura Mind — High-Craft Mental Healthcare Platform

A modern, immersive, and accessible web application designed to connect individuals with personalized therapy, evidence-based psychiatry, and interactive self-care tools.

---

## 🌟 Project Overview

**Aura Mind** reimagines digital mental healthcare through calm design aesthetics, fluid micro-interactions, and human-centric care pathways. Built using Next.js 16 (App Router), React 19, TypeScript, and Framer Motion, it offers a seamless experience designed to reduce cognitive overwhelm.

---

## 🎨 Design System & Visual Direction

- **Obsidian Dark Palette**: `#080A0F` base with muted slate surfaces (`#11151C`), organic sage accents (`#6F8F78`), and warm amber touches (`#D8B477`).
- **Glassmorphism**: Translucent backdrop-blur cards (`glass-card`) with fine subtle borders (`border-white/10`).
- **Typography**: Serif titles paired with readable sans-serif body copy for an editorial, trusted feeling.

---

## 🧘 Signature Interactive Experience

### Resonant Breathing Sphere (`BreathingMoment.tsx`)
An interactive breathing exercise widget featuring 3 evidence-based breathing protocols:
1. **Deep Calm (4-4-4)** — Equal-rhythm balancing
2. **De-Stress (4-7-8)** — Parasympathetic nervous system regulation
3. **Focus Box (4-4-4-4)** — Mental resetting and sharpness

Includes live phase indicators ("Inhale", "Hold", "Exhale"), play/pause toggle, and full **`useReducedMotion()`** compliance.

---

## ⚡ Framer Motion Highlights

- **Scroll-Based Parallax**: Dynamic visual scaling and `y`-offset in the `Hero.tsx` component using `useScroll` & `useTransform`.
- **Curtain / Image Reveals**: Slide-away reveal layers on hero visuals and journal articles.
- **Staggered Typography**: Animated word-by-word entrance for headlines.
- **Interactive State Switcher**: Smooth mode switching in `StatesExplorer.tsx` using `AnimatePresence`.
- **Testimonial Carousel**: Auto-rotating 3-item card deck with pause-on-hover, arrow/dot controls, and `aria-live="polite"` accessibility regions.
- **Accessible Modal Transitions**: Modal backdrop and container enter/exit animations in `IntakeModal.tsx`.

---

## ♿ Accessibility Compliance

- **Reduced Motion Support**:
  - Component-level logic using Framer Motion's `useReducedMotion()` hook.
  - Global CSS fallback via `@media (prefers-reduced-motion: reduce)` in `globals.css`.
- **Keyboard & Screen Reader Support**:
  - `Escape` key handlers on all modal overlays.
  - ARIA attributes (`aria-live="polite"`, `aria-current`, `role="dialog"`, `aria-modal="true"`).
  - Explicit focus states for interactive buttons.

---

## 📁 Project Structure

```
d:\mental-wellness
├── app/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with ambient sound toggle
│   │   ├── Hero.tsx              # Scroll-parallax hero & curtain reveal
│   │   ├── StatementSection.tsx  # Core philosophy statement
│   │   ├── StatesExplorer.tsx    # Interactive mood & mental state widget
│   │   ├── CarePathways.tsx      # Therapy, Psychiatry & Self-Care pathways
│   │   ├── Specialists.tsx       # Conceptual practitioner profile deck
│   │   ├── Journal.tsx           # Educational essays with modal reader
│   │   ├── Testimonials.tsx     # Auto-rotating member reflections carousel
│   │   ├── BreathingMoment.tsx   # Interactive breathing sphere
│   │   ├── FinalCTA.tsx          # Consultation trigger section
│   │   ├── Footer.tsx            # Footer navigation
│   │   └── IntakeModal.tsx       # 3-step Care Match Quiz modal
│   ├── globals.css               # Design tokens & reduced motion fallback
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page composition
├── public/                       # Static media assets & ambient.mp3
└── README.md
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
