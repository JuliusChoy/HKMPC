import Image from "next/image";
import Link from "next/link";
import { event, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-navy bg-paper text-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt="" width={609} height={427} className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/80">
            {event.name}, {event.year}. Organised by the {event.organisers}.
          </p>
        </div>
        <div>
          <p className="font-serif text-xl">Pages</p>
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
          <p className="font-serif text-xl">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="underline-offset-4 hover:text-green hover:underline" href={`mailto:${event.email}`}>
                {event.email}
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:text-green hover:underline" href={event.instagram}>
                {event.instagramHandle}
              </a>
            </li>
            <li className="text-ink/75">{event.venue}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
