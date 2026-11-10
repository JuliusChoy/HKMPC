# Hong Kong Master Policy Competition (HKMPC)

Public website for the inaugural HKMPC 2026.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4

Copy lives in `lib/site.ts`.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Signup (placeholder)

The primary **Signup** CTA points to a dead placeholder form URL until organisers provide a live form:

- `https://example.com/hkmpc-signup`
- Home also anchors the button at `#signup`

Replace `event.signupUrl` in `lib/site.ts` when the real form is ready.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home — upcoming 2026 notice, theme, Signup, topic preview |
| `/competition` | Rules, deliverables, scoring, Friday/Saturday schedule |
| `/topics` | Three topics with anchors `#digital`, `#skills`, `#green` |
| `/people` | Committee, workshop speakers, judges |
| `/results` | Empty winners block and media placeholders |
| `/contact` | Email and Instagram |

## Brand

Organisers’ gavel wordmark: `public/logo.png`. Do not redraw.
Visual direction: Hong Kong Government Gazette notice (English-only), forest green and copper from the logo.
