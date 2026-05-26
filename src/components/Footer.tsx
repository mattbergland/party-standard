export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-semibold tracking-tight">
              Party Standard
            </p>
            <p className="mt-3 text-sm text-steel-light leading-relaxed">
              Better basics for having people over.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-steel-light mb-4">
              Shop
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#product" className="text-sm text-steel hover:text-warm-white transition-colors">
                  Steel Party Cups
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-sm text-steel hover:text-warm-white transition-colors">
                  12-Pack
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-sm text-steel hover:text-warm-white transition-colors">
                  24-Pack
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-sm text-steel hover:text-warm-white transition-colors">
                  48-Pack Event Pack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-steel-light mb-4">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#custom-orders" className="text-sm text-steel hover:text-warm-white transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-steel hover:text-warm-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:hello@partystandard.com" className="text-sm text-steel hover:text-warm-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-steel-light mb-4">
              Follow
            </p>
            <ul className="space-y-3">
              <li>
                {/* Update with real social links */}
                <a href="#" className="text-sm text-steel hover:text-warm-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-steel hover:text-warm-white transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-steel-dark/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel-dark">
            &copy; {new Date().getFullYear()} Party Standard. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {/* Link to real policy pages when available */}
            <a href="#" className="text-xs text-steel-dark hover:text-steel transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-steel-dark hover:text-steel transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
