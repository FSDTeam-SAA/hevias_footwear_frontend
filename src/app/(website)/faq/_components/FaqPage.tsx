"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  title?: string;
  subTitle: string;
}

const Accordion = ({ items, title, subTitle }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="">
      <div className="container mx-auto p-6">
        {title && (
          <>
            <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
            {subTitle && <p className="text-center mb-8">{subTitle}</p>}
          </>
        )}

        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 bg-[#FFFFFF]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="font-medium">{item.title}</span>
                </div>

                <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 ml-9">
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Usage Example
const FaqPage = () => {
  const capabilities = [
    {
      title: "Footwear & Apparel",
      content:
        "Full-spectrum footwear and apparel development including sneakers, boots, sandals, custom soles, and specialty textile blends. Apparel categories range from high-performance activewear and technical outerwear to denim, uniforms, swimwear, and everyday casual wear. End-to-end prototyping, sourcing, and scalable production are supported.",
    },
    {
      title: "Leather Goods & Accessories",
      content:
        "Expertise in premium leather goods with precise craftsmanship. Offerings include handbags, wallets, belts, travel goods, and bespoke accessories. We specialize in sustainable leather sourcing, advanced finishing techniques, and personalized branding applications such as embossing and laser etching.",
    },
    {
      title: "Home Furnishings",
      content:
        "Custom manufacturing for furniture, décor, and home accessories. Capabilities cover wood, metal, textile, and mixed-material designs. From modern minimalist styles to artisanal handcrafted finishes, we support tailored collections for interior designers, retailers, and hospitality groups.",
    },
    {
      title: "Custom Packaging",
      content:
        "Specialized packaging solutions for diverse industries, from retail to luxury brands. Services include structural packaging design, eco-friendly material sourcing, custom print finishes, and secure protective packaging. Solutions are scalable for both small-batch and high-volume distribution.",
    },
    {
      title: "Jewelry & Personal Accessories",
      content:
        "Design and production of jewelry pieces including rings, necklaces, bracelets, and modern accessories. Expertise spans metalsmithing, casting, gemstone setting, and trend-driven design development. We support private label collections and premium retail collaborations.",
    },
    {
      title: "Sports & Performance Equipment",
      content:
        "Manufacturing of equipment and accessories designed for sports, fitness, and outdoor activities. This includes performance gear, protective equipment, training accessories, and innovative material applications for durability and lightweight performance.",
    },
    {
      title: "Textiles & Fabrics",
      content:
        "Sourcing and production of custom textiles including woven fabrics, knits, performance textiles, sustainable fibers, and digitally printed materials. We provide swatch development, dyeing, finishing, and testing to ensure fabric quality and consistency.",
    },
    {
      title: "Industrial & Technical Products",
      content:
        "Specialized manufacturing for technical and industrial products such as protective gear, uniforms, safety accessories, and functional components. Capabilities include fire-retardant textiles, water-resistant coatings, and compliance with international safety standards.",
    },
    {
      title: "Stationery & Lifestyle Goods",
      content:
        "End-to-end production of stationery, office supplies, and lifestyle goods. This includes notebooks, planners, branded merchandise, gift items, and eco-conscious products with custom packaging options for retail and corporate gifting.",
    },
    {
      title: "Electronics Accessories",
      content:
        "Manufacturing of stylish and functional electronic accessories such as phone cases, laptop sleeves, chargers, wearable tech straps, and protective gear. Materials range from sustainable options to premium finishes, balancing durability with modern aesthetics.",
    },
  ];

  return (
    <Accordion
      title="Frequently Asked Questions"
      subTitle="“Capturing Moments, Creating Memories — Explore Our Studio, Services, and Style"
      items={capabilities}
    />
  );
};

export default FaqPage;
