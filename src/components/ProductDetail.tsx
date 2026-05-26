import { productSpecs } from "@/lib/products";

export default function ProductDetail() {
  return (
    <section id="product" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="aspect-[4/5] bg-gradient-to-br from-steel-light/50 via-warm-white to-steel-light/30 rounded-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-36 h-48 mx-auto border-2 border-steel-dark/20 rounded-b-lg bg-gradient-to-b from-steel-light to-steel relative">
                  <div className="absolute top-0 left-0 right-0 h-3 bg-steel-dark/10 rounded-t-sm" />
                  <div className="absolute top-1/3 left-3 right-3 h-px bg-steel-dark/10" />
                  <div className="absolute top-2/3 left-3 right-3 h-px bg-steel-dark/10" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-steel-dark/40 font-medium">
                    PS
                  </div>
                </div>
                <p className="mt-4 text-xs text-steel-dark">
                  Single cup detail — product photography placeholder
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-3">
              Product Specs
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
              Steel Party Cups
            </h2>
            <p className="mt-4 text-lg text-charcoal-light leading-relaxed">
              16 oz single-wall stainless steel. Raw brushed finish. Smooth
              rolled rim. No paint, no plastic, no lid. Just a better party cup.
            </p>

            <div className="mt-8 divide-y divide-steel-light/60">
              {productSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between py-3 text-sm"
                >
                  <span className="text-charcoal-light">{spec.label}</span>
                  <span className="font-medium text-charcoal text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#purchase"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors"
              >
                Shop the 12-Pack — $79
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
