import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const FrequentlyAskCard = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={` flex flex-col max-w-[600px]  p-4 rounded-lg fontgeneral-sans ${
        isOpen ? " bg-Primary-Blue-950" : " bg-white"
      }`}
    >
      <div className=" flex gap-2  justify-between items-center border-b-2 ">
        <div className=" flex justify-center items-center gap-2 p-2">
          <span>
            <GoDotFill
              className={`text-sm  ${
                isOpen ? " text-white" : " text-[#011632]"
              }`}
            />
          </span>
          <h3
            className={` text-base md:text-[20px] font-medium ${
              isOpen ? " text-white" : " text-[#011632]"
            }`}
          >
            {data?.question}
          </h3>
        </div>
        <span>
          {isOpen ? (
            <FiMinusCircle
              className="  text-[24px] text-white  "
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FiPlusCircle
              className="  text-[24px] text-[#011632]  "
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </span>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-200 ease-in-out 
          ${
            isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }
        `}
      >
        <p className="text-base text-justify text-white">{data?.answer}</p>
      </div>
    </div>
  );
};

export default FrequentlyAskCard;
