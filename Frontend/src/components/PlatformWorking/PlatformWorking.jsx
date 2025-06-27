import React, { use } from "react";
import WorkingCard from "./WorkingCard";
import PlatformWorkingImage from "../../assets/Images/PlatformWorkingImage.png";
import Plus from "../../assets/Images/Plus.png";
import { useSelector } from "react-redux";

const PlatformWorking = () => {
  const platformWorkingData = useSelector((state) => state.home.PlatformWork);

  

  return (
    <section className=" xl:px-60 px-4 mt-16 ">
      {/* main container */}
      <div className=" flex flex-col justify-center items-center gap-10">
        <h2 className=" text-4xl md:text-5xl font-manrope font-bold text-center text-Neutral-900">
          How <span className=" text-gradient-btn "> our platform </span> works
        </h2>
        <p className=" text-xl text-Neutral-300 max-w-[850px] text-justify">
          {platformWorkingData?.description}
        </p>
        <div className=" flex flex-col-reverse lg:flex-row gap-x-32 gap-y-4">
          {/* working info left side */}
          <div className=" lg:w-[50%] ">
            {platformWorkingData?.platform_steps?.map((data, i) => (
              <WorkingCard
                key={data.id}
                id={i + 1}
                title={data.step_head}
                content={data.step_description}
              />
            ))}
          </div>
          {/* image and text right side   */}
          <div className=" flex items-end justify-center lg:w-[50%]">
            <div className=" absolute w-[265px] h-[272px] lg:w-[404px] lg:h-[322px] border-2 border-Primary-Blue-300 rounded-[24px] bg-story-bg-left-gradient "></div>
            <img
              src={`${import.meta.env.VITE_STRAPI_URL}${
                platformWorkingData?.working_image?.url
              }`}
              alt=""
              className=" relative w-[324px] h-[402px] lg:w-[374px] lg:h-[452px] left-16 bottom-[2px]"
            />
            <img
              src={Plus}
              alt=""
              className=" relative lg:bottom-[263px] lg:-right-2 xs:right-6 xs:bottom-[215px] right-9 bottom-[215px]  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformWorking;
