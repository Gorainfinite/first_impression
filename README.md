# The First Impression

Next.js (App Router) port of the "The First Impression" WordPress block theme. No PHP or WordPress needed.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit content

- `lib/site.ts`: name, URL, email, WhatsApp number, nav, rotating words (set the TODOs).
- `app/page.tsx`: homepage sections and copy.
- `app/globals.css`: design tokens (from theme.json) and styles (from style.css).

## WordPress to Next.js mapping

| WordPress | Here |
| --- | --- |
| theme.json palette, fonts, sizes | CSS variables in `app/globals.css`; fonts via `@fontsource` (self-hosted) |
| style.css | `app/globals.css` |
| `blocks/rotating-headline` | `components/RotatingHeadline.tsx` |
| `assets/js/main.js` scroll reveal | `components/Reveal.tsx` |
| Services ticker | `components/Ticker.tsx` (CSS only) |
| `wp_head` JS flag + font preload | inline script in `app/layout.tsx`; fonts bundled by Next |
| Header / footer parts | `components/Header.tsx`, `Footer.tsx` |
| Pattern categories, block styles, editor style, emoji removal | Not applicable (editor-only or WP-only) |

## Deploy

Push to GitHub, then import the repo at vercel.com/new (framework auto-detected as Next.js).
