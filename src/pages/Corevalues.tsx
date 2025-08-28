import React from "react";
import { Leaf, Shield, TrendingUp, Truck } from 'lucide-react';

const Corevalues = () => {
  return (
    
   <section
      className="relative h-[800px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/bg/back3.jpg")',
      }}
    > 
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/5 to-black/60"></div>
      <div className="py-10 px-4 md:px-8 mb-28 w-full">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Why Hivictus 
        </h2>

        {/* Flex Container for Text and Cards */}
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

          {/* Left Paragraph */}
          <div className="lg:w-1/2 text-left mt-10">
            <p className=" text-white mt-2 max-w-2xl mx-auto lg:mx-20 font-semibold text-[20px]">
             We empower Farmers, FPOs, and Women SMEs by providing direct market access and fair pricing through a transparent, technology-driven platform. By eliminating middlemen in the agricultural supply chain, we ensure producers retain greater value for their products. With blockchain-based traceability and data-driven insights,
              Hivictus not only connects producers with consumers but also builds trust, efficiency, and sustainability in agricultural commerce.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center group w-full max-w-xs mx-auto"
              >
                {/* Image Container */}
                <div className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content Container */}
                <div
                  className={`absolute bottom-0 w-full max-w-[90%] p-4 top-5 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out group-hover:translate-y-[-10px] flex flex-col items-center gap-2
                  ${feature.backgroundColor === "dark" ? "bg-[#163560] text-white" : "bg-white text-black"}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-0">
                    {feature.icon && (
                      <feature.icon className="w-6 h-6 sm:w-10 sm:h-8 text-yellow-400" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-0 text-yellow-400">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-inter">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

 
// Feature Data
const features = [
  {
    imageUrl: "/about/about4.avif",
    icon: Shield,
    title: " Direct Market Access",
    description: "Eliminates middlemen, enabling sellers to earn better margins and buyers to access fresh, authentic products at fair prices.",
    backgroundColor: "dark",
  },
  {
    imageUrl: "/about/about1.jpg",
    icon: TrendingUp,
    title: " Branding & Fulfillment Support",
    description: "Every product on Hivictus comes directly from verified rural producers with transparent sourcing and clean labeling.",
    backgroundColor: "light",
  },
  {
    imageUrl: "/about/about5.jpg",
    icon: Leaf,
    title: " Traceable & Authentic Products",
    description: "Fair, competitive, and visible pricing for both producers and buyers, ensuring trust.",
    backgroundColor: "dark",
  },
   {
    imageUrl: "/about/about6.jpg",
    icon: Truck,
    title: "Farm to Home Convenience",
    description: "Safe digital payments and trackable order fulfillment, creating confidence for both producers and consumers.",
    backgroundColor: "light",
  },
];

export default Corevalues;
