import React from "react";
import { ManufacturHero } from "../manufacturing/_components/ManufacturHero";
import BecomeSellerFeture from "./_components/BecomeSellerFeture";

function page() {
  return (
    <div>
      <div className="">
        <ManufacturHero
          title="Expand Your Reach—Partner with FastLane"
          description="Are you a manufacturer or artisan in Latin America looking to boost your sales and visibility in the U.S. market? Welcome to FastLane, a dynamic marketplace connecting you with small and mid-sized retailers eager for quality products and quick deliveries. We handle marketing, inventory management, packaging solutions, and more so that you can focus on what you do best—making great products."
          buttonText="Become A Fastlend Partner"
          buttonHref="/process" // optional, use if you want link instead of onClick
          imageSrc="/mcuh1.svg"
          imageAlt="Modern manufacturing facility"
        />
      </div>
      <div>
        <BecomeSellerFeture />
      </div>
    </div>
  );
}
 
export default page;
