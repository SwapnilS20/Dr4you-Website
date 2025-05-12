import React from "react";
import CalendarIcon from "../../assets/Images/CalendarIcon.png";

const PromiseCard = () => {
  return (
    // main container
    <div className=" flex flex-col justify-center items-center font-general-sans bg-Primary-Blue-50 p-6 gap-2 rounded-lg shadow-lg max-w-[317px]  2xl:max-w-[350px] transition-all duration-200 ease-in-out    hover:-translate-y-4">
      <div className=" w-[80px]">
       <img src={CalendarIcon} alt="" />
      </div>
      <h3 className=" font-medium text-2xl">Cardiology</h3>
      <p className=" text-justify text-lg">
        Heart health is at the core of overall wellness. Our cardiologists
        specialize in diagnosing and treating cardiovascular diseases.
      </p>
    </div>
  );
};

export default PromiseCard;
