"use client";

import { useState } from "react";

const EnquiryForm = () => {
  const [selectedDegree, setSelectedDegree] = useState("MBA");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const degreeOptions = ["MBA", "Bachelors", "Masters", "Research", "Other"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submission = {
      ...formData,
      interest: selectedDegree,
    };

    // Replace this with an API call or other logic
    console.log("Form submitted:", submission);

    // Optional: Reset form
    setFormData({ name: "", email: "", phone: "" });
    setSelectedDegree("MBA");
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-lg font-medium mb-4">I'm interested in...</h3>

      {/* Selectable Buttons */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-3 mb-4">
        {degreeOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelectedDegree(option)}
            className={`py-2 px-2 rounded-md border-2 text-sm transition-colors
              ${selectedDegree === option ? "bg-red-600 text-white border-red-600" : " border-red-300 bg-white text-gray-700 hover:bg-gray-100"}`}>
            {option}
          </button>
        ))}
      </div>

      {/* Form */}
      <form className="space-y-8 mt-12" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-2 border-b focus:border-red-500 border-gray-300 rounded outline-none"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full p-2 border-b focus:border-red-500 border-gray-300 rounded outline-none"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full p-2 border-b focus:border-red-500 border-gray-300 rounded outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded flex items-center gap-2 w-full justify-center outline-none"
        >
          <span>Send Enquiry</span>
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
