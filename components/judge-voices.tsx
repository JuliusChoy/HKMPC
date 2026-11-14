"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  judgeOrganisations,
  judgeQuoteSlides,
  type JudgeQuoteSlide,
} from "@/lib/site";

const CYCLE_MS = 5000;

function QuoteBody({ slide }: { slide: JudgeQuoteSlide }) {
  if (slide.paragraphs.length === 0) {
    return (
      <p className="font-serif text-lg italic leading-snug text-muted md:text-xl">
        Quote coming soon.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {slide.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="font-serif text-lg leading-snug text-ink md:text-xl"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function QuoteAttribution({ slide }: { slide: JudgeQuoteSlide }) {
  return (
    <footer className="mt-6 border-t border-line pt-4">
      <p className="font-serif text-base text-green md:text-lg">{slide.name}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{slide.role}</p>
    </footer>
  );
}

export function JudgeVoices() {
  const labelId = useId();
  const cycleRegionRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const paused = hoverPaused || focusPaused;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused || judgeQuoteSlides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % judgeQuoteSlides.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const active = judgeQuoteSlides[index] ?? judgeQuoteSlides[0];

  function syncFocusPaused(nextTarget: EventTarget | null) {
    const root = cycleRegionRef.current;
    if (!root) return;
    const next = nextTarget instanceof Node ? nextTarget : null;
    setFocusPaused(Boolean(next && root.contains(next)));
  }

  return (
    <section className="mt-12 border-t border-line pt-8" aria-labelledby={labelId}>
      <h2 id={labelId} className="font-serif text-xl text-green md:text-2xl">
        Judging organisations
      </h2>
      <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-x-12">
        {judgeOrganisations.map((org) => (
          <li key={org.name} className="flex items-center">
            <Image
              src={org.logo}
              alt={org.name}
              width={org.width}
              height={org.height}
              unoptimized
              className={`org-logo-muted w-auto object-contain object-left ${
                org.short === "UNDP"
                  ? "h-16 max-w-[3.25rem] md:h-[4.5rem] md:max-w-[3.75rem]"
                  : "h-8 max-w-[12rem] md:h-9 md:max-w-[14rem]"
              }`}
            />
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-line pt-8">
        <p className="text-sm font-semibold tracking-wide text-copper">
          From the panel
        </p>

        {reducedMotion ? (
          <ul className="mt-6 space-y-10">
            {judgeQuoteSlides.map((slide) => (
              <li key={slide.id}>
                <blockquote>
                  <QuoteBody slide={slide} />
                  <QuoteAttribution slide={slide} />
                </blockquote>
              </li>
            ))}
          </ul>
        ) : (
          <div
            ref={cycleRegionRef}
            className="mt-6"
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
            onFocusCapture={() => setFocusPaused(true)}
            onBlurCapture={(event) => syncFocusPaused(event.relatedTarget)}
          >
            <div className="overflow-hidden" aria-live="polite" aria-atomic="true">
              <div
                className="quote-swipe-track flex items-stretch"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {judgeQuoteSlides.map((slide, i) => (
                  <blockquote
                    key={slide.id}
                    className="w-full min-w-full shrink-0"
                    aria-hidden={i !== index}
                  >
                    <QuoteBody slide={slide} />
                    <QuoteAttribution slide={slide} />
                  </blockquote>
                ))}
              </div>
            </div>

            <div
              className="mt-6 flex items-center gap-1"
              role="tablist"
              aria-label="Judge quotes"
            >
              {judgeQuoteSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${slide.name}${slide.paragraphs.length === 0 ? " (quote coming soon)" : ""}`}
                  className="flex h-8 w-8 items-center justify-center"
                  onClick={() => setIndex(i)}
                >
                  <span
                    className={`block h-2 w-2 rounded-none transition-colors ${
                      i === index ? "bg-green" : "bg-line"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="sr-only" aria-live="polite">
          {paused ? "Quote rotation paused. " : ""}
          Showing {active.name}
          {active.paragraphs.length === 0 ? ", quote coming soon" : ""}.
        </p>
      </div>
    </section>
  );
}
