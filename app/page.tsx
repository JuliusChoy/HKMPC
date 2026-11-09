import Image from "next/image";
import Link from "next/link";
import { Skyline } from "@/components/skyline";
import { event, topics } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-8">
        <Image
          src="/logo.png"
          alt=""
          width={609}
          height={427}
          priority
          className="mx-auto h-32 w-auto md:h-40"
        />
        <div className="mt-8 grid overflow-hidden bg-navy text-paper md:grid-cols-[1.45fr_0.7fr]">
          <div className="px-6 py-10 md:px-12 md:py-14">
            <h1 className="max-w-xl text-balance font-serif text-4xl leading-[1.05] md:text-6xl">
              {event.theme}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-snug text-paper/90">
              Master’s students at HKU, in teams of 2–4. One policy brief on the 2026 Policy
              Address, then a pitch to the panel.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/80">
              {event.dates}, {event.hours}, {event.venue}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/competition"
                className="inline-flex min-h-11 items-center justify-center bg-paper px-5 py-3 text-sm font-semibold text-navy hover:bg-white"
              >
                Schedule and rules
              </Link>
              <Link
                href="/topics"
                className="inline-flex min-h-11 items-center justify-center border border-paper/40 px-5 py-3 text-sm font-semibold text-paper hover:border-paper"
              >
                Topics
              </Link>
            </div>
          </div>
          <div className="hidden items-end bg-navy px-4 pb-2 md:flex">
            <Skyline />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">Topics</h2>
          </div>
          <Link href="/topics" className="hidden text-sm font-semibold text-green md:inline">
            Read the background
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {topics.map((topic, index) => (
            <li key={topic.slug} className="border border-line bg-white">
              <Link href={`/topics#${topic.slug}`} className="block h-full p-6">
                <p className="font-serif text-3xl text-brown">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{topic.summary}</p>
                <p className="mt-4 text-sm text-green">Brief to the {topic.secretary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">Friday and Saturday</h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed">
              <li>Friday 17:45: one-page problem statement.</li>
              <li>Saturday 14:30: three-page brief, to the Secretary for that topic.</li>
              <li>Saturday from 16:00: 5-minute pitch, then 2 minutes of questions.</li>
            </ul>
          </div>
          <div className="border border-line bg-white p-6">
            <h3 className="font-serif text-2xl text-navy">Prizes</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>First: HK$1,000, shared by the team.</li>
              <li>Second: HK$500, shared by the team.</li>
              <li>Certificate of participation for every team.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="max-w-2xl font-serif text-3xl text-navy md:text-4xl">
          Workshops
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Priscilla Gatonye", "UNESCO-UNEVOC", "Workshop 1. Writing a policy brief"],
            ["Mika Noh", "AI Culture Lab", "Workshop 2. Stakeholders, cost, implementation"],
            ["Calum Handforth", "UN Development Programme", "Workshop 3. Pitching"],
          ].map(([name, org, session]) => (
            <li key={name} className="border-t-2 border-green pt-4">
              <h3 className="font-serif text-2xl text-navy">{name}</h3>
              <p className="mt-1 text-sm font-semibold text-green">{org}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{session}</p>
            </li>
          ))}
        </ul>
        <Link href="/people" className="mt-8 inline-block text-sm font-semibold text-green">
          Speakers, judges, committee
        </Link>
      </section>
    </>
  );
}
