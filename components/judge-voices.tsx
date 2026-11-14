"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  judgeOrganisations,
  judgeQuoteSlides,
  type JudgeQuoteSlide,
} from "@/lib/site";

const CYCLE_MS = 7000;

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
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const paused = userPaused || hoverPaused || focusPaused;

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
      <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted md:flex-row md:flex-wrap md:items-baseline md:gap-x-0 md:gap-y-2 md:text-base">
        {judgeOrganisations.map((name, i) => (
          <li key={name} className="md:inline">
            <span className="text-ink">{name}</span>
            {i < judgeOrganisations.length - 1 ? (
              <span className="hidden text-line md:inline" aria-hidden="true">
                {" · "}
              </span>
            ) : null}
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
            className="mt-4"
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
            onFocusCapture={() => setFocusPaused(true)}
            onBlurCapture={(event) => syncFocusPaused(event.relatedTarget)}
          >
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                className="min-h-10 border border-line px-3 text-sm font-semibold text-green transition-colors hover:border-green hover:bg-paper-deep"
                aria-pressed={userPaused}
                onClick={() => setUserPaused((current) => !current)}
              >
                {userPaused ? "Resume quotes" : "Pause quotes"}
              </button>
            </div>

            <div className="mt-4 grid" aria-live="polite" aria-atomic="true">
              {judgeQuoteSlides.map((slide, i) => {
                const isActive = i === index;
                return (
                  <blockquote
                    key={slide.id}
                    className={`col-start-1 row-start-1 quote-fade ${
                      isActive ? "quote-fade-active" : "pointer-events-none"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <QuoteBody slide={slide} />
                    <QuoteAttribution slide={slide} />
                  </blockquote>
                );
              })}
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
