import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ img, name, rating, feedback }) => {
  return (
    <div className=" flex flex-col gap-4 max-w-[413px] min-h-[290px] rounded-md p-8 shadow-lg md:shadow-xl">
      <div className=" flex gap-4 justify-start items-center">
        <img
          src={img}
          alt=""
          className=" w-[70px] h-[70px] rounded-full object-cover"
        />
        <div className=" flex flex-col gap-2">
          <h2 className=" text-2xl">{name}</h2>
          <div className=" flex gap-1">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-base" />
              ))}
          </div>
        </div>
      </div>

      <div>
        <p className=" text-base font-manrope text-justify text-Neutral-600">
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
