import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const url =
    "https://script.google.com/macros/s/AKfycbzrCp1u7eYc8-KU31lX4pC7I4U1PTmeq43RVeuWu9Oqwu-VCTph1PVbMKLKPk878cND/exec";

  const onSubmit = async (data) => {
    // Merge country code with phone for demonstration
    const mergedData = {
      ...data,
      Phone: `${data.CountryCode} ${data.Phone}`,
      sheetName: "ContactForm",
    };
    // Remove CountryCode as it's merged
    delete mergedData.CountryCode;

    const urlParams = new URLSearchParams(mergedData);

    try {
      const response = await axios.post(url, urlParams, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      alert(response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="xl:w-[500px]  lg:w-[40vw] border border-blue-300 border-opacity-50 rounded-xl p-8 shadow-xl bg-white mx-auto mt-4">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-base font-medium mb-1 text-gray-700">
            First name
          </label>
          <input
            type="text"
            placeholder="John"
            {...register("FirstName", {
              required: "First name is required",
              maxLength: 40,
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: "First name has invalid characters",
              },
            })}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.FirstName && (
            <span className="text-red-500 text-sm">
              {errors.FirstName.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-base font-medium mb-1 text-gray-700">
            Last name
          </label>
          <input
            type="text"
            placeholder="Doe"
            {...register("LastName", {
              required: "Last name is required",
              maxLength: 40,
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: "Last name has invalid characters",
              },
            })}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.LastName && (
            <span className="text-red-500 text-sm">
              {errors.LastName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email",
              },
            })}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.Email && (
            <span className="text-red-500 text-sm">{errors.Email.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">
            Phone number
          </label>
          <div className="flex items-center gap-3">
            <select
              {...register("CountryCode", { required: true })}
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              defaultValue="IN"
            >
              <option value="IN">IN</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              placeholder="+91 9876543210"
              {...register("Phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          {errors.Phone && (
            <span className="text-red-500 text-sm">{errors.Phone.message}</span>
          )}
        </div>

        {/* Date Picker */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">
            Select date
          </label>
          <input
            type="date"
            {...register("Date", {
              required: "Date is required",
            })}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.Date && (
            <span className="text-red-500 text-sm">{errors.Date.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-base font-medium mb-1 text-gray-700">
            Message
          </label>
          <textarea
            rows="6"
            placeholder="Your message here..."
            {...register("Message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 1000,
                message: "Message too long",
              },
              validate: (value) =>
                !/<\s*script/gi.test(value) || "No scripts allowed",
            })}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
          ></textarea>
          {errors.Message && (
            <span className="text-red-500 text-sm">
              {errors.Message.message}
            </span>
          )}
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
