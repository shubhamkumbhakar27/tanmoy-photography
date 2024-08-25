"use client";

import { useState } from "react";
import Heading from "./heading";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const isNumber = value === "" || /^\d+$/.test(value);
      if (!isNumber || value.length > 12) return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Heading title="Get a Quote" />
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Service
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="wedding">Wedding Photography</option>
              <option value="pre-wedding">Pre-wedding Photography</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message/Feedback
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 outline-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white disabled:bg-orange-300 bg-orange-400"
              disabled={!formData.name || !formData.phone || !formData.service}
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
