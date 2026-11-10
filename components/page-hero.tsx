export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="mb-6 h-px w-16 bg-copper motion-rule" aria-hidden="true" />
        <h1 className="max-w-3xl text-balance font-serif text-3xl leading-[1.15] text-green md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </header>
  );
}
