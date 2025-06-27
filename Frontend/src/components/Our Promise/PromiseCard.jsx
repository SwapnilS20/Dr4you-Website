import React from "react";


const PromiseCard = ({img , title , description}) => {
  return (
    // main container
    <div className=" flex flex-col justify-center items-center font-general-sans bg-Primary-Blue-50 p-6 gap-2 rounded-lg shadow-lg max-w-[317px]  2xl:max-w-[350px] transition-all duration-200 ease-in-out    hover:-translate-y-4">
      <div className=" w-[80px] h-[78px]">
       <img src={img} alt="" />
      </div>
      <h3 className=" font-medium text-2xl text-center">{title}</h3>
      <p className=" text-justify text-lg">
       {description}
      </p>
    </div>
  );
};

export default PromiseCard;
