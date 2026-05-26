import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import ProductDetail from "@/components/ProductDetail";
import UseCases from "@/components/UseCases";
import PartyDrawer from "@/components/PartyDrawer";
import ProductPurchase from "@/components/ProductPurchase";
import FounderStory from "@/components/FounderStory";
import ComparisonTable from "@/components/ComparisonTable";
import CustomOrders from "@/components/CustomOrders";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import StickyCart from "@/components/StickyCart";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Benefits />
        <ProductDetail />
        <UseCases />
        <PartyDrawer />
        <ProductPurchase />
        <FounderStory />
        <ComparisonTable />
        <CustomOrders />
        <FAQ />
        <EmailCapture />
      </main>
      <Footer />
      <StickyCart />
    </>
  );
}
