import React from "react";
import { GoDotFill } from "react-icons/go";
import { GiHeartOrgan } from "react-icons/gi";

const SpecialitiesCard = ({ img, category, description, doctors }) => {
  return (
    // main container
    <div className=" flex flex-col font-general-sans bg-Primary-Blue-50 p-6 gap-2 rounded-lg shadow-lg max-w-[420px]  ">
      <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full bg-Primary-Blue-400">
        <GiHeartOrgan className=" text-white text-5xl"/>
      </div>
      <h3 className=" font-medium text-2xl">{category}</h3>
      <p className=" text-justify text-lg md:line-clamp-2 lg:line-clamp-2">{description}</p>
      <div className=" flex font-medium justify-start items-center gap-2">
        <span>
          <GoDotFill className=" text-Primary-Blue-400" />
        </span>
        <span className=" text-base">{doctors}+ Doctor </span>
      </div>
    </div>
  );
};

export default SpecialitiesCard;
