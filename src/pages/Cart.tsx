// src/components/Cart.jsx
import React from "react";
import {
  ShoppingCart,
  ShieldCheck,
  BarChart3,
  Truck,
  Leaf,
} from "lucide-react";

 function Cart() {
  const features = [
    {
      title: "Smart Market Access",
      desc: "Seamlessly connect with a wide network of buyers and sellers through an AI-powered marketplace designed for inclusivity and fairness.",
      img: "https://img.freepik.com/free-vector/marketplace-platform-concept-illustration_114360-8642.jpg",
      icon: <ShoppingCart className="w-10 h-10 mx-auto mb-4" />,
    },
    {
      title: "Smart Traceability",
      desc: "Every product carries a transparent journey from farm to consumer, secured with blockchain-based traceability for guaranteed authenticity.",
      img: "https://fmtmagazine.in/wp-content/uploads/2022/12/J2_Smart-Traceability-%E2%80%93-Food-Safety.jpg",
      icon: <ShieldCheck className="w-10 h-10 mx-auto mb-4" />,
    },
    {
      title: "Insight-Driven Growth",
      desc: "Harness real-time data analytics and demand forecasting to make informed decisions that maximize value for both producers and consumers.",
      img: "https://img.freepik.com/free-vector/business-analytics-data-analysis-isometric-concept_107791-11386.jpg",
      icon: <BarChart3 className="w-10 h-10 mx-auto mb-4" />,
    },
    {
      title: "Integrated Fulfilment Support",
      desc: "From order management to last-mile delivery, our platform ensures smooth, reliable, and scalable operations tailored to modern supply chains.",
      img: "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148504863.jpg",
      icon: <Truck className="w-10 h-10 mx-auto mb-4" />,
    },
   
  ];

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative group flex flex-col items-center justify-center text-center text-white cursor-pointer overflow-hidden min-h-[400px] p-6"
            >
              {/* Background image */}
              <img
                src={feature.img}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 brightness-50 group-hover:brightness-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>

              {/* Icon + Text */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;
