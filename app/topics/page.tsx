import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "The three HKMPC 2026 topics, each tied to the 2026 Policy Address and the First Five-Year Plan.",
};

export default function TopicsPage() {
  return (
    <>
      <PageHero
        title="What would make the public trust this policy enough for it to work?"
        lede="Each topic is tied to a commitment in the 2026 Policy Address and Hong Kong’s First Five-Year Plan (2026 to 2030). Teams may go beyond the questions in the guide. This page is a short version of the background they receive."
      />
      <div className="mx-auto max-w-5xl px-5 py-14">
        <ol className="space-y-16">
          {topics.map((topic) => (
            <li key={topic.slug} id={topic.slug} className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-serif text-3xl text-green md:text-4xl">{topic.title}</h2>
              <p className="mt-2 text-sm font-semibold text-copper">
                Brief to the {topic.secretary}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{topic.summary}</p>
              <div className="mt-8 grid gap-10 md:grid-cols-[1.45fr_0.9fr]">
                <div className="space-y-4 text-base leading-relaxed">
                  {topic.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <aside className="h-fit border border-line bg-paper-deep/70 p-6">
                  <h3 className="font-serif text-xl text-green">Questions to start from</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink">
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
