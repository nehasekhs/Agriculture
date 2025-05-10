import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cropzapmart = () => {
  return (
    <div className="pt-16 px-4 sm:px-8 md:px-16 lg:px-0 mb-20"> 
      {/* Hero Section */}
      <section className="relative py-44 h-auto">
        <div className="absolute inset-0">
          <img
            src="\public\bg\WhatsApp Image 2025-05-04 at 22.56.12_7edb3b56.jpg"
            alt="Agricultural Innovation"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Large volume Trading</h1>
        </div>
      </section>

      {/* Single Column Content */}
      <motion.div
        className="max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold mb-4">What is Large volume Trading</h3>
        <p className="text-gray-700 text-[18px] text-justify p-2 leading-relaxed">
        Cropzap's Large Volume Trading simplifies bulk procurement for businesses by connecting them directly 
            with farmers and suppliers. Our efficient supply chain ensures consistent availability, smooth transactions, 
            and seamless logistics, reducing sourcing challenges. With advanced market insights and a structured distribution
            network, we make large-scale purchasing effortless, reliable, and efficient.

        </p>

        <ul className="list-disc pl-5 text-gray-700 text-[18px] text-justify p-2 leading-relaxed">
            <li><b>Bulk Sourcing, Simplified –</b> Access a vast network of farmers and suppliers for consistent procurement.</li><br></br>
            <li><b>Fair and Transparent Deals – </b>Enjoy fair and transparent deals with direct procurement, eliminating unnecessary costs.</li><br></br>
            <li><b>Reliable and Consistent Supply –</b>Ensure a reliable and consistent supply, removing sourcing uncertainties.</li><br></br>
            <li><b>Clear and Transactions –</b>Track every transaction in real-time for complete transparency.</li><br></br>
            <li><b>Optimized Logistics – </b>Benefit from optimized logistics for timely deliveries with minimal delays.</li><br></br>
            <li><b>Less Waste, More Value –</b>Reduce waste with smart demand mapping, ensuring you get exactly what you need.</li><br></br>
          </ul>


        <Link 
          to="/cropmartform"
          className="mt-10 inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition-all hover:bg-green-700 hover:scale-105"
        >
          Get Start
        </Link>
      </motion.div>
    </div>
  );
};

export default Cropzapmart;
