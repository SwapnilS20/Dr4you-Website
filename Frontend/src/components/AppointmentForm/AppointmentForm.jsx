import React from "react";
import Button from "../Button";

const AppointmentFORM = () => {
  return (
    <section className="bg-[#011632] py-16 px-6 font-general-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left content */}
        <div className="text-white md:w-[414px] lg:w-1/2 r lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Your Health, Your Way — Get Trusted Medical Opinions from the
            Comfort of Home
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#D1D5DB]">
            At Drs-4You, expert medical advice is just a click away. Whether
            you're a new patient or seeking a second opinion, our specialists
            are here to guide you with care and clarity.
          </p>
          <Button
            children={"Learn More"}
            styles={
              "bg-[#1376F8] w-[123px] h-[35px] lg:w-[173px] lg:h-[55px] text-white lg:text-lg font-medium rounded-md"
            }
          />
        </div>

        {/* Right - Appointment Form */}
        <div className="bg-white rounded-xl p-8 xs:p-4 shadow-lg w-full max-w-[414px] min-h-[397px]">
          <h3 className="text-xl text-center font-semibold text-[#011632] mb-8">
            Request Appointment
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1376F8]"
            />
            
            <Button
              children={"Submit Now"}
              styles={
                "bg-[#1376F8] text-white w-full mt-4 h-[50px] text-lg rounded-md hover:bg-blue-600 transition-all"
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentFORM;
