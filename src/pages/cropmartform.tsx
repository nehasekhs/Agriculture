import React, { useState } from "react";
import axios from "axios";

const CropmartForm = () => {
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
    <section id="registration" className="registration py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-600 mb-6">
          Join With CropzapGrower and Transform your Farming
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto grid grid-cols-1 gap-4"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your phone number"
            className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="form-select p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Individual Farmer">Individual Farmer</option>
            <option value="Group of Farmers">Group of Farmers</option>
            <option value="Farmer Producer Organisation">
              Farmer Producer Organisation
            </option>
            <option value="Others">Others</option>
          </select>
          <textarea
            name="farmDescription"
            value={formData.farmDescription}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your farm and crops..."
            className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
            placeholder="Your complete address"
            className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <button className="btn bg-green-500 text-white px-6 py-3 rounded-md" disabled={btnLoader}>
            {btnLoader ? (
              <div className="inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              </div>
            ) : "Submit"}
          </button>
        </form>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold">{modalMessage.title}</h3>
            <p className="mt-2 text-gray-600">{modalMessage.content}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    
  );
};

export default CropmartForm;
