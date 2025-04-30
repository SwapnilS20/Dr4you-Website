import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";

function WhyChooseUs() {
  const ChooseUsDataArr = [
    {
      id: 1,
      title: "More Experience",
      description:
        "We offer a range of health services to meet your needs.",
    },
    {
      id: 2,
      title: "Trusted Experts",
      description:
        "Certified doctors with real-world experience.",
    },
    {
      id: 3,
      title: " Patient-Centered Care",
      description:
        "Your needs, our top priority—always.",
    },
    {
      id: 4,
      title: "One-Stop Access",
      description:
        "All essential services in one place.",
    },
  ]
  return (
    //flex justify-center items-center
    <section className=" min-h-[770px] py-20 md:px-14 flex justify-center items-center">
      {/* maxwidth1280px */}
      <div className="min-h-[630px] max-w-[1280px] bg-Primary-Blue-50 rounded-xl border-2 border-[#99DDFF]">
        {/* heading - why choose us */}
        <div className="mt-10 ml-12 flex w-[220px] bg-Primary-Blue-200 justify-center items-center px-3 py-2 gap-3 rounded-3xl">
          <span className="w-4 h-4 bg-Primary-Blue-700 rounded-full"></span>
          <p className="font-general-sans text-xl">Why choose us</p>
        </div>
        <div className="flex py-10 px-12 gap-12">
          {/* left div */}
        <div className="w-[50%]  flex flex-col gap-12">
          <h2 className="text-Neutral-900 text-[40px]/[48px] font-manrope font-bold flex flex-col">
            Why Pick Us for{" "}
            <span className="text-gradient-btn">Your Healthcare</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {ChooseUsDataArr.map((data) => (
              <WhyChooseUsCard key={data.id} ChooseUsData={data} />
            ))}
          </div>
        </div>
        {/* right div */}
        <div className="w-[50%] flex items-center justify-center relative">
          <div className="w-[150px] h-[150px] bg-Primary-Blue-700 rounded-full absolute  top-0 left-0 flex flex-col justify-center items-center">
            <div className="flex flex-col text-white font-manrope text-5xl">
            <span className="font-bold">22<span className="font-extrabold">+</span></span>
            <span className="text-base">Experience</span>

            </div>
          </div>
          <div className="bg-Neutral-200 w-[553px] flex justify-center items-center rounded-xl">
            <img className="" src={HeroImg} alt="" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
