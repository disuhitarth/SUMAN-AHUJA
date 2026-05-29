import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import PricingComparison from "./components/PricingComparison";
import Checklist from "./components/Checklist";
import WillConfigurator from "./components/WillConfigurator";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Dynamic top announcement status bar */}
      <AnnouncementBar />

      {/* Sticky glassmorphism navigation */}
      <Navbar />

      {/* Main page layout */}
      <main id="main-content">
        {/* Luxury hero with trust metric counters */}
        <Hero />

        {/* Practice area cards */}
        <Services />

        {/* Transparent pricing vs hourly comparison table */}
        <PricingComparison />

        {/* Three-step customer acquisition process timeline */}
        <HowItWorks />



        {/* Interactive notary preparation checklist */}
        <Checklist />

        {/* Interactive step-by-step estate planning configurator */}
        <WillConfigurator />

        {/* Detailed professional bio and dual credentials list */}
        <About />

        {/* Premium client quote testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions accordion */}
        <FAQ />

        {/* Fully accessible location contact and intake form */}
        <Contact />
      </main>

      {/* Branded footer with Law Society regulatory disclaimer */}
      <Footer />

      {/* ── Floating Utilities ── */}
      
      {/* Floating CTA bar on mobile devices */}
      <StickyMobileCTA />

      {/* Circular back-to-top scroll button */}
      <BackToTop />

      {/* WhatsApp floating button with pulse animation */}
      <WhatsAppButton />
    </div>
  );
}
