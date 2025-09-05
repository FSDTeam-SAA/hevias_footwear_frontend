import React from "react";
import { ManufacturHero } from "./_components/ManufacturHero";
import FAQ from "./_components/faq";
import SatisfiedClient from "./_components/SatisfiedClient";
import FeaturesCart from "./_components/FeaturesCart";

function page() {
  return (
    <div className="">
      <div className="">
        <ManufacturHero
          title="Custom Manufacturing in Latin America"
          description="FastLane helps you source and produce custom products efficiently. Expertise in footwear, apparel, accessories, and more."
          buttonText="Explore Our process"
          buttonHref="/process" // optional, use if you want link instead of onClick
          imageSrc="/mcuh.svg"
          imageAlt="Modern manufacturing facility"
        />
      </div>
      <div>
        <FAQ />
      </div>

      <div>
        <SatisfiedClient />
      </div>

      <div>
        <FeaturesCart />
      </div>
    </div>
  );
}

export default page;
