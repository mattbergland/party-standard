export default function PartyDrawer() {
  return (
    <section className="bg-charcoal text-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
              Built for the party drawer.
            </h2>
            <p className="mt-6 text-lg text-steel-light leading-relaxed">
              Keep a stack ready for the next birthday, BBQ, game day, dinner
              party, or &ldquo;come over&rdquo; text. Steel Party Cups are the
              reusable default you reach for every time people show up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Birthdays",
                "BBQs",
                "Game day",
                "Dinner parties",
                "Last-minute hangs",
                "Holiday gatherings",
              ].map((occasion) => (
                <span
                  key={occasion}
                  className="px-4 py-2 text-sm border border-steel-dark/40 rounded-sm text-steel-light"
                >
                  {occasion}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="#purchase"
                className="inline-flex items-center justify-center px-8 py-4 bg-warm-white text-charcoal text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-cream transition-colors"
              >
                Stock the Drawer — $79
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-charcoal-light/50 rounded-sm flex items-center justify-center border border-steel-dark/20">
              <div className="text-center p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-20 mx-auto rounded-b-md border border-steel-dark/30 bg-gradient-to-b from-steel-dark/40 to-steel-dark/20"
                    />
                  ))}
                </div>
                <p className="text-xs text-steel-dark tracking-wide uppercase">
                  The party drawer — photography placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
