# DESIGN.md — Portfolio

## Goals

- แสดงตัวตน, ผลงาน, และทักษะ
- ง่ายต่อการอ่านและนำทาง
- โหลดเร็ว, responsive ทุกขนาดหน้าจอ

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero + intro |
| `/about` | เกี่ยวกับตัวเอง |
| `/projects` | รายการโปรเจกต์ |
| `/contact` | ช่องทางติดต่อ |

## Visual Style

- **Theme**: Dark mode เป็นหลัก, รองรับ light mode
- **Font (EN)**: [Inter](https://fonts.google.com/specimen/Inter) — `next/font/google`, variable `--font-inter`
- **Font (TH)**: [Noto Sans Thai](https://fonts.google.com/specimen/Noto+Sans+Thai) — `next/font/google`, variable `--font-noto-sans-thai`
- **Font stack**: `var(--font-inter), var(--font-noto-sans-thai), ui-sans-serif, system-ui`
- **Color palette**: ยังไม่กำหนด — อัปเดตเมื่อตัดสินใจ
- **Spacing**: Tailwind default scale (4px base)

## Component Plan

```
src/
  components/
    ui/          # reusable primitives (Button, Card, Badge)
    layout/      # Navbar, Footer
    sections/    # Hero, About, Projects, Contact
```

## Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| mobile | < 768px |
| tablet | 768px – 1024px |
| desktop | > 1024px |

## Accessibility

- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`)
- Alt text บน image ทุกรูป
- Keyboard navigable
- Contrast ratio ≥ 4.5:1

## Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-07-24 | Next.js App Router | Server Components, streaming, layouts |
| 2026-07-24 | Tailwind CSS 4 | utility-first, ไม่ต้องเขียน CSS เอง |
| 2026-07-24 | Bun | เร็วกว่า npm/yarn |
| 2026-07-24 | Inter + Noto Sans Thai | Inter สำหรับ EN, Noto Sans Thai สำหรับ TH — load ผ่าน next/font (self-hosted, no FOUT) |
