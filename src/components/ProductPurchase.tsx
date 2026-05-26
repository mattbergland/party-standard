"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function ProductPurchase() {
  const [selectedPack, setSelectedPack] = useState("12-pack");
  const [quantity, setQuantity] = useState(1);

  const selected = products.find((p) => p.id === selectedPack) ?? products[0];

  return (
    <section id="purchase" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-3">
            Shop
          </p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-charcoal">
            Upgrade the party drawer.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  setSelectedPack(product.id);
                  setQuantity(1);
                }}
                className={`relative p-6 rounded-sm border-2 text-left transition-all ${
                  selectedPack === product.id
                    ? "border-charcoal bg-cream"
                    : "border-steel-light/60 hover:border-steel"
                }`}
              >
                {product.badge && (
                  <span className="absolute -top-3 left-4 px-3 py-1 bg-charcoal text-warm-white text-xs font-semibold tracking-wide uppercase rounded-sm">
                    {product.badge}
                  </span>
                )}
                <p className="text-2xl font-semibold text-charcoal">
                  {product.packSize}-pack
                </p>
                <p className="mt-1 text-sm text-charcoal-light">
                  {product.perUnitPrice}/cup
                </p>
                <p className="mt-3 text-2xl font-semibold text-charcoal">
                  ${product.price}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-cream rounded-sm p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-8 items-start">
              <div>
                <div className="aspect-square bg-gradient-to-br from-steel-light/50 via-warm-white to-steel-light/30 rounded-sm flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: Math.min(selected.packSize / 4, 6) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-12 rounded-b-md border border-steel-dark/20 bg-gradient-to-b from-steel-light to-steel"
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-steel-dark">
                      {selected.packSize}-pack — photography placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal">
                  {selected.name}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
                  {selected.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs text-charcoal-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-charcoal"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <label htmlFor="purchase-quantity" className="text-sm font-medium text-charcoal">
                    Qty
                  </label>
                  <div className="flex items-center border border-steel-light rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-charcoal-light hover:text-charcoal transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm font-medium text-charcoal min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-charcoal-light hover:text-charcoal transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-3xl font-semibold text-charcoal">
                    ${selected.price * quantity}
                  </p>
                  {quantity > 1 && (
                    <p className="text-sm text-charcoal-light mt-1">
                      {quantity} x ${selected.price}
                    </p>
                  )}
                </div>

                {/* Add to Cart — connect to Shopify/Stripe later */}
                <button className="mt-6 w-full px-8 py-4 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors">
                  Add to Cart
                </button>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    "Secure checkout",
                    "Easy returns",
                    "Free shipping",
                  ].map((trust) => (
                    <span
                      key={trust}
                      className="inline-flex items-center gap-1.5 text-xs text-charcoal-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-steel-dark"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {trust}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs text-charcoal-light/70 italic">
                  First-run limited quantity. Ships within 5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
