import Image from "next/image";
import Link from "next/link";
import { event, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-green bg-paper-deep text-ink">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt="" width={790} height={478} className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {event.name}, {event.year}. Organised by the {event.organisers}.
          </p>
        </div>
        <div>
          <p className="font-serif text-lg text-green">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:text-green hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-serif text-lg text-green">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="underline-offset-4 hover:text-green hover:underline" href={`mailto:${event.email}`}>
                {event.email}
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:text-green hover:underline"
                href={event.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                {event.instagramHandle}
              </a>
            </li>
            <li className="text-muted">{event.venue}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
