export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-charcoal leading-[1.1]">
              The party cup,
              <br />
              made permanent.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-charcoal-light leading-relaxed">
              Stackable stainless steel party cups built to replace the
              disposable stack in your cabinet. Made for house parties, BBQs,
              weddings, tailgates, offsites, and every &ldquo;just a few people
              over&rdquo; that turns into a party.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#purchase"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors"
              >
                Shop the 12-Pack
              </a>
              <a
                href="#why-steel"
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal hover:text-warm-white transition-colors"
              >
                See Why Steel
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "12-pack",
                "Raw stainless steel",
                "Stackable",
                "Dishwasher-safe",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-charcoal-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-steel-dark" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-steel-light/60 via-cream to-steel-light/30 rounded-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-48 h-64 mx-auto relative">
                  {/* Stacked cups illustration placeholder */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 w-32 h-40 rounded-b-lg border-2 border-steel-dark/30 bg-gradient-to-b from-steel-light to-steel"
                      style={{
                        bottom: `${i * 12}px`,
                        zIndex: 3 - i,
                        opacity: 1 - i * 0.15,
                        transform: `translateX(-50%) scale(${1 - i * 0.03})`,
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-3 bg-steel-dark/10 rounded-t-sm" />
                      <div className="absolute top-1/2 left-2 right-2 h-px bg-steel-dark/10" />
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-charcoal-light tracking-wide uppercase">
                  Steel Party Cups
                </p>
                <p className="text-xs text-steel-dark mt-1">
                  Product photography placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
