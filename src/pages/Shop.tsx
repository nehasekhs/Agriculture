import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Modal from "../components/ModelPopup";

export default function Shop() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    createdAt: new Date(),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", content: "" });
  const [btnLoader, setBtnLoader] = useState(false);

  interface ModalMessage {
    title: string;
    content: string;
  }

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnLoader(true);

    try {
      formData.createdAt = new Date();
      const response = await axios.post(
        import.meta.env.VITE_MONGO_DB_URL + "shop",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        setModalMessage({
          title: "Success",
          content: "Your request has been submitted successfully!",
        } as ModalMessage);

        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          createdAt: new Date(),
        });
      }
    } catch (error) {
      console.log(error);
      setModalMessage({
        title: "Error",
        content: "Failed to submit the form. Please try again.",
      } as ModalMessage);
    }

    setBtnLoader(false);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Framer motion variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Background */}
      <section className="relative py-20 mt-2 h-[450px]">
      
  <div className="absolute inset-0">
    <img src="/bg/shop.webp" alt="Agricultural Innovation" className="w-full h-full object-fill" />
  </div>
 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/5 to-black/60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-white z-10">
          <motion.h1
            className="text-5xl font-bold mt-20"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Shop with Hivictus
          </motion.h1>
          
        </div>
      </section>

      {/* Content + Form Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-36">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.h2
              className="text-xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              At Hivictus, every product tells a story
            </motion.h2>
            <motion.p className="text-gray-600 text-[16px]" variants={itemVariants}>
              From farmers growing fresh produce, FPOs bringing collective
              strength, to women-led SMEs crafting with passion.
            </motion.p>
            <motion.p className="text-gray-600 text-[16px]" variants={itemVariants}>
              Join the Hivictus community wishlist — your way to shop mindfully
              and make a positive impact.
            </motion.p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border-green-500 border-2 w-4/5 mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6"
              variants={itemVariants}
            >
              Join the Wishlist
            </motion.h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  name="name"
                  required
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  name="email"
                  required
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  name="mobile"
                  required
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
                variants={itemVariants}
              >
                {btnLoader ? "Submitting..." : "Join Now"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
}
