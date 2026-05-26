# Party Standard

**Better basics for having people over.**

Party Standard is a high-converting ecommerce landing page for Steel Party Cups — reusable, stackable, raw stainless steel party cups designed to replace disposable red party cups.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body) + DM Serif Display (headings) via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, SEO
│   ├── page.tsx            # Main landing page (assembles all sections)
│   └── globals.css         # Design tokens and global styles
├── components/
│   ├── Header.tsx          # Sticky header with nav and cart
│   ├── Hero.tsx            # Hero section with headline, CTAs, trust badges
│   ├── Problem.tsx         # Problem/pain point section
│   ├── Benefits.tsx        # Product benefits grid
│   ├── ProductDetail.tsx   # Product specs and detail view
│   ├── UseCases.tsx        # Use cases grid
│   ├── PartyDrawer.tsx     # "Built for the party drawer" section
│   ├── ProductPurchase.tsx # Pack selector, quantity, add-to-cart
│   ├── FounderStory.tsx    # Founder story section
│   ├── ComparisonTable.tsx # Disposable vs Steel comparison
│   ├── CustomOrders.tsx    # Custom/event order inquiry form
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── EmailCapture.tsx    # Email signup for early access
│   ├── Footer.tsx          # Footer with links
│   └── StickyCart.tsx      # Mobile sticky add-to-cart bar
└── lib/
    └── products.ts         # Product data, specs, FAQs
```

## Updating Content

### Product Data & Pricing
Edit `src/lib/products.ts` to update:
- Product names, descriptions, pricing
- Pack sizes and per-unit pricing
- Product specifications
- FAQ questions and answers

### Copy & Messaging
Each component contains its own copy. Edit the component files directly to update headlines, descriptions, and CTAs.

### Design Tokens
Edit `src/app/globals.css` to update the color palette and font variables defined in the `@theme inline` block.

## Commerce Integration

The site is structured to connect to Shopify, Stripe, or another commerce backend. Key integration points:

- **`ProductPurchase.tsx`** — "Add to Cart" button handler (currently a placeholder)
- **`Header.tsx`** — Cart button and cart count
- **`StickyCart.tsx`** — Mobile sticky cart bar
- **`CustomOrders.tsx`** — Form submission (connect to email service or CRM)
- **`EmailCapture.tsx`** — Email signup (connect to Mailchimp, ConvertKit, etc.)

Search for comments containing "connect to" or "later" to find all integration points.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `warm-white` | `#FAF9F6` | Background |
| `cream` | `#F5F3EE` | Section backgrounds |
| `charcoal` | `#2C2C2C` | Primary text, buttons |
| `charcoal-light` | `#4A4A4A` | Secondary text |
| `steel` | `#B8B8B8` | Stainless steel accent |
| `kraft` | `#C4A77D` | Packaging accent, labels |
| `red-accent` | `#C0392B` | Subtle red nod (used sparingly) |

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```
