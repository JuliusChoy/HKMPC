export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] text-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{lede}</p>
      </div>
    </header>
  );
}
