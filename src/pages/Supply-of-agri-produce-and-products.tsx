import { useState } from "react";
import axios from "axios";
import About from "../assest/farmerabout.jpeg";
import Feature from "../assest/farmerfeature.jpeg";
import Modal from "../components/ModelPopup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CropzapGrower = () => {
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
        // const mail_response = 
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

        // const mail_res = await mail_response.json();

        setBtnLoader(false);
      } 

      setModalMessage({ title: 'success', content: 'Successfully form submitted.' } as ModalMessage);


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
    <main className="pt-16 sm:px-8 md:px-16 lg:px-0">
         <section className="relative py-48 h-auto">
            <div className="absolute inset-0">
              <img
                src="/blog/vegetables.webp"
                alt="Agricultural Innovation"
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 text-left text-white ">
              <h1 className="text-4xl font-bold mb-16">Supply of Fresh Produce</h1>
              
            </div>
          </section>
          <section id="about" className="about py-16 bg-white">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Animated Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="self-start"
    >
      <h3 className="text-4xl font-bold mb-2">What is Supply of Fresh Produce?</h3>
      <p className="text-gray-600 mt-9 text-[20px] leading-relaxed">
        Cropzap’s supply chain solution is designed to streamline the movement of fresh produce 
        from farms to businesses with efficiency, transparency, and minimal wastage. By leveraging 
        real-time market insights, AI-driven demand forecasting, and a robust logistics network, 
        Cropzap ensures that farmers receive fair prices while businesses get consistent, high-quality produce. 
        The platform eliminates inefficiencies caused by traditional middlemen by directly connecting farmers 
        and FPOs to retail stores, restaurants, hostel canteens, and other institutional buyers. With a 
        focus on reducing post-harvest losses, Cropzap optimizes supply and demand mapping, ensuring 
        that surplus produce reaches the right buyers before spoilage occurs. Additionally, its tech-driven 
        procurement system provides traceability, quality assurance, and timely delivery, making agri-commerce 
        more reliable and profitable for all stakeholders involved.
      </p>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-[18px] leading-relaxed mt-6">
        {/* Left Side */}
        <div>
          <p>✅ <span className="font-semibold">Quick and Easy Interface</span> – A simple, user-friendly platform for effortless ordering, saving time and boosting efficiency.</p>
          <p>✅ <span className="font-semibold">Hassle-Free Supply</span> – Reliable farm-to-business supply chain ensuring smooth, timely deliveries without disruptions.</p>
          <p>✅ <span className="font-semibold">Affordable Cost</span> – Direct sourcing from farmers eliminates middlemen, offering competitive pricing with no hidden costs.</p>
        </div>

        {/* Right Side */}
        <div>
          <p>✅ <span className="font-semibold">Wider Selection of Produce</span> – Access a diverse range of fresh produce, staples, sweets, and snacks in one place.</p>
          <p>✅ <span className="font-semibold">Consistently Exceptional Standards</span> – Every product is handled with care to maintain its natural integrity and freshness.</p>
          <p>✅ <span className="font-semibold">Flexible and Tension-Free Ordering</span> – Custom bulk orders, flexible deliveries, and a seamless ordering process for convenience.</p>
        </div>
      </div>
    </motion.div>

    {/* Animated Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center sm:text-left flex justify-center items-center"
    >
      <img
        src={About}
        alt="About"
        className="w-full h-full rounded-md shadow-lg"
      />
    </motion.div>
  </div>
</section>

     <section id="features" className="features py-16 px-4 sm:px-10 bg-green-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "bi-cart3",
                title: "Best prices on seeds and pesticides",
                description:
                  "Get Good Quality Seeds and Pesticides from Sellers at Affordable Cost",
              },
              {
                icon: "bi-award",
                title: "Expert Crop Doctors",
                description:
                  "Seek Advisory from Expert Agri Consultants and Prevent Your Crops from Diseases",
              },
              {
                icon: "bi-lightning-charge",
                title: "Quick and Free Pickup",
                description:
                  "Free and Quick Farm gate pickup for Products sold in the platform",
              },
              {
                icon: "bi-cloud-rain-heavy",
                title: "Weather Forcasting",
                description:
                  "We Provide the Weather details in an easily accessible Platform for Farmers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="icon-box p-6 h-40 bg-white shadow-md rounded-md text-center"
              >
                <i className={`text-green-500 text-3xl mb-4 ${feature.icon}`}></i>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <img
              src={Feature}
              alt="Features"
              className="mx-auto max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

     {/* Get Started Button with Link */}
     <div className="mt-10 text-center mb-10">
  <Link
    to="/cropmartform"
    className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition-all hover:bg-green-700 hover:scale-105"
  >
    Get Started
  </Link>
</div>

      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </main>
  );
};

export default CropzapGrower;
