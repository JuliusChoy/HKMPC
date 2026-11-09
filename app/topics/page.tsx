import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Topics",
  description: "The three HKMPC 2026 topics, each tied to the 2026 Policy Address and the First Five-Year Plan.",
};

export default function TopicsPage() {
  return (
    <>
      <PageHero
        title="The three topics"
        lede="Each one follows the 2026 Policy Address and the First Five-Year Plan (2026–2030). The questions are starters. Teams could go further."
      />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <ol className="space-y-16">
          {topics.map((topic, index) => (
            <li key={topic.slug} id={topic.slug} className="scroll-mt-24 border-t border-line pt-10">
              <p className="font-serif text-3xl text-brown">0{index + 1}</p>
              <h2 className="mt-2 font-serif text-4xl text-navy">{topic.title}</h2>
              <p className="mt-2 text-sm font-semibold text-green">Brief to the {topic.secretary}</p>
              <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-4 text-base leading-relaxed">
                  {topic.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <aside className="h-fit bg-navy p-6 text-paper">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Questions to start from
                  </p>
                  <ul className="mt-4 space-y-4 text-sm leading-relaxed">
                    {topic.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </aside>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
