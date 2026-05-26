export default function FounderStory() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="aspect-square bg-cream rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-steel-light/60 border-2 border-steel/30" />
                <p className="mt-3 text-xs text-steel-dark">Founder photo</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-3">
                The Story
              </p>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-charcoal">
                Better basics deserve more respect.
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Party Standard was started by an event organizer who believes
                  the basics deserve more respect. After years of producing
                  gatherings of every size, I learned that small details do a lot
                  of work. The right cup, the right flow, the right setup — it
                  all adds up.
                </p>
                <p>
                  Steel Party Cups are our first better basic. A simple product
                  that replaces something disposable with something permanent.
                  Not because the planet needs another guilt trip, but because a
                  good host shouldn&apos;t have to settle for flimsy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
