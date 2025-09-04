"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SatisfiedClient() {
  const brands = [
    { name: "TheTradeDesk", logo: "/brand/brand1.png" },
    { name: "Mercado Libre", logo: "/brand/brand2.png" },
    { name: "Mops", logo: "/brand/brand3.png" },
    { name: "DoorDash", logo: "/brand/brand4.png" },
    { name: "Criteo", logo: "/brand/brand5.png" },
    { name: "TikTok Shop", logo: "/brand/brand6.png" },
    { name: "TheTradeDesk", logo: "/brand/brand7.png" },
    { name: "Mercado Libre", logo: "/brand/brand8.png" },
    { name: "Mops", logo: "/brand/brand9.png" },
    { name: "DoorDash", logo: "/brand/brand10.png" },
    { name: "TheTradeDesk", logo: "/brand/brand1.png" },
    { name: "Mercado Libre", logo: "/brand/brand2.png" },
    { name: "Mops", logo: "/brand/brand3.png" },
    { name: "DoorDash", logo: "/brand/brand4.png" },
  ];

  return (
    <section className="text-center py-14">

      <h2 className="text-3xl font-semibold text-black mb-10">
        Satisfied Clients
      </h2>

      <Marquee speed={50} gradient={false} pauseOnHover>
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.logo}
            alt={brand.name}
            width={1000}
            height={1000}
            className="mx-6 h-20 w-auto object-contain"
          />
        ))}
      </Marquee>
    </section>
  );
}
