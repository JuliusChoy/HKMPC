import Image from "next/image";
import Link from "next/link";
import { Skyline } from "@/components/skyline";
import { event, topics } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-green">
          Inaugural edition
        </p>
        <Image
          src="/logo.png"
          alt="HKMPC logo"
          width={954}
          height={668}
          priority
          className="mx-auto mt-4 h-28 w-auto md:h-36"
        />
        <div className="mt-6 grid overflow-hidden bg-navy text-paper md:grid-cols-[1.45fr_0.7fr]">
          <div className="px-6 py-10 md:px-12 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {event.dates} · {event.venue}
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] md:text-7xl">
              Hong Kong Master Policy Competition
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-snug text-paper/90">{event.theme}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-paper/70">
              Open to all {event.audience}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/competition"
                className="inline-flex items-center justify-center bg-paper px-5 py-3 text-sm font-semibold text-navy"
              >
                How the weekend worked
              </Link>
              <Link
                href="/topics"
                className="inline-flex items-center justify-center border border-paper/40 px-5 py-3 text-sm font-semibold text-paper"
              >
                The three topics
              </Link>
            </div>
          </div>
          <div className="hidden items-end bg-navy px-4 pb-2 md:flex">
            <Skyline />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-ink/70">
          Held {event.dates}, {event.hours}. The {event.year} edition has concluded.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brown">This year’s question</p>
            <h2 className="mt-2 font-serif text-3xl text-navy md:text-4xl">Three briefs. One theme.</h2>
          </div>
          <Link href="/topics" className="hidden text-sm font-semibold text-green md:inline">
            Read the background
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {topics.map((topic, index) => (
            <li key={topic.slug} className="border border-line bg-white">
              <Link href={`/topics#${topic.slug}`} className="block h-full p-6">
                <p className="font-serif text-3xl text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{topic.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-green">
                  Brief to the {topic.secretary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brown">Why teams came</p>
            <h2 className="mt-2 font-serif text-3xl text-navy md:text-4xl">
              Two afternoons, from a problem to a pitch.
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed">
              <li>Learn directly from people who write and judge policy for a living.</li>
              <li>Work with mentors while the brief is still being written.</li>
              <li>Address one recommendation to a Hong Kong Secretary, tied to the 2026 Policy Address.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="bg-navy p-6 text-paper">
              <p className="font-serif text-4xl">HK$1,000</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-gold">First place</p>
              <p className="mt-3 text-sm text-paper/75">Shared among the team.</p>
            </article>
            <article className="border border-line p-6">
              <p className="font-serif text-4xl text-navy">HK$500</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-green">Second place</p>
              <p className="mt-3 text-sm text-ink/70">Every team received a certificate.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brown">Workshops</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
          Featuring policy workshops from practitioners.
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Priscilla Gatonye", "UNESCO-UNEVOC", "Writing a brief a Secretary can use"],
            ["Mika Noh", "AI Culture Lab", "Stakeholders, cost and implementation"],
            ["Calum Handforth", "UN Development Programme", "Pitching policy to decision makers"],
          ].map(([name, org, session]) => (
            <li key={name} className="border-t-2 border-green pt-4">
              <h3 className="font-serif text-2xl text-navy">{name}</h3>
              <p className="mt-1 text-sm font-semibold text-green">{org}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{session}</p>
            </li>
          ))}
        </ul>
        <Link href="/people" className="mt-8 inline-block text-sm font-semibold text-green">
          Speakers, judges and the committee
        </Link>
      </section>
    </>
  );
}
