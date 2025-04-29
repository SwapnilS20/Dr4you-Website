import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

function WhyChooseUs() {
  return (
    //flex justify-center items-center
    <section className=" min-h-[770px] py-20 md:px-14 ">
      {/* maxwidth1280px */}
      <div className="min-h-[630px] bg-Primary-Blue-50 rounded-xl border-2 border-[#99DDFF]">
        {/* heading - why choose us */}
        <div className="mt-10 ml-12 flex w-[220px] bg-Primary-Blue-200 justify-center items-center px-3 py-2 gap-3 rounded-3xl">
          <span className="w-4 h-4 bg-Primary-Blue-700 rounded-full"></span>
          <p className="font-general-sans text-xl">Why choose us</p>
        </div>
        {/* left div */}
        <div className="w-[50%] py-10 px-12 flex flex-col gap-10">
          <h2 className="text-Neutral-900 text-[40px]/[48px] font-manrope font-bold flex flex-col">
            Why Pick Us for{" "}
            <span className="text-gradient-btn">Your Healthcare</span>
          </h2>
          <div className="grid grid-cols-2">
            <WhyChooseUsCard/>
            <WhyChooseUsCard/>
            <WhyChooseUsCard/>
            <WhyChooseUsCard/>
          </div>
        </div>
        {/* right div */}
        <div className="w-[50%]"></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
