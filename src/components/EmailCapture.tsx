"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect to email service (Mailchimp, ConvertKit, etc.) later
    setSubmitted(true);
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
            Join the first run.
          </h2>
          <p className="mt-4 text-lg text-charcoal-light">
            Be first to know when Steel Party Cups are available.
          </p>

          {submitted ? (
            <div className="mt-8 p-6 bg-cream rounded-sm">
              <p className="text-base font-medium text-charcoal">
                You&apos;re on the list.
              </p>
              <p className="mt-1 text-sm text-charcoal-light">
                We&apos;ll let you know when it&apos;s time to upgrade the party
                drawer.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 bg-warm-white border border-steel-light rounded-sm text-sm text-charcoal placeholder:text-steel focus:outline-none focus:border-charcoal transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-charcoal-light/60">
            No spam. Just launch updates.
          </p>
        </div>
      </div>
    </section>
  );
}
