import React, {useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    option: "",
    farmDescription: "",
    address: "",
    createdAt: new Date(),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: '', content: '' });
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
      const response = await axios.post(import.meta.env.VITE_MONGO_DB_URL + 'grower', formData);

      console.log(response);
      if (response.status === 201 || response.status === 200 || response.status === 250) {
        await fetch(
          import.meta.env.VITE_MONGO_DB_URL +
          "send-email-gwr",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        ).then((response) => {
          console.log(response);
        });

        setBtnLoader(false);
      }

      setModalMessage({ title: 'Success', content: 'Successfully form submitted.' } as ModalMessage);

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        option: "",
        farmDescription: "",
        address: "",
        createdAt: new Date(),
      });

    } catch (error) {
      console.log(error);
      setModalMessage({ title: 'Error', content: 'Failed to submit the form.' } as ModalMessage);
      setBtnLoader(false);
    }
    setModalOpen(true);
    setBtnLoader(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
<div className="flex flex-col items-center">
      {/* Background Image Section */}
      <section className="relative w-full h-[80vh] mt-16">
        <img
          src="\bg\WhatsApp Image 2025-05-04 at 23.15.20_c4e2998c.jpg"
          alt="Agricultural Innovation"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-left text-white z-10">
           {/* LOGO */}
    <img
      src="\public\bg\WhatsApp_Image_2025-05-04_at_23.13.05_b7167ff4-removebg-preview.png" // <- Replace with your actual logo path
      alt="Logo"
      className="w-72 mt-10 mb-[-40px] ml-[-70px]" 
    />
  <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold justify-center ">
    Empowering Farmers Transforming Agriculture
  </h1><br />
  <p className="text-lg sm:text-xl md:text-3xl">
    Vertezy brings smarter, data-driven farming solutions to help you grow efficiently, reduce risks, and achieve sustainable success with ease.
  </p>
</div>

      </section>

      {/* Registration Form Section */}
      <section className=" relative max-w-7xl w-full px-6 lg:flex lg:items-start lg:justify-between lg:gap-16 py-3">

        {/* Left: About Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2}}
          className="lg:w-1/2 text-gray-800 mb-10 lg:mb-0"
        >
          <h2 className="text-5xl font-bold text-gray-700 mb-4 mt-10">About Cropzap</h2><br></br>
          <p className="text-gray-600 text-[20px]">
            Cropzap’s Agri Services bring farmers and businesses closer to the right resources, insights, and market opportunities. By integrating technology with expert-backed support, we simplify decision-making, improve productivity, and ensure seamless access to essential agricultural solutions.
          </p>
          <ul className="space-y-9">
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Grow with Confidence:</strong> <br></br> Get the right insights and guidance to make informed farming decisions, ensuring better outcomes and steady growth.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Seamless Support:</strong> <br></br>Access expert-driven assistance and innovative solutions that simplify your farming journey without unnecessary complications.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Smarter Decisions:</strong><br></br>Leverage data-driven strategies to optimize cultivation, minimize risks, and enhance productivity with ease.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Stronger Yields:</strong> <br></br>Adopt advanced techniques and smarter farming approaches to achieve better harvests and consistent results season after season.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Sustainable Growth:</strong> <br></br>Embrace modern agricultural solutions that not only improve efficiency but also contribute to long-term prosperity and stability.
            </li>
          </ul>
        </motion.div>
<div className="mt-10 text-center mb-10">
  {/* <Link
    to="/cropgrowerform"
    className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition-all hover:bg-green-700 hover:scale-105"
  >
    Get Started
  </Link> */}
</div>
        {/* Right: Registration Form */}
        

<section id="registration" className="registration py-16 bg-white">
  <motion.div
   initial={{ opacity: 0, x: 50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1.2 }}
    className="container mx-auto text-center  "
  >
    <h2 className="text-3xl font-bold mb-4">Get Started</h2>
    <p className="text-gray-600 mb-6">
      Join With CropzapGrower and Transform your Farming
    </p>

    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto grid grid-cols-1 gap-4"
    >
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Your full name"
        className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Your phone number"
        className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email address"
        className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <motion.select
        whileFocus={{ scale: 1.02 }}
        name="option"
        value={formData.option}
        onChange={handleChange}
        className="form-select p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      >
        <option value="" disabled>Select an option</option>
        <option value="Individual Farmer">Individual Farmer</option>
        <option value="Group of Farmers">Group of Farmers</option>
        <option value="Farmer Producer Organisation">Farmer Producer Organisation</option>
        <option value="Others">Others</option>
      </motion.select>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="farmDescription"
        value={formData.farmDescription}
        onChange={handleChange}
        rows={4}
        placeholder="Describe your farm and crops..."
        className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      ></motion.textarea>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="address"
        value={formData.address}
        onChange={handleChange}
        rows={4}
        placeholder="Your complete address"
        className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      ></motion.textarea>
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="btn bg-green-500 text-white px-6 py-3 rounded-md"
        disabled={btnLoader}
      >
        {btnLoader ? (
          <div className="inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          </div>
        ) : "Submit"}
      </motion.button>
    </form>
  </motion.div>

  {/* Modal with motion */}
  {modalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h3 className="text-xl font-semibold">{modalMessage.title}</h3>
        <p className="mt-2 text-gray-600">{modalMessage.content}</p>
        <button
          onClick={closeModal}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</section>

      </section>

        </div>
  );
};

export default RegistrationForm;
