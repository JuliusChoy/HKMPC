import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { event, judges, workshops } from "@/lib/site";

export const metadata: Metadata = {
  title: "People",
  description: "Workshop speakers, judges and the HKMPC 2026 organising committee.",
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="Speakers, judges, and the organising committee."
        lede="Workshops are led by practitioners. Judges score the briefs and the pitches. The weekend is run by the Master of Governance and Policy Student Representatives."
      />
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-14">
        <section>
          <h2 className="font-serif text-3xl text-green">Workshop speakers</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {workshops.map((person) => (
              <li key={person.name} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-ink">{person.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{person.role}</p>
                </div>
                <p className="self-center text-sm text-green md:text-base">{person.session}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-green">Judges</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            The participants’ guide names these members of the panel. They read the briefs, then
            score the pitches and the questions.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {judges.map((person) => (
              <li key={person.name} className="py-5">
                <h3 className="font-serif text-2xl text-ink">{person.name}</h3>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-green bg-green px-6 py-10 text-paper md:px-10">
          <h2 className="font-serif text-3xl">Organising committee</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/85">{event.organisers}.</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-serif text-xl md:text-2xl">
            {event.committee.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
