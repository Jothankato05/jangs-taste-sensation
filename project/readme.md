# JANG'S TASTE SENSATION — Design System

Brand system for **Jang's Taste Sensation**: a chef's personal site and restaurant brand that wants a **stunning, 3D, cinematic web presence**. The visual direction is derived from an attached brand-guide sample for a clothing label called **Mirage** (studio: AGEOFLEO) — moody full-bleed photography, a strict four-color palette, wide-tracked uppercase type, and enormous quiet space. Jang's borrows the *atmosphere*, not the identity.

## Sources

- `uploads/*.webp` (10 images) — Mirage brand-guide mockups: billboard, business cards, iPhone app icon, palette card, logo construction, jacket lockup, logo knockout/cutout, hero photo. Same files also mounted read-only at `chef jang/`.
- No codebase, Figma, or copy deck was provided for Jang's Taste Sensation itself.

## What's real vs. adapted

- **Palette** — lifted verbatim from the Mirage palette card: White `#FFFFFF`, Black `#000000`, Morning Fog `#CCBCA3`, Lake Water `#AEC4DC`.
- **Logo — NONE EXISTS.** No Jang's mark was provided, and the Mirage mountain mark belongs to another brand. Everywhere a mark would sit, the system sets **JANG'S TASTE SENSATION** in wide-tracked caps (see `components/core/Wordmark`). Do not draw a logo.
- **Type** — the reference uses a geometric grotesque (Gotham/Gilroy-like). Nearest Google Fonts match: **Montserrat** (variable TTFs shipped in `assets/fonts/`). *This is a substitution — ask the client for brand font files.*
- **Photography** — reference photos are Mirage-branded mountainscapes; none are usable as Jang's assets. The system specifies dark, cinematic, steam-and-ember food photography and uses `<image-slot>`/CSS-atmosphere placeholders until real photos arrive.

## CONTENT FUNDAMENTALS

- **Voice**: declarative, short, absolute. Sentences end hard with a period. Reference: "DESIGNED FOR EXPLORATION." / "UNSEEN. UNMATCHED."
- **Casing**: headlines and kickers are ALL CAPS. Body copy is sentence case, light weight, generous leading.
- **Person**: brand speaks *at* you, second person, imperative — "Your table is waiting." Never "we're excited to…".
- **Length**: headline ≤ 5 words + one short subline. Two-word taglines with periods are the signature: "SEARED. SERVED." / "TASTE. SENSATION."
- **Menu copy**: dish names in caps, descriptions one line, lowercase, ingredient-led ("charred octopus, gochujang glaze, smoked leek").
- **No emoji. No exclamation marks.** Numbers set in the same type, tabular where aligned.

## VISUAL FOUNDATIONS

- **Color**: near-black stage (`--ink-950 #050505`) everywhere; White for type; Morning Fog `#CCBCA3` as the warm accent (dividers, kickers, hover); Lake Water `#AEC4DC` sparingly (focus rings, cool highlights). Light sections use `--fog-100 #F2EDE3`, never pure white pages.
- **Type**: one family (Montserrat). Hierarchy via weight + case + tracking, not many sizes. Hero: 700–800 caps, `--tracking-display`. Kickers: 11–12px caps at `--tracking-kicker: 0.42em`, usually Morning Fog. Body: 300–400 at 16px/1.65.
- **Backgrounds**: full-bleed imagery or flat near-black. Text over photos sits on protection gradients (`--scrim-bottom`, `--scrim-full`) — never capsules. Subtle film grain welcome.
- **3D / cinematic motifs**: perspective tilt on cards (`--depth-perspective: 1200px`), layered parallax heroes, slow scale-in of imagery (1.06 → 1), depth-of-field blur on far layers.
- **Animation**: slow and weighty — `--ease-cinematic cubic-bezier(0.22,1,0.36,1)`, 450–900ms. Fades + translate-up; no bounce, no spin.
- **Hover**: brightness/opacity lift (image brightness 0.85→1, card surface 4%→7% white) + hairline turning Morning Fog. Press: scale 0.98, no color flash.
- **Borders**: 1px hairlines at 12% white; 28% on hover/strong. On light: 16% black.
- **Radii**: sharp corners. The single **signature radius** (28px, top-right corner only) echoes the reference mark's silhouette — use on feature cards and image frames, sparingly.
- **Shadows**: deep soft blacks (`--shadow-card`), occasional warm glow (`--shadow-glow-fog`). No small crisp shadows.
- **Transparency/blur**: glass nav and dialogs — `--surface-glass` + 18px backdrop blur, hairline border.
- **Imagery**: low-key, desaturated-cool environments with warm highlights (steam, flame, plated food under a single spot). Faces in shadow; scale and solitude.
- **Layout**: 1320px container, generous gutters, hero type may sit centered over full-bleed media; fixed glass nav; footers near-black with hairline dividers.

## ICONOGRAPHY

- No icon set was provided. The system links **Lucide** from CDN (1.5px stroke, minimal geometry — matches the hairline aesthetic). Flagged as an intentional substitution.
- Usage: 16–20px, `stroke-width: 1.5`, color `--text-secondary` (Morning Fog when active). Never filled, never multicolor. No emoji, no unicode-as-icon.
- Wordmark stands in for any logo usage (see above).

## Index

- `styles.css` → `tokens/` (fonts, colors, typography, layout, base)
- `assets/fonts/` — Montserrat variable TTFs (substitute)
- `guidelines/` — specimen cards shown in the Design System tab
- `components/core/` — Wordmark, Button, IconButton, Badge, Tag, Divider, SectionHeading
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/content/` — TiltCard (3D), DishCard, NavBar, Footer
- `components/overlay/` — Dialog, Toast, Tabs
- `ui_kits/website/` — cinematic site screens (Home, Menu, Chef, Reserve) + interactive `index.html`
- `SKILL.md` — agent skill entry point

## Intentional additions

- **Wordmark** — no logo exists; typed lockup is the mark.
- **TiltCard** — carries the requested "3D cinematic" behavior as a reusable primitive.
- **Lucide icons via CDN** — no icon set in source.
