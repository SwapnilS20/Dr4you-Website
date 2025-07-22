import React from "react";
import "remixicon/fonts/remixicon.css";
 
const ContactCard = ({ icon, heading, content, func }) => {
  

  return (
    <div className="lg:w-[450px]  ">
      <div
        onClick={func}
        className={`flex items-start gap-3 p-4 rounded-md bg-white drop-shadow-2xl transition-all hover:scale-[1.01]`}
      >
        <div
          className={`h-[53px] w-[53px] min-w-[2.5rem] rounded-full flex justify-center items-center text-white text-3xl bg-[#1376f8] ${
            func ? "cursor-pointer" : ""
          }`}
        >
          <i className={`remixicon ${icon}`}></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-left">
            <p className="font-semibold text-[18px]">{heading}</p>
            <p className="text-base text-gray-600">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
