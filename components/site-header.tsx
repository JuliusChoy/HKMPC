"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { event, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-3">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${event.name} logo`}
            width={790}
            height={478}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.8125rem] font-semibold tracking-wide underline-offset-8 ${
                  active
                    ? "text-green underline decoration-copper decoration-2"
                    : "text-ink hover:text-green"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="min-h-11 border border-green/25 px-4 text-sm font-semibold text-green lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 lg:hidden" aria-label="Primary">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-base font-semibold ${active ? "text-green" : "text-ink"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
