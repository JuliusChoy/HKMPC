import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { event, judges, workshops, type PersonProfile } from "@/lib/site";

export const metadata: Metadata = {
  title: "People",
  description:
    "Judging panel, workshop leads and the HKMPC 2026 organising committee.",
};

function JudgePanel({ person }: { person: PersonProfile }) {
  return (
    <li className="border-b border-line py-8 last:border-b-0 md:border-b-0 md:border-l md:border-line md:px-6 md:py-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
      <div className="relative mx-auto aspect-[4/5] w-40 overflow-hidden bg-paper-deep md:mx-0 md:w-full md:max-w-[13rem]">
        <Image
          src={person.image}
          alt=""
          fill
          sizes="(max-width: 768px) 160px, 208px"
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl text-ink">{person.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{person.role}</p>
      {person.bio?.map((paragraph, index) => (
        <p key={index} className="mt-4 text-sm leading-relaxed text-ink">
          {paragraph}
        </p>
      ))}
    </li>
  );
}

function PersonRow({ person }: { person: PersonProfile }) {
  return (
    <li className="grid gap-5 border-b border-line py-8 first:border-t md:grid-cols-[12rem_1fr] md:gap-10 md:py-10">
      <div className="relative aspect-[4/5] w-40 overflow-hidden bg-paper-deep md:w-44">
        <Image
          src={person.image}
          alt=""
          fill
          sizes="(max-width: 768px) 160px, 176px"
          className="object-cover object-top"
        />
      </div>
      <div className="min-w-0 self-center">
        <h3 className="font-serif text-2xl text-ink md:text-3xl">{person.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{person.role}</p>
        {person.session ? (
          <p className="mt-2 text-sm text-green md:text-base">{person.session}</p>
        ) : null}
        {person.focus ? (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink md:text-base">
            {person.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="Judges, workshop leads, and the organising committee."
        lede="The panel who scored the briefs and pitches. Workshops are led by practitioners. The weekend is run by the Master of Governance and Policy Student Representatives."
      />
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-14">
        <section>
          <h2 className="font-serif text-3xl text-green">Judging panel</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            The panel read the briefs, then scored the pitches and the questions.
          </p>
          <ul className="mt-8 grid border-y border-line md:grid-cols-3">
            {judges.map((person) => (
              <JudgePanel key={`judge-${person.name}`} person={person} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-green">Workshop leads</h2>
          <ul className="mt-6">
            {workshops.map((person) => (
              <PersonRow key={`workshop-${person.name}`} person={person} />
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
