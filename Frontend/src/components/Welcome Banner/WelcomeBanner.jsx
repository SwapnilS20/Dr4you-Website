import React from "react";
import img from "../../assets/Images/WelcomeBannerImg.png";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function WelcomeBanner() {
  const welcomeData = useSelector((state) => state.home.WelcomeBanner);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const url =
    "https://script.google.com/macros/s/AKfycbxKrVpxtsQnLDKoAc9c92MsBW8AdpLe_51adHrXcN8uVv3NZd1juAGJHvoHsk26r70/exec";

  const onSubmit = async (data) => {
    const urlParams = new URLSearchParams({
      ...data,
      sheetName: "WelcomeForm",
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
    <section
      aria-labelledby="WelcomeBanner"
      className="p-2 md:p-10 mt-6 lg:mt-0 pt-0 min-h-[500px]"
    >
      <div className="bg-Primary-Blue-100 flex flex-col-reverse justify-center items-center gap-4 lg:flex-row min-h-[450px] rounded-xl p-4 md:p-10 4xl:px-64">
        {/* Left */}
        <div className="lg:w-[50%] flex justify-start 2xl:justify-center sm:ml-5 items-center">
          <div className="sm:bg-Primary-Blue-400 rounded-[3%]">
            <div className="sm:relative top-7 right-7">
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  welcomeData?.patient_image?.url
                }`}
                alt="Doctor consultation"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[50%] flex justify-center items-start flex-col gap-8 md:p-8 font-general-sans">
          <h2 className="text-[36px] sm:text-[42px] xs:text-[30px] font-semibold text-[#011632]">
            {welcomeData?.title}
          </h2>
          <p className="text-[18px] leading-8 text-justify">
            {welcomeData?.description}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex md:justify-center lg:justify-start items-center w-[100%]"
            noValidate
          >
            <div className="flex flex-row justify-center items-center">
              <div className="flex items-center xs:w-[210px] h-[55px] border border-[#cecece] bg-white rounded-l-md px-3 xs:px-1">
                <BsTelephone className="text-gray-500 mr-3 text-xl" />
                <input
                  type="tel"
                  name="Phone"
                  placeholder={welcomeData?.placeholder}
                  // Validation!
                  {...register("Phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="flex-1 bg-transparent text-sm outline-none"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center xs:w-[75px] w-[117px] h-[55px] bg-[#1376F8] rounded-r-md font-semibold text-white text-base hover:bg-[#0e60d3] transition-all"
              >
                {welcomeData?.button_text}
              </button>
              <FaWhatsappSquare
                className="text-6xl xss:hidden sm:ml-2 "
                color="green"
                onClick={() =>
                  window.open(
                    `https://wa.me/+91${welcomeData?.whatsapp_number}`,
                    "_blank"
                  )
                }
              />
            </div>
            {/* Error message below input */}
            {errors.Phone && (
              <span className="text-red-500 text-xs ml-2">
                {errors.Phone.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;
