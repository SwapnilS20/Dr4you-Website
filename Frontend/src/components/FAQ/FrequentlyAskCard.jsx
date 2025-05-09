import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const FrequentlyAskCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={` flex flex-col max-w-[600px]  p-4 rounded-lg fontgeneral-sans ${isOpen ? " bg-Primary-Blue-950" : " bg-white"}`}>
      <div className=" flex gap-2  justify-between items-center border-b-2 ">
        <div className=" flex justify-center items-center gap-2 p-2">
          <span>
            <GoDotFill className={`text-sm  ${isOpen ? " text-white" : " text-[#011632]"}`} />
          </span>
          <h3 className={` text-base md:text-[20px] font-medium ${isOpen ? " text-white" : " text-[#011632]"}`}>{question}</h3>
        </div>
        <span>
            {isOpen ? <FiMinusCircle className="  text-[24px] text-white  " onClick={()=>setIsOpen(!isOpen)} /> : <FiPlusCircle className="  text-[24px] text-[#011632]  " onClick={()=>setIsOpen(!isOpen)} />}
        </span>
      </div>
      <div className={` flex flex-col gap-2 p-4 min-h-[100px] ${isOpen ? "block" : "hidden"}`}>
        <p className={`text-base text-justify  text-white`}>{answer}</p>
      </div>
    </div>
  );
};

export default FrequentlyAskCard;
