import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SignupButton } from "@/components/signup-button";
import { event } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and Instagram for the Hong Kong Master Policy Competition.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Write to the organising team."
        lede="Questions about the competition, Signup, or the weekend go to the same address."
      />
      <div className="mx-auto max-w-5xl space-y-10 px-5 py-14">
        <div className="flex flex-wrap items-center gap-4">
          <SignupButton />
          <p className="text-sm text-muted">Signup uses a placeholder form URL for now.</p>
        </div>

        <div className="grid gap-8 border-y border-line py-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-green">Email</h2>
            <a
              href={`mailto:${event.email}`}
              className="mt-3 inline-block font-serif text-2xl text-ink underline-offset-4 hover:text-green hover:underline md:text-3xl"
            >
              {event.email}
            </a>
            <p className="mt-3 text-sm text-muted">
              Announcements during the weekend also go out by email.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-green">Instagram</h2>
            <a
              href={event.instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="mt-3 inline-block font-serif text-2xl text-ink underline-offset-4 hover:text-green hover:underline md:text-3xl"
            >
              {event.instagramHandle}
            </a>
            <p className="mt-3 text-sm text-muted">Updates from the organising team.</p>
          </div>
        </div>

        <section>
          <h2 className="font-serif text-2xl text-green">Venue</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">
            {event.venue}. {event.dates}, {event.hours}. In person.
          </p>
        </section>
      </div>
    </>
  );
}
