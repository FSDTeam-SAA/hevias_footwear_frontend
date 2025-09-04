import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const ManufacturHero: React.FC<HeroSectionProps> = ({
  title = "Custom Manufacturing in Latin America",
  description = "FastLane simplifies sourcing and custom production. With deep expertise in footwear, apparel, accessories, textiles, tools, auto accessories, and packaging, we offer turnkey solutions that save you time, money, and hassle.",
  buttonText = "Explore Our Process",
  buttonHref = "#",
  imageSrc = "/manufacturing-building.jpg",
  imageAlt = "Modern manufacturing facility",
  onButtonClick,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section className={`relative min-h-[70vh] bg-slate-800 overflow-hidden ${className}`}>
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" /> */}
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[50vh]">
          
          {/* Left content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
            
            <div>
              {buttonHref && buttonHref !== "#" ? (
                <a
                  href={buttonHref}
                  className="inline-flex items-center px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {buttonText}
                </a>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="inline-flex items-center px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[3/2] rounded-2xl">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10" /> */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay effect */}
              {/* <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" /> */}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 md:h-20 lg:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,32 480,0 720,32 C960,64 1200,96 1440,64 L1440,120 L0,120 Z"
            fill="white"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
    </section>
  );
};
