const useCases = [
  {
    title: "House Parties",
    description: "The stack you pull out when people text \"on my way.\"",
    emoji: "house",
  },
  {
    title: "BBQs",
    description: "Backyard grilling deserves better than a red solo cup.",
    emoji: "grill",
  },
  {
    title: "Weddings",
    description: "Cocktail hour, welcome drinks, rehearsal dinners. A clean look for the big day.",
    emoji: "rings",
  },
  {
    title: "Tailgates",
    description: "Pack them in the cooler. Rinse them in the parking lot. Use them again next week.",
    emoji: "truck",
  },
  {
    title: "Offsites",
    description: "Team happy hours that don't produce a trash bag full of plastic.",
    emoji: "building",
  },
  {
    title: "Golf Trips",
    description: "Cart-friendly, crush-proof, and better looking than foam.",
    emoji: "golf",
  },
  {
    title: "Airbnbs",
    description: "Stock the kitchen once. Stop buying disposables for every guest turnover.",
    emoji: "key",
  },
  {
    title: "Office Happy Hours",
    description: "Ditch the sad plastic cups in the break room. Keep a stack in the cabinet.",
    emoji: "office",
  },
  {
    title: "Backyard Dinners",
    description: "Set a nice table without worrying about breaking the nice glasses.",
    emoji: "garden",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-3">
            Use Cases
          </p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
            For every reason people come over.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group p-6 rounded-sm border border-steel-light/60 hover:border-kraft/40 hover:bg-cream/50 transition-all"
            >
              <div className="w-10 h-10 rounded-sm bg-cream flex items-center justify-center mb-4 group-hover:bg-kraft-light transition-colors">
                <div className="w-4 h-4 rounded-full bg-steel-dark/30" />
              </div>
              <h3 className="text-base font-semibold text-charcoal">
                {uc.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
