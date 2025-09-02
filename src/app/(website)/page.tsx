import Hero from "@/components/Home/Hero";
import { TradeAdvantageSection } from "@/components/Home/TradeAdvantageSection";
import TrustedBrands from "@/components/Home/TrustedBrands";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <TradeAdvantageSection />
    </div>
  );
};

export default Home;
