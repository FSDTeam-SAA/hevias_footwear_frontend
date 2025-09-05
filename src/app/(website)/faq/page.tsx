import React from "react";
import { ManufacturHero } from "../manufacturing/_components/ManufacturHero";
import FaqPage from "./_components/FaqPage";

function page() {
  return (
    <div>
      <div className="">
        <ManufacturHero
          title="Frequently Asked Questions"
          description="Find quick answers to the most common questions about our platform."
          buttonText="Become A Fastlend Partner"
          buttonHref="/process" // optional, use if you want link instead of onClick
          imageSrc="/mcuh4.svg"
          imageAlt="Modern manufacturing facility"
        />
      </div>
      <div>
        <FaqPage />
      </div>
    </div>
  );
}

export default page;
