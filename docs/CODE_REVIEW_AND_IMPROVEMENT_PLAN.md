# 🏗️ Professional Code Audit & Engineering Roadmap
**Project:** `portfolio-swiss`  
**Reviewer:** Senior Frontend Lead (Staff Engineer Level)  
**Status:** Technical Debt Identified // Improvement Plan Initialized

---

## 📋 Executive Summary
Audit ini dilakukan dari perspektif **Lead/Staff Senior Frontend Engineer** untuk mengevaluasi kesiapan produksi (*production-readiness*), skalabilitas, dan keandalan sistem. Secara visual, proyek ini memiliki *art direction* yang sangat kuat. Namun, secara arsitektur engineering, terdapat tumpukan *technical debt* yang signifikan dalam hal aksesibilitas (a11y), pengujian (testing), dan *type safety*.

**Constraint Utama:** Seluruh perbaikan arsitektural dan sistemik dalam rencana ini **WAJIB** menjaga integritas visual, animasi, dan logika interaksi yang sudah ada. Evolusi kode ini adalah tentang *refactoring*, bukan *redesigning*.

---

## 🔍 1. Key Weaknesses (Deep Audit V2 Findings)

### A. Arsitektur & Performance
1. **Context Reference Instability**: Objek value pada `LanguageContext` dibuat baru setiap render, memicu re-render seluruh aplikasi secara berlebihan. (FIXED in Phase 3)
2. **Z-Index Fragmentation**: Penggunaan nilai z-index manual (`z-[1001]`, `z-[9999]`) berisiko konflik pada layer UI yang kompleks. (FIXED in Phase 3)
3. **Interstitial Delay**: *Loading screen* yang memakan waktu lama merusak metrik LCP jika tidak dioptimalkan dengan `dynamic imports` dan `priority loading`. (FIXED in Phase 3)

### B. SEO & i18n Desynchronization
1. **Static lang Attribute**: Tag `<html lang="en">` tidak sinkron dengan preferensi user. (FIXED in Phase 3)
2. **Semantic HTML Breach**: Risiko redundansi `<h1>` pada halaman utama. (FIXED in Phase 2)

---

## 🛠️ 2. Step-by-Step Improvement Plan (Roadmap)

### Fase 1: Stability & Safety (COMPLETED ✅)
- [x] Refactor Type Definitions (Satisfies Pattern).
- [x] Barrel Pattern Implementation.
- [x] Component Modularization (Landing Page Split).

### Fase 2: Accessibility & SEO (COMPLETED ✅)
- [x] Heading Hierarchy Consolidation.
- [x] ARIA Roles & Labels Implementation.
- [x] Dynamic HTML Language Sync.

### Fase 3: Performance & Core Web Vitals (COMPLETED ✅)
- [x] Dynamic Imports (SSR: false) for heavy components.
- [x] GPU Promotion (`will-change`) for complex animations.
- [x] LCP Optimization (`priority` & `eager` loading).
- [x] GSAP Ticker & Lag Smoothing Tuning.
- [x] Context Memoization (Ref Reference Stability).
- [x] Z-Index Centralization Setup in globals.css.

### Fase 4: Reliability (Testing Strategy) (COMPLETED ✅ - Ready to uninstall after use)
1. **Vitest Setup**: [x] INSTALLED & PASSED - Unit testing untuk logika i18n dan hooks.
2. **React Testing Library**: [x] INSTALLED & PASSED - Integration testing untuk interaksi toggle.
3. **Playwright Setup**: [x] INSTALLED & CONFIGURED - Visual Regression testing (e2e/visual.test.ts).

---

## 📜 3. Senior Lead's Best Practice Guide

1. **Zero Re-render Strategy**: Gunakan `useMemo` dan `useCallback` secara strategis pada Provider dan event-heavy components.
2. **Centralized Layering**: Jangan gunakan `z-[number]` ad-hoc. Gunakan CSS variables di `:root` untuk mengelola stack UI.
3. **Visual & Interaction Integrity**: Refactoring **TIDAK BOLEH** mengubah durasi, easing, atau transisi visual GSAP dan shader.

---
> **Note:** Dokumentasi ini diperbarui setelah Deep Audit V2 untuk memastikan standar engineering kelas dunia.
