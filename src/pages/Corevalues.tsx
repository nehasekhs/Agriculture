import React from "react";
import { Leaf, Shield, TrendingUp } from 'lucide-react';

const Corevalues = () => {
  return (
    <div className="text-center py-10 px-4 md:px-8 mb-28">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Core Values
      </h2>
      <p className="font-alexandria font-normal text-lg text-black mt-9 max-w-2xl mx-auto">
        At Cropzap, our values guide everything we do. They shape our decisions,
        define our culture, and drive our commitment to excellence.
      </p>

      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-6 md:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group w-full max-w-xs sm:max-w-sm mx-auto"
          >
            {/* Image Container */}
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content Container */}
            <div
              className={`absolute bottom-0 w-full max-w-[90%] p-4 sm:p-6 top-5 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out group-hover:translate-y-[-10px] flex flex-col items-center justify-start gap-2 sm:gap-4
              ${feature.backgroundColor === "dark" ? "bg-[#163560] text-white" : "bg-white text-black"}`}>

              {/* Icon Handling */}
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                {feature.icon && <feature.icon className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-400" />}
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
  );
};

// Feature Data
const features = [
  {
    imageUrl: "/about/about4.avif",
    icon: Shield,
    title: "Trust & Transparency",
    description: "Building honest relationships with our partners and customers through clear communication and reliable service.",
    backgroundColor: "dark",
  },
  {
    imageUrl: "/about/about1.jpg",
    icon: TrendingUp,
    title: "Quality & Reliability",
    description: "Delivering only the best products and services, maintaining high standards in everything we do.",
    backgroundColor: "light",
  },
  {
    imageUrl: "/about/about5.jpg",
    icon: Leaf,
    title: "Sustainable Growth",
    description: "Supporting practices that benefit our communities and the environment for long-term prosperity.",
    backgroundColor: "dark",
  },
];

export default Corevalues;
