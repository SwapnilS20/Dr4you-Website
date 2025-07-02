import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/HeroSectionMainImg.png";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import "../../index.css";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SpecialistInnerPage = () => {
  const { id } = useParams(); // ✅ FIXED: Extract id from param
  const [currentDoctor, setCurrentDoctor] = useState(null);

    const doctor = useSelector(
    (state) => state.doctors.doctors
  );

  console.log(doctor);
  
  

  useEffect(() => {
    const filteredDoctor = doctor?.find((item) => item.id === Number(id));
    setCurrentDoctor(filteredDoctor); 
    
  }, [id]);



  if (!currentDoctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading doctor details...
      </div>
    );
  }

  return (
    <>
      <section className="bg-custom-gradient min-h-screen">
       
        <div className="max-w-7xl mx-auto px-2 lg:px-6 py-16 flex flex-col gap-16">
          <h1 className="text-5xl md:text-6xl font-manrope font-bold text-center">
            Our <span className="text-gradient-btn">Specialist</span>
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
            <div className="flex w-full lg:w-[50%] justify-center xs:p-2">
              <img
                src={currentDoctor.image}
                alt={currentDoctor.name}
                className="w-[320px] md:w-[400px] h-auto rounded-3xl shadow-xl object-cover bg-[#9c9c9c] bg-opacity-35"
              />
            </div>

            <div className="w-full lg:w-[50%] items-center lg:items-start flex flex-col gap-4 font-general-sans p-6 pl-0 xs:p-2">
              <div className="text-Primary-Blue-900 space-y-1">
                <h2 className=" text-4xl md:text-5xl font-semibold">
                  {currentDoctor.name}
                </h2>
                <h3 className=" text-center lg:text-start text-xl md:text-2xl text-gray-600">
                  {currentDoctor.category}
                </h3>
              </div>
              <p className="text-lg max-w-[500px] text-gray-800 text-justify leading-relaxed">
                {currentDoctor.description}
              </p>
            </div>
          </div>

          {/* Message Section */}
          <div className="relative border-[1px] border-[#9c9c9c] shadow-md px-6 py-8 rounded-xl max-w-5xl mx-auto font-general-sans">
            <div className="mb-4">
              <span className="text-sm text-Primary-Blue-500">
                Message From -{" "}
              </span>
              <span className="text-lg font-semibold text-Primary-Blue-900">
                {currentDoctor.name}
              </span>
            </div>
            <p className="text-gray-700 text-[17px] leading-relaxed text-justify">
              "{currentDoctor.message}"
            </p>
          </div>
        </div>

        {/* Expertise, Education, Experience Sections */}
        <div className="mb-10">
          {/* Expertise */}
          <div className="flex">
            <div className="flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900"></div>
            <div className="lg:w-[50%] w-full px-8 relative">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl">
                Specialities & Expertise
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.expertise.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <FaCheck className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex lg:flex-row-reverse">
            <div className="flex w-[20%] lg:w-[50%] border-r-2 lg:border-none border-Primary-Blue-900"></div>
            <div className="flex flex-col lg:justify-end lg:items-end lg:w-[50%] w-full px-8 relative lg:border-r-2 border-Primary-Blue-900">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4 lg:left-[97%] xl:left-[98%] 2xl:left-[98.8%]">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl lg:text-end">
                Education & Training
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.education.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <FaGraduationCap className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex">
            <div className="flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900"></div>
            <div className="lg:w-[50%] w-full px-8 relative">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl">
                Experience
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.experience.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <MdWorkHistory className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
      <FrequentlyAskedQuestion />
      
    </>
  );
};

export default SpecialistInnerPage;
