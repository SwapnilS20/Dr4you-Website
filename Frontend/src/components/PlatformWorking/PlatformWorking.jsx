import React from "react";
import WorkingCard from "./WorkingCard";
import PlatformWorkingImage from "../../assets/Images/PlatformWorkingImage.png";
import Plus from "../../assets/Images/Plus.png";

const PlatformWorking = () => {

  const dummyData = [
    {
      id: 1,
      title: "Create Your Profile",
      description:
        "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.",
    },
    {
      id: 2,
      title: "Choose Your Service",
      description:
        "Select from our range of services and book a consultation. Booking a consultation with Drs-4you is fairly simple and straight-forward.",
    },
    {
      id: 3,
      title: " Meet Your Doctor",
      description:
        "Connect with one of our certified specialists through a secure virtual consultation. Receive expert medical guidance from the comfort and safety of your home.",
    },
    
    
  ]

  return (
    <section className=" xl:px-60 px-4 mt-16 ">
      {/* main container */}
      <div className=" flex flex-col justify-center items-center gap-10">
        <h2 className=" text-4xl md:text-5xl font-manrope font-bold text-center text-Neutral-900">
          How <span className=" text-gradient-btn "> our platform </span> works
        </h2>
        <p className=" text-xl text-Neutral-300 max-w-[850px] text-justify">
          Navigating your healthcare journey with Drs-4You is simple and
          stress-free. Just follow the steps below to access your chosen
          services. For additional help, don’t forget to check out our FAQ
          section.
        </p>
        <div className=" flex flex-col-reverse lg:flex-row gap-x-32 gap-y-4">
          {/* working info left side */}
          <div className=" lg:w-[50%] ">
             {
              dummyData.map((data) => (
                <WorkingCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  content={data.description}
                />
              ))
             }
            
          </div>
          {/* image and text right side   */}
          <div className=" flex items-end justify-center lg:w-[50%]"> 
            <div className=" absolute w-[265px] h-[272px] lg:w-[404px] lg:h-[322px] border-2 border-Primary-Blue-300 rounded-[24px] bg-story-bg-left-gradient "></div>
            <img
              src={PlatformWorkingImage}
              alt=""
              className=" relative w-[324px] h-[402px] lg:w-[374px] lg:h-[452px] left-16 bottom-[2px]"
            />
            <img src={Plus} alt="" className=" relative lg:bottom-[263px] lg:-right-2 xs:right-6 xs:bottom-[215px] right-9 bottom-[215px]  " />
          </div>
        </div>
      </div>
    </section>
  );
};  

export default PlatformWorking;
