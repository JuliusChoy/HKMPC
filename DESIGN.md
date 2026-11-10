# Design system — HKMPC Gazette notice

## Direction

Hong Kong Government Gazette notice: quiet institutional paper, English-only, standard rather than stylised. The organisers’ gavel wordmark leads. Forest green and copper from the logo set the palette. No bilingual columns, no metaphor theatre.

## Surfaces

- **Home (Persuade):** notice sheet with logo, theme, lede, dates/venue, primary Signup, topic links.
- **Interiors (Read):** competition rules, topics, people, results placeholders, contact.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f7f5f0` | Page ground |
| `--paper-deep` | `#efebe3` | Soft panels, footer wash |
| `--ink` | `#1a1a18` | Body text |
| `--muted` | `#4a4740` | Secondary text |
| `--green` | `#1a4336` | Primary brand / headings / rules |
| `--green-deep` | `#123028` | Hover on primary actions |
| `--copper` | `#9a6b3f` | Accent rules, times, soft emphasis |
| `--copper-soft` | `#c4a46a` | Soft copper (logo-adjacent) |
| `--line` | `#d4cdc0` | Dividers |

Background: fixed paper wash with a faint copper radial and vertical paper-deep gradient — atmosphere without illustration.

## Typography

- **Display / notice titles:** Libre Baskerville (`--font-libre-baskerville`)
- **Body / UI:** Source Sans 3 (`--font-source-sans`)
- Headings carry their own weight; no eyebrow/kicker labels above them.
- Body measure stays readable (~65–75ch on notice copy).

## Layout

- Max content width `max-w-5xl`.
- Home is one notice composition: logo → theme → lede → Signup → topics.
- Interiors use a simple page hero (copper rule + title + lede), then hairline-divided lists and tables — not card grids.
- Results uses dashed empty regions for winners and a media placeholder grid; no invented content.

## Components

- **Header:** sticky paper bar, logo left, text nav (Home · The competition · Topics · People · Results · Contact).
- **Signup button:** solid forest-green rectangle; links to placeholder `event.signupUrl`; `id="signup"` on Home.
- **Footer:** green top rule, logo, page list, email + Instagram.

## Motion

- `motion-notice`: short fade/rise on the Home notice mast.
- `motion-rule`: horizontal rule draws from the left.
- `motion-rise`: delayed soft rise for lede and CTA.
- Honours `prefers-reduced-motion`.

## Do not

- Invent winners, photos, testimonials, or registration counts.
- Redraw the logo.
- Add Chinese columns or bilingual layout.
- Use navy-on-cream theatre, glow effects, or marketing card stacks on Home.
