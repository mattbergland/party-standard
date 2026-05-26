"use client";

import { useState } from "react";

export default function CustomOrders() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect to backend/email service later
    setSubmitted(true);
  }

  return (
    <section id="custom-orders" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-3">
              Custom &amp; Event Orders
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
              Need cups for an event?
            </h2>
            <p className="mt-4 text-lg text-charcoal-light leading-relaxed">
              Weddings, offsites, golf trips, tailgates, office happy hours, and
              custom host gifts. Tell us what you&apos;re planning and
              we&apos;ll help build the right pack.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Weddings",
                "Corporate Offsites",
                "Golf Trips",
                "Tailgates",
                "Airbnbs",
                "Host Gifts",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs border border-steel-light rounded-sm text-charcoal-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cream rounded-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-kraft-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-kraft">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  Request received.
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal placeholder:text-steel focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal placeholder:text-steel focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-charcoal mb-1.5">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    name="event-type"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Offsite</option>
                    <option value="golf">Golf Trip</option>
                    <option value="tailgate">Tailgate</option>
                    <option value="airbnb">Airbnb / Hospitality</option>
                    <option value="gift">Host Gift</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-charcoal mb-1.5">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal placeholder:text-steel focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="e.g. 100 cups"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1.5">
                    Date Needed
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-charcoal mb-1.5">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="w-full px-4 py-3 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal placeholder:text-steel focus:outline-none focus:border-charcoal transition-colors resize-none"
                    placeholder="Anything else we should know?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors"
                >
                  Request Custom Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
