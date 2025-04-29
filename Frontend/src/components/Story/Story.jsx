import React from "react";
import StoryImage from "../../assets/Images/StoryImg.png";
import Button from "../Button.jsx";
export default function Story() {
  return (
    <section className="min-h-[770px] py-20 px-4 md:px-14 flex justify-center items-center">
      <div className="min-h-[588px] max-w-[1280px] bg-story-bg-left-gradient lg:bg-story-bg-gradient rounded-xl border-2 border-[#99DDFF] flex flex-col gap-16 ">
        <h2 className="text-center  text-Neutral-900 text-[32px] font-manrope font-bold mt-12 flex md:block  flex-col items-center justify-center">
          <span className="text-gradient-btn">Drs-4you's Story: </span>Get to
          know us
        </h2>
        <div className="flex items-center flex-col lg:flex-row px-4 lg:pr-10">
          <div className="lg:w-[50%] flex justify-center items-center">
            <img className="sm:h-[300px] sm:w-[378px] md:w-[450px] lg:w-[378px] xl:w-[450px] lg:h-[345px]" src={StoryImage} alt="" />
          </div>
          <div className="lg:w-[50%] text-base lg:text-sm xl:text-base font-manrope font-semibold text-[#6D6D6D] py-12 md:p-10 lg:p-0 flex flex-col items-center lg:items-start justify-center ">
            <p className="text-justify">
              Drs-4You is more than just an online medical service—it’s a step
              towards accessible, efficient, and patient-focused healthcare. Our
              platform connects you with experienced doctors, healthcare
              professionals, and specialists from various fields, ensuring
              expert guidance and personalized treatment.
            </p>
            <p className="text-justify">
              We believe in delivering high-quality medical care tailored to
              your unique needs, no matter where you are. Built on trust,
              innovation, and a commitment to patient well-being, Drs-4You
              provides seamless consultations, second opinions, and ongoing
              healthcare support.
            </p>
            <p className="text-justify">
              With a network of certified practitioners and cutting-edge
              technology, we make healthcare simpler, faster, and more
              accessible—because your well-being is our priority.
            </p>
            <Button
              styles={
                "bg-[#00A4F4] text-white text-lg sm:text-2xl font-manrope font-bold rounded-lg px-8 py-3 mt-10 md:mt-6 hover:bg-opacity-80 transition duration-300 ease-in-out"
              }
            >
              Learn more about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
