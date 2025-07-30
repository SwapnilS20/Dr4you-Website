import React from "react";
import Button from "../Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const AppointmentFORM = () => {
  const appointmentData = useSelector(
    (state) => state.repeatable.RequestAppointmentForm
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const url =
    "https://script.google.com/macros/s/AKfycbzrCp1u7eYc8-KU31lX4pC7I4U1PTmeq43RVeuWu9Oqwu-VCTph1PVbMKLKPk878cND/exec";

  // This will run when form is valid and submitted
  const onSubmit = async (data) => {
    const urlParams = new URLSearchParams({
      ...data,
      sheetName: "RequestForm",
    });

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
    <section className="bg-[#011632] py-16 px-6 font-general-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left content */}
        <div className="text-white md:w-[414px] lg:w-1/2 r lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            {appointmentData?.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#D1D5DB]">
            {appointmentData?.description}
          </p>
          <Button
            children={appointmentData?.CTA?.text}
            styles={
              "bg-[#1376F8] w-[123px] h-[35px] lg:w-[173px] lg:h-[55px] text-white lg:text-lg font-medium rounded-md"
            }
          />
        </div>

        {/* Right - Appointment Form */}
        <div className="bg-white rounded-xl p-8 xs:p-4 shadow-lg w-full max-w-[414px] min-h-[397px]">
          <h3 className="text-xl text-center font-semibold text-[#011632] mb-8">
            {appointmentData?.form_head}
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Full Name */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                {...register("FullName", {
                  required: "Full name is required",
                  maxLength: { value: 70, message: "Too long" },
                  pattern: {
                    value: /^[a-zA-Z\s.'-]{2,70}$/,
                    message: "Enter a valid name",
                  },
                })}
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
                autoComplete="off"
              />
              {errors.FullName && (
                <span className="text-red-500 text-xs mt-1">{errors.FullName.message}</span>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email Address"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
                autoComplete="off"
              />
              {errors.Email && (
                <span className="text-red-500 text-xs mt-1">{errors.Email.message}</span>
              )}
            </div>
            {/* Phone */}
            <div className="flex flex-col">
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("Phone", {
                  required: "Phone number is required",
                  pattern: {
                    // Accepts exactly 10 digits
                    value: /^\d{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
                autoComplete="off"
              />
              {errors.Phone && (
                <span className="text-red-500 text-xs mt-1">{errors.Phone.message}</span>
              )}
            </div>
            <Button
              children={appointmentData?.form_button_text}
              styles={
                "bg-[#1376F8] text-white w-full mt-4 h-[50px] text-lg rounded-md hover:bg-blue-600 transition-all"
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentFORM;
