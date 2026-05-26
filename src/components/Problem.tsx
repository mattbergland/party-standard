export default function Problem() {
  const painPoints = [
    { label: "Flimsy", description: "Crushed halfway through the night" },
    { label: "Wasteful", description: "One party, one trash bag" },
    { label: "Ugly", description: "Red plastic on the table. Every time." },
    { label: "Rebuy", description: "Back to the store before every gathering" },
  ];

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal">
            The disposable party stack had a good run.
          </h2>
          <p className="mt-6 text-lg text-charcoal-light leading-relaxed">
            Disposable party cups are convenient. They&apos;re also flimsy,
            wasteful, ugly, and always something you have to rebuy. You deserve
            a permanent replacement.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.label}
              className="bg-warm-white p-6 rounded-sm border border-steel-light/60"
            >
              <div className="w-10 h-10 rounded-full bg-red-accent-light flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-red-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                {point.label}
              </h3>
              <p className="mt-2 text-sm text-charcoal-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-warm-white rounded-sm border border-steel-light/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-charcoal"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
            <span className="text-sm font-medium text-charcoal">
              Replace them once. Keep the stack forever.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
