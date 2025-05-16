import React from "react";
import { GoDotFill } from "react-icons/go";
import { GiHeartOrgan } from "react-icons/gi";
import { Link } from "react-router-dom";

const SpecialitiesCard = ({ data }) => {
  return (
    // main container
    <Link to={`/Category/${data.category}`}>
      <div className=" flex flex-col font-general-sans bg-Primary-Blue-50 p-6 gap-2 rounded-lg shadow-lg max-w-[420px]  ">
        <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full bg-Primary-Blue-400">
          <GiHeartOrgan className=" text-white text-5xl" />
        </div>
        <h3 className=" font-medium text-2xl">{data.category}</h3>
        <p className=" text-justify text-lg md:line-clamp-2 lg:line-clamp-2">
          {data.description}
        </p>
        <div className=" flex font-medium justify-start items-center gap-2">
          <span>
            <GoDotFill className=" text-Primary-Blue-400" />
          </span>
          <span className=" text-base">{data.doctors}+ Doctor </span>
        </div>
      </div>
    </Link>
    // end of main container
  );
};

export default SpecialitiesCard;
