import React from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/aboutusimg.png";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Promise from "../../components/Our Promise/Promise";
import ceoimg from "../../assets/Images/founderimg.png";
import cooimg from "../../assets/Images/cooimg.png";
import TeamCard from "../../components/AboutUs/TeamCard";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import RichTextRenderer from "../../components/RichTextRenderer";

const AboutUs = () => {
  const Data = useSelector((state) => state.home.about);
  const teamData = useSelector((state) => state.home.team);

  const aboutData = {
    mission: Data?.dynamic_zone?.find(
      (item) => item.__component === "dynamic-zone.our-mission"
    ),
    vision: Data?.dynamic_zone?.find(
      (item) => item.__component === "dynamic-zone.our-vision"
    ),
  };

  return (
    <>
      <section className="bg-custom-gradient ">
        <div className="max-w-7xl mx-auto px-6 font-general-sans space-y-16 mt-16 ">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl text-center font-semibold text-gradient-btn">
            About Us
          </h1>

          {/* Mission and Image */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 pb-16">
            {/* Text Content */}
            <div className="w-full  lg:w-2/3 space-y-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-Primary-Blue-950">
                {aboutData?.mission?.heading }
              </h2>
              <div
                className="text-lg text-gray-800 leading-relaxed text-justify"
               >
                <RichTextRenderer content={aboutData?.mission?.content} />
               </div>
            
            </div>

            {/* Image */}
            <div className="w-full md:w-2/4 lg:w-2/4 xl:w-1/3">
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  aboutData?.mission?.image?.url
                }`}
                alt="About us illustration"
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Promise />
      {/* our vision  */}
      <div className=" flex justify-center items-center font-general-sans mt-28">
        <div className=" max-w-7xl flex flex-col-reverse lg:flex-row gap-12 bg-Primary-Blue-50 p-6 rounded-xl">
          <div
            className="text-lg text-gray-800 leading-relaxed text-justify bg-white p-4 rounded-xl"
            >
              <RichTextRenderer content={aboutData?.vision?.vision} />
            </div>
        
          <div className=" lg:w-3/4 ">
            <h2 className=" text-6xl font-semibold text-Primary-Blue-900 lg:text-center ">
              {aboutData?.vision?.title}
            </h2>
          </div>
        </div>
      </div>
      {/* our teams */}
      <div className=" flex flex-col justify-center items-center gap-16 my-24 ">
        <h2 className=" text-5xl text-Primary-Blue-900 font-general-sans font-semibold ">
          Our Team{" "}
        </h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center max-w-7xl gap-8">
          {teamData?.map((data, i) => (
            <TeamCard
              img={data.image.url}
              name={data.name}
              position={data.position}
              key={i}
            />
          ))}
        </div>
      </div>
      <AppointmentFORM />
      <FrequentlyAskedQuestion />
    </>
  );
};

export default AboutUs;
