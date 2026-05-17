---
name: testing-lats-landing
description: Test the LATS (Latitud Sur) dark cinematic landing page end-to-end. Use when verifying visual fixes, form functionality, responsive behavior, or animation correctness.
---

# Testing LATS Landing Page

## Overview
Single-page static landing for Latitud Sur Capacitaciones. All code lives in `public/index.html` (HTML + inline CSS + inline JS). Deployed as a static frontend.

## Deployed URL
- Production/preview: check the most recent deploy output or PR for the current URL
- The page is a static site deployed via `devinapps.com` frontend deploy

## Key Sections to Test

| Section | Nav link | Key elements |
|---------|----------|--------------|
| Hero | (top) | Video background, rotating word (personas/integridades/innovaciones), T1+T2 buttons |
| Marquee | — | 8 company names scrolling left-to-right |
| Servicios | Servicios | 8 service cards (clickable with cyan links) |
| Por qué LATS | — | 4 differentiator cards (static, no hover lift) |
| Modelo | Modelo | 3 methodology cards (static) |
| Razón de Ser | Nosotros | LATS neon ring SVG (3 colored segments rotating) |
| Video | — | Vimeo modal (click play button) |
| Casos de Éxito | Casos | 3 case study cards (clickable) |
| Cobertura | Cobertura | Chile map with 3 region markers, Atacama/Araucanía photos |
| FAQ | — | Accordion details/summary elements |
| Contacto | Conversemos | Form → WhatsApp redirect, Google Maps iframe |

## Test Procedures

### 1. LATS Neon Ring (Razón de Ser section)
- Navigate to "Nosotros" nav link
- Verify ring shows 3 colored segments (green/cyan/orange) forming complete circle
- Ring should rotate slowly (~50s full rotation)
- "LATS" text should be centered in white
- If segments have large gaps, check `stroke-dasharray` values (should be "34 66" for each circle)

### 2. Chile Map Markers (Cobertura section)
- Navigate to "Cobertura" nav link
- Verify 3 colored dot markers are positioned WITHIN the Chile map frame (not in blank space beside it)
- Markers: Atacama (orange, top), Santiago (cyan, middle), Araucanía (green, lower)
- Each should have a pulsing ring animation
- Labels should be visible next to each dot
- The chile-map.avif image might render as a light-gray rectangle; the CSS filter `brightness(0) invert(1)` should make it a white silhouette

### 3. Static vs Clickable Cards (Affordance)
- Static cards (class `liquid-glass static`): NO hover lift, NO cursor pointer
- Clickable cards (class `liquid-glass clickable`): cursor pointer, translateY(-6px) on hover, cyan glow
- Quick verification: `grep -c "liquid-glass static" public/index.html` and `grep -c "liquid-glass clickable" public/index.html`
- Note: Hover effects might be difficult to test via automation tools — CSS rule inspection is a reliable fallback

### 4. Nav Scrollspy
- Scroll through page; active nav link should get a cyan underline
- Click different nav links and verify the underline moves
- The JS uses IntersectionObserver to detect which section is visible

### 5. Contact Form → WhatsApp
- Fill in: Nombre, Email, Empresa, Mensaje (Teléfono optional)
- Click "Enviar mensaje"
- Should open `api.whatsapp.com/send/?phone=56932293868&text=...` with prefilled message containing the form data
- Google Maps iframe should show "Guardia Vieja 255" in dark mode

### 6. Mobile Responsive
- Use DevTools device emulation (iPhone 14 or similar)
- Video background should be hidden (static gradient shown instead)
- Backdrop blur should be disabled (solid dark backgrounds)
- Hamburger menu icon should appear
- Cards should stack in single column
- CSS media queries at `max-width: 768px`

## Common Issues

- **Video not loading**: The Vimeo embed uses lazy loading. Check if `loading="lazy"` is preventing it from loading in viewport.
- **Map silhouette not visible**: The `.avif` image might not load in all browsers. The CSS filter `brightness(0) invert(1)` inverts it to white.
- **Hover testing limitation**: The computer-use automation tool cannot simulate CSS `:hover` states. Use CSS rule inspection via grep as a fallback.
- **DevTools device toggle**: The F12/Ctrl+Shift+I keyboard shortcut might not work via automation. Use CSS code inspection to verify mobile media queries instead.

## Brand Colors
- Green: `#22C55E`
- Orange: `#F97316`
- Cyan: `#00d2ff`
- Near-black: `#0c0c0c`

## Contact Info (for form testing)
- WhatsApp: +56 9 3229 3868
- Email: contacto@lats.cl
- Address: Guardia Vieja 255, Oficina 913, Providencia, Santiago

## Devin Secrets Needed
No secrets required — this is a static public page with no authentication.
