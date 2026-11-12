# Vem ser TP — Design System

A design system reconstructed from the **"Vem ser TP"** (Come be TP) Figma
file — the candidate-facing recruitment & onboarding portal of
**Teleperformance (TP)** in Brazil. It is the brand and UI language used across
job discovery, registration, qualification tests, interviews, document upload
and the new-hire dashboard.

> Everything here was extracted from the attached Figma file, which is the
> source of truth. Public TP branding was not used.

## Source

- **Figma file:** `TP People.fig` (mounted read-only during authoring).
  - Page `Vem-ser-TP` — 397 desktop frames (1512px canvas).
  - Page `Vem-ser-TP-mobile` — 32 mobile frames.
  - Page `Survey` — 15 frames.
- No Figma **Variables** collections exist in the file, so tokens here were
  derived from the file's measured colors, type and spacing — not from a
  variables export.

## Product context

TP is one of the world's largest customer-experience / contact-center
employers. "Vem ser TP" is the recruitment funnel that takes a candidate from
landing page → profile registration → vacancy application → qualification
tests (typing, connectivity, written assessment) → interview scheduling →
job offer → documents & data → onboarding dashboard. The tone is warm,
energetic and inclusive, leaning on the hashtag family **#VemSerTP** /
**#ParaSerTP**. The portal is in **Brazilian Portuguese**.

---

## CONTENT FUNDAMENTALS

How copy is written across the portal:

- **Language:** Brazilian Portuguese, always.
- **Voice — second person, warm and direct.** The brand speaks to "você"
  ("you"): *"Seu futuro começa aqui!"*, *"Queremos te ver aqui fazendo
  carreira"*, *"Você está dando os primeiros passos…"*. It is encouraging and
  human, never corporate-stiff.
- **Hashtags as signature.** Headlines and CTAs close with **#VemSerTP** and
  **#ParaSerTP**. Use sparingly, as a punchy sign-off — not in body text.
- **Casing.** Display headlines are sentence case. UI labels, tabs, tags and
  button text are **UPPERCASE** with light letter-spacing
  (`INICIANTE`, `ENTRAR`, `CADASTRE-SE`, `AVANÇAR`, `PRESENCIAL`).
- **Emphasis.** A single word in a headline is italicised or recoloured for
  warmth (e.g. *aqui!* in yellow on the hero). Bold is used for the privacy /
  consent terms and key nouns.
