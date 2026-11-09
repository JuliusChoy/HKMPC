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
        title="The room around the teams."
        lede="Workshops were led by practitioners. Judges scored the briefs and the pitches. The weekend was run by the Master of Governance and Policy Student Representatives."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14">
        <section>
          <h2 className="font-serif text-3xl text-navy">Workshop speakers</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {workshops.map((person) => (
              <li key={person.name} className="border border-line bg-white p-6">
                <h3 className="font-serif text-2xl text-navy">{person.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{person.role}</p>
                <p className="mt-4 text-sm text-green">{person.session}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-navy">Judges</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            The participants’ guide names these members of the panel. They read the briefs, then
            scored the pitches and the questions.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {judges.map((person) => (
              <li key={person.name} className="border border-line bg-white px-5 py-4">
                <h3 className="font-serif text-2xl text-navy">{person.name}</h3>
                <p className="mt-1 text-sm text-ink/75">{person.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-navy px-6 py-10 text-paper md:px-10">
          <h2 className="font-serif text-3xl">Organising committee</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/80">{event.organisers}.</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-serif text-2xl">
            {event.committee.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
