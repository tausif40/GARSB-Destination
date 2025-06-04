"use client";

import { useState } from "react";
import axios from "axios";

const EnquiryForm = () => {
  const [selectedDegree, setSelectedDegree] = useState("MBA");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [send, isSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const degreeOptions = ["MBA", "Bachelors", "Masters", "Research", "Other"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('')
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData?.mobileNumber.length < 10) {
      setError('mobile number must be 10 digit')
      return;
    }

    const submission = {
      ...formData,
      interestedCouse: selectedDegree,
    };
    try {
      setIsLoading(true)
      console.log("Form submitted:", submission);
      console.log("url - :", `${baseURL}/consultation`);
      const res = await axios.post(`${baseURL}/consultation`, submission);
      // console.log(res)
      setFormData({ name: "", email: "", mobileNumber: "" });
      setSelectedDegree("MBA");
      setIsLoading(false)
      isSend(true)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }

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
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            minLength={10}
            placeholder="Contact Number"
            className="w-full p-2 border-b focus:border-red-500 border-gray-300 rounded outline-none"
            required
          />
          <p className="text-sm text-red-500">{error}</p>
        </div>

        <button
          type="submit"
          className={`${send ? 'bg-emerald-500' : 'bg-red-600'}  text-white py-2 px-4 rounded flex items-center gap-2 w-full justify-center outline-none`}
          disabled={isLoading}
        >
          <span>{isLoading ? 'Sending...' : send ? 'Send Successfully' : 'Send Enquiry'}</span>
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
