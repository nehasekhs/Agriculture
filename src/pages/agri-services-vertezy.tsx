import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    option: "",
    doorNo: "",
    addressLine2: "",
    district: "",
    state: "",
    pincode: "",
    createdAt: new Date(),
  });

  const [btnLoader, setBtnLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", content: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnLoader(true);

    try {
      const response = await axios.post(
        import.meta.env.VITE_MONGO_DB_URL + "grower",
        { ...formData, createdAt: new Date() }
      );

      if (response.status === 200 || response.status === 201) {
        await fetch(import.meta.env.VITE_MONGO_DB_URL + "send-email-gwr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        setModalMessage({
          title: "Success",
          content: "Form submitted successfully.",
        });

        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          option: "",
          doorNo: "",
          addressLine2: "",
          district: "",
          state: "",
          pincode: "",
          createdAt: new Date(),
        });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      setModalMessage({
        title: "Error",
        content: "Something went wrong. Please try again.",
      });
    }

    setModalOpen(true);
    setBtnLoader(false);
  };

  return (
    <section className="py-20 bg-gray-100 flex justify-center items-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden"
      >
        {/* Top Image */}
        <div className="w-full h-60">
          <img
            src="\bg\WhatsApp Image 2025-05-04 at 23.15.20_c4e2998c.jpg"
            alt="Zoyokart Seller"
            className="w-full h-full object-center"
          />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
            Join with Hivictus
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Become a Hivictus seller and sell your products to a wider audience.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />

            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="" disabled>
                Which Represents You Best
              </option>
              <option>Individual Farmer</option>
              <option>Group of Farmers</option>
              <option>Farmer Producer Organisation</option>
              <option>Women SME</option>
              <option>Others</option>
            </select>

            {/* Address Fields */}
           <input
              type="text"
              name="doorNo"
              value={formData.doorNo}
              onChange={handleChange}
              placeholder="Door No / Street"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />

              <input
                type="text"
                name="addressLine2"
                value={(formData as any).addressLine2 || ""}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="w-full h-[100px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />

            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />

            {/* Flex row for State and Pincode */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                required
              />
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={btnLoader}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300"
            >
              {btnLoader ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              ) : (
                <>
                  <SendHorizonal className="w-5 h-5" />
                  Submit
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full"
          >
            <h3 className="text-xl font-semibold text-green-700">
              {modalMessage.title}
            </h3>
            <p className="mt-2 text-gray-600">{modalMessage.content}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default RegistrationForm;
