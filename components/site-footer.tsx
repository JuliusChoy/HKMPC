import Image from "next/image";
import Link from "next/link";
import { event, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.png"
            alt=""
            width={954}
            height={668}
            className="h-16 w-auto bg-paper px-3 py-2"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/80">
            {event.name}, {event.year}. Organised by the {event.organisers}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href={`mailto:${event.email}`}>
                {event.email}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={event.instagram}>
                {event.instagramHandle}
              </a>
            </li>
            <li className="text-paper/70">{event.venue}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
