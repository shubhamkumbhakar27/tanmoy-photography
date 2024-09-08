"use client";

import { useState } from "react";
import Heading from "./heading";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "United States" },
  { code: "+62", country: "Indonesia" },
  { code: "+92", country: "Pakistan" },
  { code: "+55", country: "Brazil" },
  { code: "+234", country: "Nigeria" },
  { code: "+880", country: "Bangladesh" },
  { code: "+7", country: "Russia" },
  { code: "+52", country: "Mexico" },
  { code: "+81", country: "Japan" },
  { code: "+63", country: "Philippines" },
  { code: "+20", country: "Egypt" },
  { code: "+84", country: "Vietnam" },
  { code: "+90", country: "Turkey" },
  { code: "+98", country: "Iran" },
  { code: "+49", country: "Germany" },
  { code: "+66", country: "Thailand" },
  { code: "+44", country: "United Kingdom" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+27", country: "South Africa" },
  { code: "+255", country: "Tanzania" },
  { code: "+95", country: "Myanmar" },
  { code: "+82", country: "South Korea" },
  { code: "+34", country: "Spain" },
  { code: "+57", country: "Colombia" },
  { code: "+254", country: "Kenya" },
  { code: "+380", country: "Ukraine" },
  { code: "+54", country: "Argentina" },
  { code: "+256", country: "Uganda" },
  { code: "+48", country: "Poland" },
  { code: "+212", country: "Morocco" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+998", country: "Uzbekistan" },
  { code: "+51", country: "Peru" },
  { code: "+60", country: "Malaysia" },
  { code: "+244", country: "Angola" },
  { code: "+258", country: "Mozambique" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+264", country: "Ghana" },
  { code: "+967", country: "Yemen" },
  { code: "+237", country: "Cameroon" },
  { code: "+261", country: "Madagascar" },
  { code: "+225", country: "Ivory Coast" },
  { code: "+61", country: "Australia" },
  { code: "+249", country: "Sudan" },
  { code: "+31", country: "Netherlands" },
  { code: "+968", country: "Oman" },
  { code: "+86", country: "China" },
];

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    country_code: "+91",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "phone") {
      const isNumber = value === "" || /^\d+$/.test(value);
      if (!isNumber || value.length > 10) return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(
        "https://myserver-shubham.vercel.app/api/tanmoy-photography/new_lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
        country_code: formData.country_code,
      });
    } catch (error) {
      console.error("error submitting form", error);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
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
              placeholder="What's your name?"
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
            <div className="flex">
              <select
                name="country_code"
                id="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className="mt-1 block border border-gray-300 rounded-l-md shadow-sm p-1 outline-none"
              >
                {countryCodes.map((country) => (
                  <option key={country.country} value={country.code}>
                    {country.code} ({country.country})
                  </option>
                ))}
              </select>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="How can we reach you back?"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-r-md shadow-sm py-2 px-3 outline-none"
              />
            </div>
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
              <option value="baby-shoot">Baby Shoot</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Feedback or Enquiry
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
