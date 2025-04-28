import React from "react";
import SpecialitiesCard from "./SpecialitiesCard";
import { BsArrowLeft } from "react-icons/bs";

const Specialist = () => {
  return (
    <section className=" flex flex-col gap-4 mt-12 ">
      {/* Heading and arrow buttons */}
      <div className=" flex">
        <div className=" w-[100vw] flex justify-center">
          <div className=" text-4xl md:text-6xl font-manrope font-bold">
            Our <span className="text-gradient-btn ">specialities</span>{" "}
          </div>
        </div>

        <div className=" hidden md:flex gap-4 justify-center items-center mr-12 ">
          <div className=" w-12 h-12 rounded-full border border-Primary-Blue-700  flex items-center justify-center ">
            <BsArrowLeft className=" text-Primary-Blue-700  text-2xl " />{" "}
          </div>
          <div className=" w-12 h-12 rounded-full border border-Primary-Blue-700  flex items-center justify-center ">
            <BsArrowLeft className=" text-Primary-Blue-700  text-2xl rotate-180 " />{" "}
          </div>
        </div>
      </div>
      <div className=" grid place-items-center place-content-center gap-12 p-4 md:p-4 lg:p-8 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 ">
        <SpecialitiesCard />
        <SpecialitiesCard />
        <SpecialitiesCard />
        <SpecialitiesCard />
        <SpecialitiesCard />
        <SpecialitiesCard />
      </div>
    </section>
  );
};

export default Specialist;
