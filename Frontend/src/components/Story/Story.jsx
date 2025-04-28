import React from "react";
import StoryImage from "../../assets/Images/StoryImg.png";
import Button from "../Button.jsx";
export default function Story() {
  return (
    <section className="min-h-[770px]  py-20 px-14">
      <div className="min-h-[588px] bg-story-bg-gradient rounded-xl border-2 border-[#99DDFF] flex flex-col gap-8">
        <h2 className="text-center  text-Neutral-900 text-[32px] font-manrope font-bold mt-12">
          <span className="text-gradient-btn">Drs-4you's Story:</span>Get to
          know us
        </h2>
        <div className="flex items-start px-20">
          <div className="w-[50%] flex justify-center items-center">
            <img className="w-[450px]" src={StoryImage} alt="" />
          </div>
          <div className="w-[50%] ">
            <p className="text-base font-manrope font-semibold text-[#6D6D6D]">
              Drs-4You is more than just an online medical service—it’s a step
              towards accessible, efficient, and patient-focused healthcare. Our
              platform connects you with experienced doctors, healthcare
              professionals, and specialists from various fields, ensuring
              expert guidance and personalized treatment. We believe in
              delivering high-quality medical care tailored to your unique
              needs, no matter where you are. Built on trust, innovation, and a
              commitment to patient well-being, Drs-4You provides seamless
              consultations, second opinions, and ongoing healthcare support.
              With a network of certified practitioners and cutting-edge
              technology, we make healthcare simpler, faster, and more
              accessible—because your well-being is our priority.
            </p>
            <Button styles={"bg-[#00A4F4] text-white text-2xl font-manrope font-bold rounded-lg px-6 py-2 mt-4 hover:bg-opacity-80 transition duration-300 ease-in-out"}>
                Learn more about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
