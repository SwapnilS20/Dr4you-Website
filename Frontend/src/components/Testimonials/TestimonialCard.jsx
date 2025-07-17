import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const TestimonialCard = ({ data }) => {
  const decimalPart =
    data?.our_rating_outof5 - Math.floor(data?.our_rating_outof5);
  return (
    <div className=" flex flex-col gap-4 max-w-[413px] min-h-[290px] rounded-md p-8 shadow-lg md:shadow-xl">
      <div className=" flex gap-4 justify-start items-center">
        <img
          src={`${import.meta.env.VITE_STRAPI_URL}${data?.patient_image?.url}`}
          alt=""
          className=" w-[70px] h-[70px] rounded-full object-cover"
        />
        <div className=" flex flex-col gap-2">
          <h2 className=" text-2xl">{data?.patient_name}</h2>
          <div className=" flex gap-1">
            {Array.from(
              { length: data?.our_rating_outof5 },
              (_, i) => (
                <FaStar key={i} className="text-yellow-400 text-base" />
              )
            )}
            {decimalPart > 0.4 && <FaStarHalf className="text-yellow-400 text-base" />}
          </div>
        </div>
      </div>

      <div>
        <p className=" text-base font-manrope text-justify text-Neutral-600">
          {data?.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
