import React, { useState } from "react";
import axios from "axios";

const CropmartForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    name: "",
    phone: "",
    email: "",
    website: "",
    role: "",
    address: "",
    createdAt: new Date(),
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: '', content: '' });
  const [btnLoader, setBtnLoader] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  interface ModalMessage {
    title: string;
    content: string;
  }
const handleSubmit = async (e: any) => {
  e.preventDefault();
  setBtnLoader(true);
  try {
    formData.createdAt = new Date();
    const response = await axios.post(import.meta.env.VITE_MONGO_DB_URL + 'mart', formData);

    console.log(response);
    if (response.status === 201 || response.status === 200 || response.status === 250) {
      // const mail_response = 
      await fetch(
        import.meta.env.VITE_MONGO_DB_URL +
        "send-email-mart",
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

    setSuccessMessage(response.data.message);
    setError("");

    setFormData({
      businessName: "",
      name: "",
      phone: "",
      email: "",
      website: "",
      role: "",
      address: "",
      createdAt: new Date(),
    });

  } catch (error) {
    console.log(error);
    setModalMessage({ title: 'Error', content: 'Failed to submit the form.' } as ModalMessage);
    setBtnLoader(false);
    setError("Failed to submit form. Please try again.");
    setSuccessMessage("");
  }
  setModalOpen(true);
  setBtnLoader(false);
};
  return (
    <section
    id="registration-section"
    className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-green-200 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 mt-10 mx-auto"
  >
    <div className="text-center px-4">
      <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold text-green-700 mb-4">Get Started</h2>
      <p className="text-base sm:text-lg md:text-[20px] text-gray-700 mb-6">Join CropzapMart and transform your procurement journey.</p>
    </div>
    <div className="form-container max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Business Name",
            id: "businessName",
            type: "text",
            placeholder: "Enter your business name",
            required: true,
          },
          {
            label: "Your Name",
            id: "name",
            type: "text",
            placeholder: "Your full name",
            required: true,
          },
          {
            label: "Phone",
            id: "phone",
            type: "tel",
            placeholder: "Your phone number",
            required: true,
          },
          {
            label: "Email",
            id: "email",
            type: "email",
            placeholder: "Your email address",
            required: false,
          },
          {
            label: "Website/URL",
            id: "website",
            type: "text",
            placeholder: "Your website URL",
            required: false,
          },
        ].map((field, index) => (
          <div className="form-group mb-4" key={index}>
            <label htmlFor={field.id} className="block text-sm sm:text-base md:text-lg text-gray-700 font-medium mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              required={field.required}
              value={(formData as any)[field.id] || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>
        ))}
        <div className="form-group mb-4">
          <label htmlFor="role" className="block text-gray-700 font-medium mb-3">
            Which represents you better? <span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          >
            <option value="" disabled>Select an option</option>
            <option value="Super Markets">Super Markets</option>
            <option value="Vegetable Stores">Vegetable Stores</option>
            <option value="Kirana Stores">Kirana Stores</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Canteens & Hostels">Canteens & Hostels</option>
            <option value="Tea Shops / Bakery">Tea Shops / Bakery</option>
            <option value="Modern Retail">Modern Retail</option>
            <option value="One Time Customer / Party Orders">One Time Customer / Party Orders</option>
            <option value="Sandhai / Road Side Customers / Push Carts">Sandhai / Road Side Customers / Push Carts</option>
            <option value="Exporter">Exporter</option>
            <option value="Fruits Shop / Juice Shop">Fruits Shop / Juice Shop</option>
            <option value="Chain of Restaurants">Chain of Restaurants</option>
            <option value="Thaluk Market - Retailer">Thaluk Market - Retailer</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Uzhavar Sandhai">Uzhavar Sandhai</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows={4}
            placeholder="Your complete address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit-btn bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700"
        >
          {btnLoader ? (
            <div className="inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            </div>
          ) : "Submit"}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {successMessage && <div className="mt-4 text-green-600">{successMessage}</div>}
    </div>
  </section>
);
};
    
 

export default CropmartForm;
