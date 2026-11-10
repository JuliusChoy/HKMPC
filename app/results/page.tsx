import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { event } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results",
  description: "Winners and media from HKMPC 2026 will appear here when available.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Results"
        lede={`Winners and media from ${event.short} ${event.year} will be published here after the competition. No results are listed yet.`}
      />
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-14">
        <section aria-labelledby="winners-heading">
          <h2 id="winners-heading" className="font-serif text-3xl text-green">
            Winners
          </h2>
          <div className="mt-6 border border-dashed border-line bg-paper-deep/40 px-6 py-12">
            <p className="max-w-xl text-base leading-relaxed text-muted">
              First and second place will be named here after the award ceremony on Saturday 7
              November. Team names and brief titles are not published until then.
            </p>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-t border-line pt-4">
                <dt className="text-sm font-semibold text-copper">First place</dt>
                <dd className="mt-2 font-serif text-xl text-muted">To be announced</dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm font-semibold text-copper">Second place</dt>
                <dd className="mt-2 font-serif text-xl text-muted">To be announced</dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="media-heading">
          <h2 id="media-heading" className="font-serif text-3xl text-green">
            Media
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Photographs and other media from the weekend will appear in this grid when assets are
            available. Placeholders only for now.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <li
                key={index}
                className="flex aspect-[4/3] items-center justify-center border border-dashed border-line bg-paper-deep/40 text-sm text-muted"
              >
                Media placeholder {index + 1}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