- **Microcopy is reassuring.** Forms explain *why* ("Preencha corretamente
  todos os dados e clique em avançar"), and the recruiter footer offers a
  human channel ("canal exclusivo para você").
- **Wellbeing language.** Job posts include a recurring **"Bem-Estar TP"**
  block describing mental & physical health perks, written in an empathetic,
  first-person-plural voice ("Aqui cuidamos dos nossos colaboradores…").
- **No emoji** in product copy. WhatsApp is the one iconographic motif
  (recruiter contact), not an emoji.

---

## VISUAL FOUNDATIONS

**Color.** The palette is built on two brand hues plus a success green:

- **Magenta `#FF0182`** — the primary accent. Drives links, the "Voltar"
  control, modality tags ("Remoto"), opportunity counts, and the recruiter
  footer gradient. Pressed/deep variant `#E40276`.
- **Purple `#7A2180`** (deep violet `#780096`) — secondary brand. Used for the
  "Presencial" tag, the "Bem-Estar TP" section body, and gradient pairings
  with magenta.
- **Success green `#23B33A` / `#57D163`** — approvals, completed test states,
  "Híbrido" tag.
- **Black `#000`** — the workhorse CTA color (buttons are black far more often
  than magenta), the logo, and the signed-in avatar.
- **Neutrals** — a warm-free gray ramp from `#404040` (body text) through
  `#AEAEAE` (placeholders/labels), `#B2B2B2` (input borders), `#EBEBEB`
  (auto-filled fields) to the page background `#F7F7F7`.

**Type.**
- **Display:** *SancoaleSoftened* — a custom, softly-rounded humanist sans
  (Teleperformance's brand face). Used for hero headlines (60px), page titles
  (44px) and card titles (20px) with a +1% letter-spacing and generous
  leading. **Not publicly available — substituted with Nunito here** (closest
  free rounded humanist sans). ⚠ See Caveats.
- **Body / UI:** *Noto Sans* (300/400/500/700) — all form fields, body copy,
  labels, buttons.
- **Accent:** *Lato* — appears in a few marketing banners.

**Layout.** 1512px desktop canvas, ~45px side gutters, a white fixed header
(73px). Content sits on the `#F7F7F7` page over white cards. Job listings use a
3-up grid of fixed 265px cards. Forms pair a left display-headline column with
a right form panel.

**Shape & elevation.** The system is **pill-first**: buttons, inputs, selects
and tags are all fully-rounded (100px radius). Cards are softly rounded
(~10px), large content panels ~20px. Avatars and icon affordances are circular.
Cards float on a single soft drop shadow `0 1.5px 9px rgba(0,0,0,.25)`; inputs
use a 1px inset border rather than a shadow.

**Backgrounds & imagery.** Hero uses a full-bleed photographic banner — warm
purple/pink dusk skies with a candidate silhouette — overlaid with a left-to-
right dark scrim for legibility. Marketing bands use a **purple→magenta
diagonal gradient**. No textures, no patterns, minimal gradients elsewhere.

**Motion & states.** Restrained. Cards lift slightly on hover (translateY −3px
+ deeper shadow); buttons brighten ~12% on hover and scale 0.98 on press.
Inputs darken their border on focus. No bounce, no decorative loops.

**Borders & dividers.** Hairline `#B2B2B2` on inputs; `#D9D9D9` dividers under
tab rows. Tags are outlined (1.5px) in their tone color with transparent fill.

---

## ICONOGRAPHY

- **No icon font / sprite ships in the file.** Icons are individual vectors.
- **WhatsApp** is the single recurring brand glyph — the recruiter-contact
  motif in the header and footer. Recreated as an inline SVG (see
  `PortalHeader` and `parts.jsx`).
- **Functional glyphs** are simple line/solid shapes: a circular **chevron**
  (back link, forward buttons), a **location pin** (magenta, on job detail), a
  **dropdown chevron** (selects), **check** marks (checkboxes, approvals), and
  a **user** glyph (default avatar). All are drawn inline with `currentColor`
  so they inherit brand color.
- **Logo:** the Teleperformance **"TP" mark** (a stylised P-arrow), a single
  vector path — `assets/tp-logo.svg`, also exposed as the `<Logo>` component.
- **Emoji:** not used.

If you need a broader icon set for new screens, match the existing thin,
geometric line style — Lucide (CDN) is the closest free match; flag any such
substitution.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (imports only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `tp-logo.svg`, `hero-banner.jpg`, `footer-gradient.png`.
- `SKILL.md` — Agent Skill manifest.

**Components** (`window.VemSerTPDesignSystem_*` after the bundle loads)
- `components/forms/` — `Button`, `Input`, `Select`, `Checkbox`, `Toggle`.
- `components/data-display/` — `JobCard`, `Tag`, `Avatar`.
- `components/navigation/` — `PortalHeader`, `BackLink`.
- `components/brand/` — `Logo`.

**Guidelines** (`guidelines/*.card.html`) — foundation specimen cards for the
Design System tab: brand colors, neutrals, display type, body type, radius &
shadow, spacing scale.

**UI kits**
- `ui_kits/recruitment-portal/` — interactive desktop portal (Home · Vagas ·
  Vaga detail · Cadastro).
- `ui_kits/mobile/` — phone-width portal home.

## Caveats

- **SancoaleSoftened** (the brand display font) is proprietary and not bundled.
  It is aliased to **Nunito** via `tokens/fonts.css`. Swap in the licensed
  webfont (one `@font-face` `src:` change) for production fidelity.
- Noto Sans / Lato load from Google Fonts (online). Self-host for offline use.
- Token values are measured from the Figma file (no Variables collection existed).
