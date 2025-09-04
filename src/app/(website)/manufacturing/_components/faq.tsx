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
}

const Accordion = ({ items, title }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="">
      <div className="container mx-auto p-6">
        {title && (
          <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
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
const FAQ = () => {
  const capabilities = [
    {
      title: "Footwear & Apparel",
      content:
        "Footwear (sneakers, boots, sandals, custom soles, specialty materials (textiles)), Apparel (Activewear, denim, uniforms, swimwear, casual wear)",
    },
    {
      title: "Leather Goods & Accessories",
      content:
        "High-quality leather products including bags, wallets, belts, and custom accessories",
    },
    {
      title: "Home Furnishings",
      content: "Custom furniture, decor, and home accessories manufacturing",
    },
    {
      title: "Custom Packaging",
      content:
        "Specialized packaging solutions for various industries and product types",
    },
  ];

  return <Accordion title="Manufacturing Capabilities" items={capabilities} />;
};

export default FAQ;
