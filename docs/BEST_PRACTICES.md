# Portfolio Engineering & Design Psychology Best Practices

**Document Status**: ACTIVE  
**Authors**: Lead Frontend Architect & Senior Human-Computer Interaction Psychologist  
**Context**: "Swiss Pop-Brutalist" Portfolio for High-Value Client Acquisition

---

## 1. Executive Summary & Psychological Strategy

This project is not merely a technical showcase; it is a **trust-building mechanism** designed to influence the decision-making of traditional enterprise clients. We utilize a unique blend of **Swiss International Style** (Order, Reliability, Logic) and **Postmodern/Pop Art** (Creativity, Disruption, Relevance) to signal that the entity is "Safe but Cutting Edge."

### The "Chaos to Order" Narrative
*   **Psychological Hook**: Humans have an innate bias towards pattern recognition. By presenting "Chaos" (Randomly floating images, fire, unruly animations) and resolving it into "Order" (Grids, alignment, clean typography), we subconsciously demonstrate competence and control.
*   **The "Ritual" of Loading**: The intro sequence (Fire -> Rain -> Whiteout) serves as a **sensory palette cleanser**. It forces the user to pause, resetting their attention span before presenting the objective information.
    *   *Rule*: Never speed up the loading screen for the sake of metrics alone. The duration allows the user to shift context from their previous task to our environment.

---

## 2. Technology Stack & Architectural Standards

### Core Framework
*   **Next.js (App Router)**: Used for server-side structure and SEO dominance.
    *   *Rule*: All layout shifts (nav, footer) must be stable. Content below the fold is lazy-loaded.
    *   *Pattern*: Use `layout.tsx` for persistent "App Shell" elements (Smooth Scroll, Cursor, Loaders) to maintain state across navigation.

### Styling System (Tailwind + CSS Variables)
*   **Philosophy**: Styles are "Tokens", not values. We use semantic variable names (`--swiss-red`, `--pop-blue`) to allow global mood shifts (e.g., Dark Mode or "Chaos Mode") without refactoring.
*   **Optimization**: Use `will-change-transform` strictly on elements that are actively animating to promote them to their own compositor layer.
    *   *Anti-Pattern*: Do not apply `backdrop-blur` or heavy filters to full-screen scrollable areas unless using a static visual overlay (like our lightweight noise texture).

### Animation Orchestration
We use a **Hybrid Animation Strategy** to balance performance and developer experience.

| Library | Role | Best Practice |
| :--- | :--- | :--- |
| **Three.js / R3F** | **The Hero** | Use sparing for high-fidelity "moments" (Intro). *Must* dispose geometries/materials on unmount. |
| **GSAP** | **The Director** | Primary tool for scroll-jacking. **CRITICAL**: Use direct `.to()` or `toggleActions` to animate elements. NEVER drive high-frequency scroll animations via React `useState`, as this kills INP. |
| **Framer Motion** | **The Actor** | Use for simple, declarative UI transitions (entry fades). Avoid for scroll-linked sequences where GSAP offers better main-thread control. |
| **Canvas 2D** | **The Particles** | For >100 particles (rain, smoke), do not use DOM nodes. Use a single `<canvas>` and **pre-rendered sprites** (offscreen canvas) instead of gradients per frame. |

---

## 3. Cognitive UX & Layout Principles

### Typography: "Bigger is Better"
*   **Psychology**: Large, bold typography reduces cognitive load. It signals confidence.
*   **Implementation**: Use `vw` units. Apply `will-change-transform` to large text blocks that animate.

### The "Grid" as a Trust Anchor
*   **Rule**: Elements may overlap (Postmodernism), but structure must remain visible (Swiss).
*   **Code Pattern**: Always wrap distinct sections in `.swiss-container` to maintain the 12-column rhythm.

---

## 4. Performance & Clean Code Mandates

### 1. Interaction to Next Paint (INP) - ZERO LAG POLICY
*   **The Killer**: Updating React State (`useState`) inside a `scroll` listener or `onEnter` hook triggers a full Component Tree re-render while the main thread is busy scrolling.
*   **The Fix**:
    *   **Prohibit**: `onEnter: () => setActiveId(id)` for purely visual changes.
    *   **Mandate**: Use GSAP `onToggle` to directly target DOM IDs (e.g., `#chapter-1`) and modify `opacity`/`class`. Bypass React reconciliation entirely for scroll effects.
    *   **Result**: 300ms INP -> <50ms INP.

### 2. Cumulative Layout Shift (CLS)
*   **Pinning**: Sticky/Pinned elements must have explicit dimensions. Use `force3D: true` to prevent sub-pixel jitter.
*   **Images**: All images below the fold must have `loading="lazy"` and explicit `sizes`. Only the Hero image gets `priority` (and only if it exists).

### 3. Rendering High-Frequency Particles
*   **Optimization**: Instead of `ctx.createRadialGradient` inside a loop (1000x calls/frame), create **one** "Sprite" (offscreen canvas) at startup and use `ctx.drawImage`. This creates a smoother, softer "puff" look and reduces GPU strain by 90%.

---

## 5. Developer Workflow (Mental Model)

1.  **Draft with Rectangles**: Before styling, lay out the "Swiss Grid" using colored blocks. If the balance feels off in block mode, no amount of animation will fix it.
2.  **Animate the "Why"**: Don't animate for the sake of it. Ask: "Does this animation explain the relationship between these two elements?"
    *   *Example*: The "Legacy" cards flying from random (Chaos) to grid (Order) explains the company's value proposition without words.
3.  **Stress Test**: Open DevTools -> Rendering -> **Paint Flashing**. If the whole screen flashes green on scroll, you have failed. Isolate layers with `will-change`.

---

*Signed,*
**Antigravity Design Systems**
*Engineering & Behavioral Science Division*
