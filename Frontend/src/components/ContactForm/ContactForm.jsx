import React from "react";

const ContactForm = () => {
  return (
    <div className="xl:w-[500px]  lg:w-[40vw] border border-blue-300 border-opacity-50 rounded-xl p-8 shadow-xl bg-white mx-auto mt-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First and Last Name */}
        <div className="flex flex-col">
          <label className="text-base font-medium mb-1 text-gray-700">First name</label>
          <input
            type="text"
            placeholder="John"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium mb-1 text-gray-700">Last name</label>
          <input
            type="text"
            placeholder="Doe"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">Phone number</label>
          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
              <option value="IN">IN</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">Select date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">Message</label>
          <textarea
            rows="6"
            placeholder="Your message here..."
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
