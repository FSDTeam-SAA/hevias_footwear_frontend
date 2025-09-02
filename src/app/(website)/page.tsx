import Businessneeds from "@/components/Home/ Businessneeds";
import Hero from "@/components/Home/Hero";
import Marketing from "@/components/Home/Marketing";
import { TradeAdvantageSection } from "@/components/Home/TradeAdvantageSection";
import TrustedBrands from "@/components/Home/TrustedBrands";
import NewArrivals from "@/components/Home/NewArrivals";
import React from "react";
import BestSellers from "@/components/Home/BestSellers";
import { WhyChooseFastlane } from "@/components/Home/WhyChooseFastlane";
import Cta from "@/components/Home/Cta";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <TradeAdvantageSection />
      <Marketing />
      <Businessneeds />
      <NewArrivals />
      <BestSellers />
      <WhyChooseFastlane/>
      <Cta/>
    </div>
  );
};

export default Home;
