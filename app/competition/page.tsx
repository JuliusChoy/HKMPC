import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SignupButton } from "@/components/signup-button";
import { criteria, deliverables, event, friday, saturday } from "@/lib/site";

export const metadata: Metadata = {
  title: "The competition",
  description: "Rules, deliverables, judging and the two-day schedule for HKMPC 2026.",
};

function Day({ title, rows }: { title: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <section>
      <h3 className="font-serif text-2xl text-green">{title}</h3>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {rows.map(([time, session]) => (
          <li key={`${title}-${time}`} className="grid grid-cols-[5.5rem_1fr] gap-4 py-3 text-sm md:text-base">
            <time className="font-semibold tabular-nums text-copper">{time}</time>
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
        title="Write the brief. Then defend it."
        lede={`Teams of ${event.teamSize} choose one topic, name a single recommendation, and pitch it to the panel. Solo registrants are matched at the start of Friday.`}
      />
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-14">
        <div className="flex flex-wrap items-center gap-4">
          <SignupButton />
          <p className="text-sm text-muted">Registration opens via the Signup link (placeholder form).</p>
        </div>

        <section>
          <h2 className="font-serif text-3xl text-green">What each team submits</h2>
          <div className="mt-6 overflow-x-auto border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Deliverables and deadlines</caption>
              <thead className="bg-green text-paper">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Deliverable
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Format
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="bg-paper">
                {deliverables.map((item) => (
                  <tr key={item.name} className="border-t border-line align-top">
                    <th scope="row" className="px-4 py-4 font-serif text-lg font-medium text-green">
                      {item.name}
                    </th>
                    <td className="px-4 py-4">{item.format}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{item.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            A brief names one recommendation, who delivers it, what it costs, and how success is
            measured. Suggested structure: purpose, background, considerations, options,
            recommendation, next steps, references. Submissions go as PDF to {event.email}. Only the
            first submission counts.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-green">How the briefs are scored</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Judges read the briefs during the Saturday pitching workshop, then score the pitch and
            the questions. One hundred points in total.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {criteria.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 py-4 md:grid-cols-[12rem_4rem_1fr] md:items-baseline"
              >
                <h3 className="font-semibold text-ink">{item.name}</h3>
                <p className="font-serif text-2xl tabular-nums text-copper">{item.points}</p>
                <p className="text-sm text-muted">{item.look}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <Day title="Friday 6 November" rows={friday} />
          <Day title="Saturday 7 November" rows={saturday} />
        </section>

        <section className="grid gap-8 border-t border-line pt-10 md:grid-cols-3">
          <article>
            <h2 className="font-serif text-2xl text-green">Sources</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Any citation style is accepted. Every source must be cited. Plagiarism is not
              tolerated. Teams who use an AI tool declare what the tool drafted and what they
              changed.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-green">Conduct</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Harassment is not tolerated, in the room or in group chats. Anyone using offensive or
              hateful language may be removed. Concerns go to the organising team or to{" "}
              {event.email}.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-green">Attendance</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              All three workshops are mandatory and held in person at JCT705. Anyone who must miss a
              session writes to the organisers in advance. Mentors are in the room during the work
              blocks.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
