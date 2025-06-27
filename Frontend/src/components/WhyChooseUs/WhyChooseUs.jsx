import React from "react";
import "remixicon/fonts/remixicon.css";
import WhyChooseUsCard from "./WhyChooseUsCard";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import { useSelector } from "react-redux";

function WhyChooseUs() {
  const chooseUsData = useSelector((state) => state.home.WhyChooseUs);

  const input = chooseUsData?.on_image_percentage;
  const index = input?.indexOf("%");

  const part1 = input?.slice(0, index + 1); 
  const part2 = input?.slice(index + 1);

  return (
    //flex justify-center items-center
    <section className=" min-h-[770px] py-20 md:px-14 flex justify-center items-center">
      {/* maxwidth1280px */}
      <div className=" flex gap-16 flex-col min-h-[630px] max-w-[1380px] bg-Primary-Blue-50 rounded-xl lg:border-2 border-[#99DDFF] xl:px-20 xl:py-8 lg:px-4">
        {/* heading - why choose us */}
        <div className="mt-10 ml-12 flex w-[220px] bg-Primary-Blue-200 justify-center items-center px-3 py-2 gap-3 rounded-3xl">
          <span className="w-4 h-4 bg-Primary-Blue-700 rounded-full"></span>
          <p className="font-general-sans text-xl">
            {chooseUsData?.section_name}
          </p>
        </div>
        <div className="flex  flex-col-reverse lg:flex-row gap-8 ">
          {/* left div */}
          <div className="lg:w-[50%]  flex flex-col  gap-4 ">
            <h2 className="text-Neutral-900 text-[40px]/[48px] text-center lg:text-start font-manrope font-bold flex flex-col  ">
              {chooseUsData?.title_line1}
              <span className="text-gradient-btn">
                {chooseUsData?.title_line2}
              </span>
            </h2>
            <div className="grid grid-cols-2  gap-3 p-4">
              {chooseUsData?.Why_Choose_Items?.map((data) => (
                <WhyChooseUsCard key={data.id} ChooseUsData={data} />
              ))}
            </div>
          </div>
          {/* right div */}
          <div className="lg:w-[50%] flex items-center justify-center relative">
            <div className="md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]  bg-Primary-Blue-700 rounded-full absolute  bottom-52 left-6 xs:left-0 md:left-28 md:bottom-60 lg:-left-8 lg:bottom-96  flex flex-col justify-center items-center">
              <div className="flex flex-col text-white font-manrope text-5xl ">
                <span className="font-bold text-lg sm:text-4xl text-center">
                  {part1}
                </span>
                <span className="text-base text-center"> {part2}</span>
              </div>
            </div>
            <div className="bg-Neutral-200 xs:w-[280px] w-[280px] sm:w-[342px] lg:w-[553px] flex justify-center items-center rounded-xl">
              <img className="" src={`${import.meta.env.VITE_STRAPI_URL}${
              chooseUsData?.doctor_image?.url
            }`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
