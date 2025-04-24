import React from "react";
import img from "../../assets/Images/WelcomeBannerimg.png";
import { BsTelephone } from "react-icons/bs";

function WelcomeBanner() {
  return (
    <section
      aria-labelledby="WelcomeBanner"
      className="p-2 md:p-10  pt-0 min-h-[500px]"
    >
      <div className="bg-Primary-Blue-100 flex flex-col-reverse gap-4 md:flex-row min-h-[450px] rounded-xl p-4 md:p-10">
        {/* Left */}
        <div className="md:w-[50%] flex justify-start ml-5 items-center">
          <div className="   bg-Primary-Blue-400  rounded-[3%]">
            <div className=" relative top-7 right-7 ">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="md:w-[50%] flex justify-center items-start flex-col gap-8 md:p-8 font-general-sans ">
          <div className="text-[42px]  font-semibold text-[#011632] ">
            Start Your Health Journey with Drs-4You.com
          </div>
          <div className=" text-[18px]  leading-8  text-justify ">
            Whether it’s your first visit or a follow-up, we’re here to
            help.Drs-4You makes scheduling your consultation quick and easy.
            Let’s guide you on the path to better health.
          </div>
          <div className=" flex flex-row">
          <div className="flex items-center min-w-auto h-[55px] border border-[#cecece] bg-white rounded-l-md px-3">
            <BsTelephone className="text-gray-500 mr-3 text-xl" />
            <input
                type="text"
                className="flex-1 bg-transparent text-sm outline-none"
                placeholder="Enter Your Phone Number"
            />
          </div>
            <div className=" flex justify-center items-center w-[117px] h-[55] bg-[#1376F8] rounded-r-md text-semibold text-white text-base">
              Submit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;
