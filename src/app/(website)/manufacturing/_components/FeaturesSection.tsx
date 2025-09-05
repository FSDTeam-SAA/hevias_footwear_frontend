import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface FeaturesSectionProps {
  features: Feature[];
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  features, 
  className = "" 
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="container mx-auto space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Text Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};