import Image from "next/image";
import Link from "next/link";
import { SignupButton } from "@/components/signup-button";
import { event, topics } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:pt-14">
      <article className="border border-line bg-paper px-6 py-10 shadow-[0_1px_0_rgba(26,67,54,0.06)] md:px-12 md:py-14">
        <div className="motion-notice flex flex-col items-start gap-6">
          <Image
            src="/logo.png"
            alt={`${event.name} logo`}
            width={790}
            height={478}
            priority
            className="h-20 w-auto md:h-24"
          />
          <div className="w-full">
            <p className="max-w-3xl text-balance font-serif text-xl leading-snug text-green md:text-2xl">
              Hong Kong Masters Policy Competition 2026
            </p>
            <div className="mt-4 h-px w-full bg-green motion-rule" aria-hidden="true" />
            <h1 className="mt-6 max-w-3xl text-balance font-serif text-3xl leading-[1.2] text-green md:text-5xl">
              {event.theme}
            </h1>
          </div>
        </div>

        <div className="motion-rise mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink md:text-lg">
          <p>
            Notice is hereby given of the inaugural {event.name}. {event.audience} write a policy
            brief to a Hong Kong Secretary and pitch it over two afternoons.
          </p>
          <p className="text-muted">
            <span className="font-semibold text-ink">{event.dates}</span>
            {", "}
            {event.hours}
            {", "}
            {event.venue}. Teams of {event.teamSize}.
          </p>
        </div>

        <div className="motion-rise mt-10 flex flex-wrap items-center gap-4">
          <SignupButton />
          <Link
            href="/competition"
            className="inline-flex min-h-12 items-center text-sm font-semibold text-green underline-offset-4 hover:underline"
          >
            Read the competition rules
          </Link>
        </div>

        <section className="mt-14 border-t border-line pt-10" aria-labelledby="topics-preview">
          <h2 id="topics-preview" className="font-serif text-2xl text-green md:text-3xl">
            Topics for {event.year}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Each team chooses one topic, tied to the 2026 Policy Address and the First Five-Year
            Plan.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/topics#${topic.slug}`}
                  className="group flex flex-col gap-1 py-5 transition-colors hover:bg-paper-deep/60 md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="font-serif text-xl text-ink group-hover:text-green md:text-2xl">
                    {topic.title}
                  </span>
                  <span className="shrink-0 text-sm text-muted">
                    Brief to the {topic.secretary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl text-green">What teams do</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink md:text-base">
              <li>Submit a one-page problem statement and a three-page policy brief.</li>
              <li>Pitch for five minutes, then take two minutes of questions.</li>
              <li>Address one recommendation to a Hong Kong Secretary.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl text-green">Prizes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink md:text-base">
              <li>First place: {event.prizes.first}.</li>
              <li>Second place: {event.prizes.second}.</li>
              <li>{event.prizes.participation}.</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
