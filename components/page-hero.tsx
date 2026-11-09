export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] text-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{lede}</p>
      </div>
    </header>
  );
}
