import React from "react";

const ContactCard = ({ icon, heading, content, func }) => {
  const Wrapper = func ? "button" : "div";

  return (
    <div className="xl:w-[450px]  lg:w-[40vw]">
      <Wrapper
        onClick={func}
        className={`flex items-start gap-3 p-4 rounded-md bg-white drop-shadow-2xl transition-all hover:scale-[1.01] ${
          func ? "cursor-pointer" : ""
        }`}
      >
        <div className="h-[53px] w-[53px] min-w-[2.5rem] rounded-full flex justify-center items-center text-white text-2xl bg-[#1376f8]">
          {icon}
        </div>
        <div className="flex flex-col items-center">
          <div className="text-left">
          <p className="font-semibold text-[18px]">{heading}</p>
          <p className="text-base text-gray-600">{content}</p>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactCard;
