# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16, React 19, and Tailwind CSS 4. Confirmed: keep this architecture. Copy for the public site lives in `lib/site.ts`. Dev command is `npm run dev`.

## Users

Two audiences use the same site.

People looking up the inaugural 2026 event: participants, speakers, judges, the HKU School of Governance and Policy, and anyone else who needs the public record.

HKU Master’s students who may enter a later edition and need to understand what the competition is.

## Product Purpose

HKMPC’s public website is the record of the inaugural Hong Kong Master Policy Competition and the place a future cohort learns what the competition asks of them. Success means a visitor can trust the published facts about 2026 and can tell whether a later edition is for them.

## Positioning

The inaugural competition is organised by the HKU Master of Governance and Policy Student Representatives, with the support of the HKU School of Governance and Policy. Teams of Master’s students write a policy brief to a Hong Kong Secretary and pitch it. The 2026 theme is Building Trust: Governing a Changing Hong Kong.

## Operating Context

The 2026 competition ran in person on Friday 6 and Saturday 7 November 2026, 13:00–19:00, at JCT705, The University of Hong Kong. Teams had 2 to 4 members. Each team chose one topic, submitted a one-page problem statement and a three-page policy brief, and pitched for five minutes with two minutes of questions.

Contact is hkmpc.hku@gmail.com. Updates are also posted at https://www.instagram.com/hkmpc.hku/. Source documents live in the organisers’ Google Drive folder “HKMPC 2026”.

## Capabilities and Constraints

The site explains the competition, the three topics, the schedule, the scoring, the people, and how to make contact. Pages are Home, The competition, Topics, People, and Contact.

Open, and not to be invented:

- Whether to publish 2026 winners, team names, or event photos. The guides do not name winners.
- Whether to offer a way to register interest in a later edition.

Prizes confirmed for 2026: HK$1,000 for first place, HK$500 for second place, shared among team members, and a certificate of participation for every team.

## Brand Commitments

The name is the Hong Kong Master Policy Competition (HKMPC). The mark is the gavel wordmark in `public/logo.png`. Use that file. Do not redraw it.

The organising committee named in the background guide is Bridget Chu, Anky Li, Julius Choy, Desmond Wong, and Floria Mak.

Public copy stays faithful to the 2026 Participants’ Guide and Background Guide.

## Evidence on Hand

- `lib/site.ts` holds the published 2026 facts.
- `public/logo.png` is the logo.
- Participants’ Guide and Background Guide in Google Drive are the source for rules, schedule, topics, prizes, and named speakers and judges.
- Workshop speakers named in the guide: Priscilla Gatonye (UNESCO-UNEVOC), Mika Noh (AI Culture Lab), Calum Handforth (UN Development Programme).
- Judges named in the guide: Ronald Young (Hong Kong Monetary Authority), Hideki Suzuki (Manulife Investment Management).

Do not fabricate winners, attendance, testimonials, or a registration count.

## Product Principles

- One site serves the 2026 record and a future cohort. Do not split them into two products.
- Publish a fact only when the guides or the organisers have confirmed it.
- The competition’s standard is a brief a Secretary could use. The site should not recast it as a generic student contest.
- Keep the Next.js app as the place pages and copy change.
