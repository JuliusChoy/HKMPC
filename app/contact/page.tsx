import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { event } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and Instagram for the Hong Kong Master Policy Competition.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Write to the organising team."
        lede="The 2026 weekend has finished. Questions about certificates, prizes and the next edition still go to the same address."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2">
        <a href={`mailto:${event.email}`} className="block border border-line bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">Email</p>
          <p className="mt-3 font-serif text-3xl text-navy">{event.email}</p>
          <p className="mt-3 text-sm text-ink/70">Announcements during the weekend also went out by email.</p>
        </a>
        <a href={event.instagram} className="block bg-navy p-8 text-paper">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Instagram</p>
          <p className="mt-3 font-serif text-3xl">{event.instagramHandle}</p>
          <p className="mt-3 text-sm text-paper/75">Photos and updates from the inaugural edition.</p>
        </a>
        <section className="border border-line p-8 md:col-span-2">
          <h2 className="font-serif text-2xl text-navy">Where it was</h2>
          <p className="mt-3 text-base leading-relaxed">
            {event.venue}. {event.dates}, {event.hours}. In person. Registration for this edition
            closed on 4 November 2026 at 23:59.
          </p>
        </section>
      </div>
    </>
  );
}
