import React from "react";
import aftercare from "../../assets/Images/aftercare.svg";
import consultation from "../../assets/Images/consultation.svg";
import treatment from "../../assets/Images/Bed.png";
import PathCard from "./PathCard";
import { FaAnglesRight } from "react-icons/fa6";

const HealthCarePath = () => {
  const pathData = [
    {
      id: 1,
      imagee: consultation,
      title: "Consultation",
      description:
        "Our Specialist team will discuss your symptons with you and advise on appropriate treatment tailored to you",
    },
    {
      id: 2,
      imagee: aftercare,
      title: "Support & Aftercare",
      description:
      "Our comprehensive aftercare provides support and guidance throughout your treatment and recovery journey.",
    },
    {
      id: 3,
      imagee: treatment,
      title: "Follow Up",
      description:
        "We provide one week of dedicated follow-up after your consultation to monitor your progress, address any concerns, and ensure your treatment is on the right track.",
    },
  ];
  return (
    <section className=" mt-16 p-4">
      <div className=" flex flex-col gap-y-20 justify-center items-center ">
        <h1 className=" font-general-sans font-bold text-4xl text-Primary-Blue-950 max-w-72 text-center ">
          Your Healthcare Pathway with Us
        </h1>
        <div className=" flex  flex-col lg:flex-row gap-4 justify-center items-center ">
          {pathData.map((data) => (
            <div key={data.id} className=" flex flex-col lg:flex-row gap-4 justify-center items-center">
              <PathCard
                img={data.imagee}
                title={data.title}
                description={data.description}
              />
              {data.id < pathData.length && <FaAnglesRight className=" text-Primary-Blue-950 text-6xl rotate-90 lg:rotate-0 " />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCarePath;
