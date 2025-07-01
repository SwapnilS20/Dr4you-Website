import React from "react";
import StoryImage from "../../assets/Images/StoryImg.png";
import Button from "../Button.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Story() {

  const storyData = useSelector((state)=>state.repeatable.OurStory)
  const navigate = useNavigate()
  
  
  return (
    <section className="min-h-[770px] py-20 px-4 md:px-14 flex justify-center items-center">
      <div className="min-h-[588px] max-w-[1280px] bg-story-bg-left-gradient lg:bg-story-bg-gradient rounded-xl border-2 border-[#99DDFF] flex flex-col gap-16 ">
        <h2 className="text-center  text-Neutral-900 text-[32px] font-manrope font-bold mt-12 flex md:block  flex-col items-center justify-center">
          <span className="text-gradient-btn">{storyData?.highlighting_head} </span>
          {storyData?.normal_head}
        </h2>
        <div className="flex items-center flex-col lg:flex-row px-4 lg:pr-10">
          <div className="lg:w-[50%] flex justify-center items-center">
            <img className="sm:h-[300px] sm:w-[378px] md:w-[450px] lg:w-[378px] xl:w-[450px] lg:h-[345px]"  src={`${import.meta.env.VITE_STRAPI_URL}${
              storyData?.story_image?.url
            }`} alt="" />
          </div>
          <div className="lg:w-[50%] text-base lg:text-sm xl:text-base font-manrope font-semibold text-[#6D6D6D] py-12 md:p-10 lg:p-0 flex flex-col items-center lg:items-start justify-center ">
           <p className=" text-justify">
            {storyData?.story_description}
            </p>
            <Button
              styles={
                "bg-[#00A4F4] text-white text-lg sm:text-2xl font-manrope font-bold rounded-lg px-8 py-3 mt-10 md:mt-6 hover:bg-opacity-80 transition duration-300 ease-in-out"
              }
              onClick={() => navigate("/about")}
            >
             {storyData?.button_text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
