export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  packSize: number;
  perUnitPrice: string;
  badge?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "12-pack",
    name: "Steel Party Cups — 12-Pack",
    description:
      "12 reusable stainless steel party cups. Enough for the cabinet, the cooler, or the first wave of guests.",
    price: 79,
    packSize: 12,
    perUnitPrice: "$6.58",
    badge: "Most Popular",
    features: [
      "Free shipping",
      "Dishwasher-safe",
      "Stackable",
      "Raw stainless steel",
    ],
  },
  {
    id: "24-pack",
    name: "Steel Party Cups — 24-Pack",
    description:
      "24 cups for the full party rotation. Cover every seat at the table and still have extras.",
    price: 139,
    packSize: 24,
    perUnitPrice: "$5.79",
    features: [
      "Free shipping",
      "Dishwasher-safe",
      "Stackable",
      "Raw stainless steel",
    ],
  },
  {
    id: "48-pack",
    name: "Steel Party Cups — 48-Pack Event Pack",
    description:
      "The event-grade pack. Weddings, offsites, rental properties, or anyone who never wants to think about cups again.",
    price: 259,
    packSize: 48,
    perUnitPrice: "$5.40",
    badge: "Best Value",
    features: [
      "Free shipping",
      "Dishwasher-safe",
      "Stackable",
      "Raw stainless steel",
    ],
  },
];

export const productSpecs = [
  { label: "Capacity", value: "16 oz" },
  { label: "Material", value: "304 (18/8) stainless steel" },
  { label: "Construction", value: "Single-wall" },
  { label: "Finish", value: "Brushed / satin raw" },
  { label: "Rim", value: "Smooth rolled" },
  { label: "Coating", value: "None — no paint, no powder coat" },
  { label: "Lid", value: "None" },
  { label: "Plastic", value: "None" },
  { label: "Best for", value: "Cold drinks" },
  { label: "Care", value: "Dishwasher-safe" },
  { label: "Primary pack", value: "12-pack" },
];

export const faqs = [
  {
    question: "Are they insulated?",
    answer:
      "No, they are single-wall by design. They're made to feel like a party cup, not a travel tumbler.",
  },
  {
    question: "Are they dishwasher-safe?",
    answer: "Yes.",
  },
  {
    question: "Are they painted?",
    answer: "No. Raw stainless steel only.",
  },
  {
    question: "Do they stack?",
    answer: "Yes. They nest together and store flat in any cabinet or drawer.",
  },
  {
    question: "What size are they?",
    answer: "16 oz — the same size as a standard party cup.",
  },
  {
    question: "Are they for hot drinks?",
    answer:
      "They are designed primarily for cold party drinks. Since they are single-wall stainless steel, hot liquids may make the cup hot to hold.",
  },
  {
    question: "Can I order custom cups for my event?",
    answer:
      "Yes. We handle weddings, offsites, golf trips, tailgates, and custom host gifts. Use the custom order form below or email us directly.",
  },
  {
    question: "Do they replace red party cups?",
    answer:
      "That's the idea. Same easy party format, upgraded to permanent stainless steel.",
  },
];
