import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { criteria, deliverables, friday, saturday } from "@/lib/site";

export const metadata: Metadata = {
  title: "The competition",
  description: "Rules, deliverables, judging and the two-day schedule for HKMPC 2026.",
};

function Day({ title, rows }: { title: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <section>
      <h3 className="font-serif text-2xl text-navy">{title}</h3>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {rows.map(([time, session]) => (
          <li key={time} className="grid grid-cols-[5.5rem_1fr] gap-4 py-3 text-sm md:text-base">
            <time className="font-semibold text-green">{time}</time>
            <span>{session}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function CompetitionPage() {
  return (
    <>
      <PageHero
        kicker="Format"
        title="Write the brief. Then defend it."
        lede="Teams of two to four chose one topic, named a single recommendation, and pitched it to the panel. Solo registrants were matched at the start of Friday."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14">
        <section>
          <h2 className="font-serif text-3xl text-navy">What each team submitted</h2>
          <div className="mt-6 overflow-x-auto border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Deliverables and deadlines</caption>
              <thead className="bg-navy text-paper">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Deliverable</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Format</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item) => (
                  <tr key={item.name} className="border-t border-line align-top">
                    <th scope="row" className="px-4 py-4 font-serif text-lg font-medium text-navy">
                      {item.name}
                    </th>
                    <td className="px-4 py-4">{item.format}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{item.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75">
            A brief names one recommendation, who delivers it, what it costs, and how success is
            measured. Suggested structure: purpose, background, considerations, options,
            recommendation, next steps, references. Submissions went as PDF to hkmpc.hku@gmail.com.
            Only the first submission counted.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-navy">How the briefs were scored</h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            Judges read the briefs during the Saturday pitching workshop, then scored the pitch and
            the questions. One hundred points in total.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {criteria.map((item) => (
              <li key={item.name} className="grid gap-2 py-4 md:grid-cols-[12rem_4rem_1fr] md:items-baseline">
                <h3 className="font-semibold text-navy">{item.name}</h3>
                <p className="font-serif text-2xl text-green">{item.points}</p>
                <p className="text-sm text-ink/75">{item.look}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <Day title="Friday 6 November" rows={friday} />
          <Day title="Saturday 7 November" rows={saturday} />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="border border-line bg-white p-6">
            <h2 className="font-serif text-2xl text-navy">Sources</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Any citation style was accepted. Every source had to be cited. Plagiarism was not
              tolerated. Teams who used an AI tool declared what the tool drafted and what they
              changed.
            </p>
          </article>
          <article className="border border-line bg-white p-6">
            <h2 className="font-serif text-2xl text-navy">Conduct</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Harassment was not tolerated, in the room or in group chats. Anyone using offensive
              or hateful language could be removed. Concerns went to the organising team or to
              hkmpc.hku@gmail.com.
            </p>
          </article>
          <article className="border border-line bg-white p-6">
            <h2 className="font-serif text-2xl text-navy">Attendance</h2>
            <p className="mt-3 text-sm leading-relaxed">
              All three workshops were mandatory and held in person at JCT705. Anyone who had to
              miss a session wrote to the organisers in advance. Mentors were in the room during
              the work blocks.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
