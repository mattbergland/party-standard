import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Party Standard | Steel Party Cups",
  description:
    "Reusable stainless steel party cups for house parties, BBQs, weddings, tailgates, offsites, and better hosting. The party cup, made permanent.",
  keywords: [
    "stainless steel party cups",
    "reusable party cups",
    "steel party cups",
    "stackable stainless steel cups",
    "alternative to disposable party cups",
    "party cups for hosting",
    "event cups",
    "wedding party cups",
  ],
  openGraph: {
    title: "Party Standard | Steel Party Cups",
    description:
      "Reusable stainless steel party cups for house parties, BBQs, weddings, tailgates, offsites, and better hosting. The party cup, made permanent.",
    type: "website",
    siteName: "Party Standard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Standard | Steel Party Cups",
    description:
      "The party cup, made permanent. Stackable stainless steel cups for every gathering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
