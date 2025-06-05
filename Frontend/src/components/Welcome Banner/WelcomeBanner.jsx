import React from "react";
import img from "../../assets/Images/WelcomeBannerImg.png";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import axios from "axios";

function WelcomeBanner() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbzrCp1u7eYc8-KU31lX4pC7I4U1PTmeq43RVeuWu9Oqwu-VCTph1PVbMKLKPk878cND/exec";
    const form = e.target;

    const formData = new FormData(form);
    const data = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      data.append(key, value);
    }

    data.append("sheetName", "WelcomeForm");

    console.log([...data.entries()]); // Debug output

    axios
      .post(url, data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        alert(response.data);
        form.reset(); // Clear form on success
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Submission failed.");
      });
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
              <img src={img} alt="Doctor consultation" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[50%] flex justify-center items-start flex-col gap-8 md:p-8 font-general-sans">
          <h2 className="text-[36px] sm:text-[42px] xs:text-[30px] font-semibold text-[#011632]">
            Start Your Health Journey with Drs-4you.com
          </h2>
          <p className="text-[18px] leading-8 text-justify">
            Whether it’s your first visit or a follow-up, we’re here to help.
            Drs-4You makes scheduling your consultation quick and easy. Let’s
            guide you on the path to better health.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className=" flex md:justify-center lg:justify-start items-center w-[100%]">
            <div className="flex flex-row justify-center items-center">
              <div className="flex items-center xs:w-[210px] h-[55px] border border-[#cecece] bg-white rounded-l-md px-3 xs:px-1">
                <BsTelephone className="text-gray-500 mr-3 text-xl" />
                <input
                  type="tel"
                  name="Phone"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  className="flex-1 bg-transparent text-sm outline-none"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              <button
                type="submit"
                className="flex justify-center items-center xs:w-[75px] w-[117px] h-[55px] bg-[#1376F8] rounded-r-md font-semibold text-white text-base hover:bg-[#0e60d3] transition-all"
              >
                Submit
              </button>

              <FaWhatsappSquare  className="text-6xl xss:hidden sm:ml-2 " color="green" onClick={()=> window.open("https://wa.me/+918928473062", "_blank")}/>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;
