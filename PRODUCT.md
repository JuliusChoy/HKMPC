# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16, React 19, and Tailwind CSS 4. Confirmed: keep this architecture. Copy for the public site lives in `lib/site.ts`. Dev command is `npm run dev`.

## Users

Master’s students and public visitors deciding whether to engage with the inaugural Hong Kong Master Policy Competition. Secondary audience: speakers, judges, the HKU School of Governance and Policy, and anyone who needs the public record of the event.

## Product Purpose

HKMPC’s public website persuades eligible students to sign up for the inaugural 2026 competition and explains the rules, topics, people, and contact channels. Success means a visitor can trust the published facts and can take the Signup action without invented claims.

## Positioning

The inaugural competition is organised by the HKU Master of Governance and Policy Student Representatives, with the support of the HKU School of Governance and Policy. Teams of Master’s students write a policy brief to a Hong Kong Secretary and pitch it. The 2026 theme is Building Trust: Governing a Changing Hong Kong.

## Operating Context

The 2026 competition runs in person on Friday 6 and Saturday 7 November 2026, 13:00–19:00, at JCT705, The University of Hong Kong. Teams have 2 to 4 members. Each team chooses one topic, submits a one-page problem statement and a three-page policy brief, and pitches for five minutes with two minutes of questions.

Contact is hkmpc.hku@gmail.com. Updates are also posted at https://www.instagram.com/hkmpc.hku/. Signup uses a placeholder form URL until organisers provide a live form (`https://example.com/hkmpc-signup`, also linked as `#signup` on Home).

## Capabilities and Constraints

Pages: Home, The competition (`/competition`), Topics (`/topics` with three anchors), People, Results (`/results` with empty winners and media placeholders), Contact.

Visual world: Hong Kong Government Gazette notice — standard, less stylised, English-only. Forest green and copper from the organisers’ gavel wordmark. Quiet institutional notice aesthetic.

Do not invent winners, photos, testimonials, or registration counts. Results stays an empty/placeholder structure until assets exist.

Prizes confirmed: HK$1,000 for first place, HK$500 for second place, shared among team members, and a certificate of participation for every team.

## Brand Commitments

The name is the Hong Kong Master Policy Competition (HKMPC). The mark is the gavel wordmark in `public/logo.png`. Use that file. Do not redraw it.

The organising committee: Bridget Chu, Anky Li, Julius Choy, Desmond Wong, and Floria Mak.

Workshop speakers: Priscilla Gatonye (UNESCO-UNEVOC), Mika Noh (AI Culture Lab), Calum Handforth (UN Development Programme).

Judges: Ronald Young (Hong Kong Monetary Authority), Hideki Suzuki (Manulife Investment Management).

Public copy stays faithful to the Participants’ Guide and Background Guide facts.

## Evidence on Hand

- `lib/site.ts` holds the published 2026 facts.
- `public/logo.png` is the logo.
- Participants’ Guide and Background Guide are the source for rules, schedule, topics, prizes, and named speakers and judges.

## Product Principles

- Home reads as if 2026 is upcoming; Signup is the primary action.
- Publish a fact only when the guides or the organisers have confirmed it.
- The competition’s standard is a brief a Secretary could use. The site should not recast it as a generic student contest.
- Keep the Next.js app as the place pages and copy change.
