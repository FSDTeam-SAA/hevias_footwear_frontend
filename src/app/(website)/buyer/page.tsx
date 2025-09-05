import React from "react";
import { ManufacturHero } from "../manufacturing/_components/ManufacturHero";
import BuyerFeature from "./_components/BuyerFeature";

function page() {
  return (
    <div>
      <div className="">
        <ManufacturHero
          title="Bringing Unique, Vetted Products to Your Store"
          description="FastLane empowers small and mid-sized US retailers by providing streamlined access to quality product and manufacturing partners in Latin America, fostering increased profitability and marketing competitiveness through efficient, cost-effective sourcing solutions."
          buttonText="Sign Up Now"
          buttonHref="/process" // optional, use if you want link instead of onClick
          imageSrc="/mcuh2.svg"
          imageAlt="Modern manufacturing facility"
        />
      </div>
      <div>
        <BuyerFeature />
      </div>
    </div>
  );
}

export default page;
