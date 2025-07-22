import React from "react";
import aftercare from "../../assets/Images/aftercare.svg";
import consultation from "../../assets/Images/consultation.svg";
import treatment from "../../assets/Images/Bed.png";
import PathCard from "./PathCard";
import { FaAnglesRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

const HealthCarePath = () => {
  const pathData = useSelector((state) => state.repeatable.HealthcarePathway);
 

  return (
    <section className=" mt-16 p-4 mb-16">
      <div className=" flex flex-col gap-y-20 justify-center items-center ">
        <h1 className=" font-general-sans font-bold text-4xl text-Primary-Blue-950 max-w-72 text-center ">
          {pathData?.heading}
        </h1>
        <div className=" flex  flex-col lg:flex-row gap-4 justify-center items-center ">
          {pathData?.pathway_card?.map((data , index) => (
            <div key={data.id} className=" flex flex-col lg:flex-row gap-4 justify-center items-center">
              <PathCard
                img={data.icon.url}
                title={data.title}
                description={data.description}
              />
              {index <= pathData?.pathway_card?.length && <FaAnglesRight className=" text-Primary-Blue-950 text-6xl rotate-90 lg:rotate-0 " />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCarePath;
