import React from 'react';
import { FeaturesSection } from './FeaturesSection';

// Define the Feature type
interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function FeaturesCart() {
  const features: Feature[] = [
    {
      title: "Expert Oversight",
      description:
        "Our local team in Mexico consists of veteran supervisors and sourcing users with extensive backgrounds, quality assurance inspectors to handle any issues that may come up. Quality management, contract negotiation, embroidery or design/tech issues? We handle it all.",
      imageSrc: "/expert-oversight.jpg",
      imageAlt: "Team meeting in modern office space",
    },
    {
      title: "Cost Savings",
      description:
        "Avoid international retail and reduce power freight. Benefit from manufacturing, technology and more competitive shipping rates.",
      imageSrc: "/cost-savings.jpg",
      imageAlt: "Modern minimalist retail space with clothing",
    },
    {
      title: "Hassle-Free Shipping",
      description:
        "We coordinate logistics end-to-end, handling customs clearance and delivering straight to your door or final customer.",
      imageSrc: "/shipping.jpg",
      imageAlt: "Warehouse with stacked shipping boxes",
    },
    {
      title: "Brand Oversight",
      description:
        "All rights to the designs will be owned by you. Brand or product names, box materials and management and such take care of making the samples and manufacturing details.",
      imageSrc: "/brand-oversight.jpg",
      imageAlt: "Brand design materials and tools on desk",
    },
  ];

  return (
    <div>
      <FeaturesSection features={features} />

      {/* You can easily use it multiple times with different data */}
      <FeaturesSection
        features={[
          {
            title: "Another Feature",
            description: "Description of another feature set.",
            imageSrc: "/another-image.jpg",
            imageAlt: "Another image",
          },
        ]}
        className="bg-white"
      />
    </div>
  );
}

export default FeaturesCart;
