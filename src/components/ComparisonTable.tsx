const rows = [
  { feature: "Usage", disposable: "Single-use", steel: "Reusable" },
  { feature: "Durability", disposable: "Flimsy", steel: "Event-grade durable" },
  { feature: "Repurchase", disposable: "Every party", steel: "Buy once" },
  { feature: "After the party", disposable: "Trash bag", steel: "Dishwasher" },
  { feature: "Look", disposable: "Cheap plastic", steel: "Brushed stainless" },
  { feature: "Storage", disposable: "Bulk bags", steel: "Compact stack" },
  { feature: "Ready to go", disposable: "Store run", steel: "Always in the drawer" },
];

export default function ComparisonTable() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
            Buy once. Party forever.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-charcoal/20">
                <th className="pb-4 pr-6 text-sm font-medium text-charcoal-light" />
                <th className="pb-4 px-6 text-sm font-semibold uppercase tracking-wide text-charcoal-light">
                  Disposable Cups
                </th>
                <th className="pb-4 pl-6 text-sm font-semibold uppercase tracking-wide text-charcoal">
                  Steel Party Cups
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-steel-light/60"
                >
                  <td className="py-4 pr-6 text-sm font-medium text-charcoal">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-sm text-charcoal-light">
                    <span className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-accent/60">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                      {row.disposable}
                    </span>
                  </td>
                  <td className="py-4 pl-6 text-sm font-medium text-charcoal">
                    <span className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-charcoal">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      {row.steel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#purchase"
            className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors"
          >
            Make the Switch
          </a>
        </div>
      </div>
    </section>
  );
}
