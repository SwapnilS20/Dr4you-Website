import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
// Make sure this path is correct

const SpecialistCard = ({ img, name, category, LinkedinUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative w-[277px] h-[303px] flex flex-col items-center justify-end overflow-hidden bg-white">
        {/* Doctor Image */}
        <img src={img} alt="Doctor" className="object-cover w-full " />

        {/* LinkedIn Icon */}
        <div className="absolute top-4 right-4 ">
          <IoLogoLinkedin className=" text-[38px]" />
        </div>

        {/* Name & Role Overlay */}
        <div className="absolute bottom-[10px] w-[250px] bg-doctor-bg-gradient text-white px-4 py-2 rounded-[10px] backdrop-blur-sm">
          <h3 className="text-[16px] font-semibold">{name}</h3>
          <p className="text-sm ">{category}</p>
        </div>

        {/* Book Now Button */}
      </div>
      <div className=" bottom-4">
        <button className="bg-[#0D1B3E] text-base text-white px-6 py-2 rounded-[10px] hover:bg-[#10224f] transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SpecialistCard;
