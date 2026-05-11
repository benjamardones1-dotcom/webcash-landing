import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhatYouLearn from "@/components/WhatYouLearn";
import HowItWorks from "@/components/HowItWorks";
import Bonuses from "@/components/Bonuses";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhatYouLearn />
        <HowItWorks />
        <BeforeAfter />
        <Bonuses />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
