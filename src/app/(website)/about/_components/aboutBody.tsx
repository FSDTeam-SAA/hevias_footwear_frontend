// components/AboutFastLaneTrade.tsx

"use client";

import { CheckCircle, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutComponent() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About FastLaneTrade
          </h2>
          <p className="mt-2 text-gray-600">
            The ultimate cross-border B2B trading platform to unlock all the
            hidden business opportunities in Latin America
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              FastLaneTrade’s mission is to launch products faster into Latin
              America, making trade accessible, efficient, and secure. We
              simplify the complexities of cross-border commerce through
              technology, ensuring businesses expand quickly and confidently.
            </p>
            <p className="text-gray-600">
              We achieve this by connecting companies with trusted local
              partners, ensuring compliance with regulations, and providing
              seamless logistics and payment solutions.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.jpg"
              width={900}
              height={600}
              alt="Mission"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about1.jpg"
              width={900}
              height={600}
              alt="Vision"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-orange-500" /> Our Vision
            </h3>
            <p className="text-gray-600 mb-4">
              Our vision is to revolutionize international trade, creating a
              future where businesses can expand effortlessly into Latin America
              and beyond. We aim to empower global companies with the resources,
              infrastructure, and partnerships necessary to thrive in emerging
              markets.
            </p>
            <p className="text-gray-600">
              By bridging the gap between innovation and opportunity, we
              envision a more inclusive, competitive, and prosperous global
              economy.
            </p>
          </div>
        </div>

        {/* Why Latin America */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">
            Why Latin America? Why Now?
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>🌎 A population of over 650M with rising digital adoption</li>
            <li>📈 Rapidly growing e-commerce market</li>
            <li>💡 Increasing demand for innovative products and services</li>
            <li>🤝 Trade-friendly government policies</li>
          </ul>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "Seamless cross-border transactions",
              "End-to-end logistics & customs compliance",
              "Secure payment systems with currency conversions",
              "Access to trusted partners and distributors",
              "Market insights & localization strategies",
              "Technology-driven solutions for scaling",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Who We Serve</h3>
          <p className="text-gray-700">
            We support exporters, importers, and manufacturers looking to expand
            their global reach. Whether you’re a startup, SME, or established
            enterprise, FastLaneTrade provides the tools and ecosystem to
            succeed.
          </p>
        </div>

        {/* Join */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">🚀 Join the FastLane</h3>
          <p className="text-gray-700">
            Be part of the future of international trade. Expand faster, safer,
            and smarter with FastLaneTrade.
          </p>
        </div>

        {/* Numbers */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">
            📊 FastLane by the Numbers
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔️ 100+ global partners onboarded</li>
            <li>✔️ Presence in 10+ Latin American markets</li>
            <li>✔️ 1M+ products traded</li>
          </ul>
        </div>

        {/* Footprint */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🌍 Our Footprint</h3>
          <p className="text-gray-700">
            FastLaneTrade is headquartered in Latin America, with offices and
            partnerships across major economic hubs, serving international
            clients who aim to unlock the region’s potential for trade.
          </p>
        </div>
      </div>
    </section>
  );
}
 