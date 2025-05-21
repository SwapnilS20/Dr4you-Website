import React from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/HeroSectionMainImg.png";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import "../../index.css";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";

const SpecialistInnerPage = () => {
  const param = useParams();
  const doctor = {
    name: "Dr. Jacob Jones",
    category: "Interventional Cardiologist",
    image: img,
    description:
      "Dr. Jacob Jones is a compassionate and highly skilled cardiologist dedicated to improving heart health through personalized and preventive care. With a focus on early diagnosis, lifestyle management, and advanced cardiac treatments, Dr. Jones helps patients take control of their cardiovascular well-being. His attentive approach and years of expertise make him a trusted choice for individuals seeking comprehensive heart care.",
    message:
      "Heart health is more than just medicine—it's about understanding, support, and long-term care. With years of experience in interventional cardiology, I am committed to providing personalized treatment plans tailored to each patient’s unique needs. Whether it’s managing chronic conditions or performing life-saving procedures, my goal is to ensure every patient feels confident, informed, and cared for at every step of their journey. Your heart deserves expert attention, and I’m here to provide it.",
    expertise: [
      "Diagnosis & management of heart disease",
      "Coronary angioplasty & stenting",
      "Hypertension & cholesterol management",
      "ECG, echocardiography, and stress testing",
    ],
    education: [
      "MBBS – Harvard Medical School",
      "MD (Internal Medicine) - Johns Hopkins University",
      "DM Cardiology - Cleveland Clinic, Ohio",
    ],
    experience: [
      "Senior Interventional Cardiologist Metro Heart Institute, New York (Present)",
      "Consultant Cardiologist CardioCare Hospitals (2015–2021)",
      "Cardiology Resident  Cleveland Clinic (2012–2015)",
    ],
  };

  return (
    <>
      <section className="bg-custom-gradient min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-2 lg:px-6 py-16 flex flex-col gap-16">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-manrope font-bold text-center">
            Our <span className="text-gradient-btn">Specialist</span>
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
            {/* Doctor Image */}
            <div className="flex w-full lg:w-[50%] justify-center xs:p-2">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-[320px] md:w-[400px] h-auto rounded-3xl shadow-xl object-cover bg-[#9c9c9c] bg-opacity-35"
              />
            </div>

            {/* Doctor Details */}
            <div className=" w-full lg:w-[50%]  items-center flex flex-col gap-4 font-general-sans p-6 pl-0 xs:p-2">
              <div className="text-Primary-Blue-900 space-y-1">
                <h2 className="text-4xl md:text-5xl font-semibold">
                  {doctor.name}
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-600">
                  {doctor.category}
                </h3>
              </div>
              <p className="text-lg max-w-[500px] text-gray-800 text-justify leading-relaxed">
                {doctor.description}
              </p>
            </div>
          </div>

          {/* Message Section */}
          <div className="relative border-[1px]   border-[#9c9c9c] shadow-md px-6 py-8 rounded-xl max-w-5xl mx-auto font-general-sans">
            <div className="mb-4">
              <span className="text-sm text-Primary-Blue-500">
                Message From -{" "}
              </span>
              <span className="text-lg font-semibold text-Primary-Blue-900">
                {doctor.name}
              </span>
            </div>
            <p className="text-gray-700 text-[17px] leading-relaxed text-justify">
              "{doctor.message}"
            </p>
          </div>
        </div>

        {/* training , experience , education */}
        <div className=" mb-10">
          {/* 1st */}
          <div className=" flex">
            <div className=" flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900   "></div>

            <div className=" lg:w-[50%] w-full px-8 relative ">
              <div className=" flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute  top-0 -left-4">
                <div className=" w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className=" text-Primary-Blue-900 text-3xl xl:text-5xl  ">
                Specialities & Expertise
              </h3>
              <div className=" flex flex-col gap-4 my-6">
                {doctor.expertise.map((data, i) => (
                  <div
                    className=" flex items-start xl:items-center gap-2"
                    key={i}
                  >
                    <div className=" flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient  mt-[4px] lg:mt-0">
                      <FaCheck className=" text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className=" flex lg:flex-row-reverse ">
            <div className=" flex  w-[20%] lg:w-[50%]  border-r-2 lg:border-none border-Primary-Blue-900   "></div>

            <div className=" flex flex-col lg:justify-end lg:items-end  lg:w-[50%] w-full px-8 relative lg:border-r-2 border-Primary-Blue-900  ">
              <div className=" flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute  top-0 -left-4 lg:left-[97%] xl:left-[98%] 2xl:left-[98.8%] ">
                <div className=" w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className=" text-Primary-Blue-900 text-3xl xl:text-5xl lg:text-end  ">
                Education & Training
              </h3>
              <div className=" flex flex-col gap-4 my-6">
                {doctor.education.map((data, i) => (
                  <div
                    className=" flex items-start xl:items-center gap-2"
                    key={i}
                  >
                    <div className=" flex justify-center items-center text-white p-1  xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <FaGraduationCap className=" text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className=" flex">
            <div className=" flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900   "></div>
            <div className=" lg:w-[50%] w-full px-8 relative ">
              <div className=" flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute  top-0 -left-4">
                <div className=" w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className=" text-Primary-Blue-900 text-3xl xl:text-5xl">
                Experience
              </h3>
              <div className=" flex flex-col gap-4 my-6">
                {doctor.experience.map((data, i) => (
                  <div
                    className=" flex items-start xl:items-center gap-2"
                    key={i}
                  >
                    <div className=" flex justify-center items-center text-white p-1  xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0 ">
                      <MdWorkHistory className=" text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
      <FrequentlyAskedQuestion />
      <Footer />
    </>
  );
};

export default SpecialistInnerPage;
