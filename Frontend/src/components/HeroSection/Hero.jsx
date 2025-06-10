import React from "react";
import { useState } from "react";
import "../../index.css";
import Button from "../Button";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import commentImg1 from "../../assets/Images/commentImg1.jpg";
import commentImg2 from "../../assets/Images/commentImg2.jpg";
import commentImg3 from "../../assets/Images/commentImg3.jpg";
import commentImg4 from "../../assets/Images/commentImg4.jpg";

import { FaStar, FaStarHalf } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";
import NumberAnimation from "./NumberAnimation";
import useFetch from "../../Hooks/useFetch";

const Hero = () => {
  const commentImages = [commentImg1, commentImg2, commentImg3, commentImg4];
  const { loading, data, error } = useFetch();

  const InfoData= [
    {
      id: 1,
      number: 60,
      text: "Expert Specialists",
    },
    {
      id: 2,
      number: 500,
      text: "Patients Served",
    },
    {
      id: 3,
      number: 22,
      text: "Medical Services",
      span:true
    },
  ];

  return (
    // Main Container
    <div className=" flex flex-col lg:flex-row  h-full p-4 sm:p-10 md:p-5 lg:p-0 4xl:px-64 ">
      {/* left side    */}
      <div className="flex flex-col gap-6 mt-4 sm:gap-10 lg:w-[50%] md:pl-[0px] lg:pl-[50px]  lg:mt-[120px] xl:mt-[120px]">
        {/* Tagline */}
        <h1 className=" font-manrope font-bold  text-[28px] sm:text-[46px] xs:text-[26px]  ">
          Connecting You to Experts. <br />{" "}
          <p className=" py-2 text-gradient-btn font-extrabold line-clamp-2 text-justify animate-typing overflow-hidden whitespace-nowrap delay-200 sm:text-[36px] xl:text-[34px] 2xl:text-[40px]  ">
            Every patient, <br className=" sm:hidden  lg:block xl:hidden" />Every time, Everywhere 
          </p>
        </h1>
        {/* Description */}
        <p className=" font-manrope text-base text-justify">
          From Consultation to Clarity—We’re With You.Get personalized care from
          home with Drs-4You. Whether it’s your first consultation or a
          follow-up, connect with certified doctors across specialties. From
          expert medical advice to prescriptions and appointments—healthcare
          made simple, secure, and supportive.
        </p>
        {/* Button and contact */}
        <div className="flex flex-row justify-evenly sm:justify-center lg:justify-start gap-4 md:gap-16 lg:gap-4">
          <Button
            styles={
              " sm:h-[56px] h-[52px] sm:w-[227px] w-[172px] sm:text-[16px] text-[14px] bg-btn-gradient btn-hover-effect  "
            }
            children={"Book an Appointment"}
          onClick={() => window.open("https://cloud.softlinkinternational.com/IBH_TeleHealth/Login/AppointmentPage")}

          />
          {/* contact */}
          <div className=" flex gap-4 items-center">
            <div className="border-gradient-btn h-[55px] w-[55px] rounded-[20%]  p-[1px] " onClick={()=>window.location.href ="tel:022 6901 2250"}>
              <div className=" flex justify-center items-center bg-white h-full w-full rounded-[20%] p-[4px] ">
                <span className=" flex items-center justify-center bg-bg-gradient h-full w-full rounded-[15%] ">
                  {" "}
                  <BiSolidPhoneCall className=" text-[#1376F8] text-2xl " />{" "}
                </span>
              </div>
            </div>
            <div  className=" flex flex-col text-base font-general-sans  ">
              <span className=" text-[#1376F8] font-semibold">Contact Us</span>
              <a
                href="tel:8655910652"
                className=" font-normal text-[12px] sm:text-base"
              >
                +91 8655910652
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 place-items-center lg:w-[25vw]">
          {
            InfoData.map((data) => (  
              < NumberAnimation 
                key={data.id}
                number={data.number}
                text={data.text}
                span={data.span}
                />))
          }
        </div>
      </div>

      {/* right side */}
      <div className=" flex flex-col justify-center sm:justify-start lg:justify-center items-center   lg:w-[50%] mt-4 sm:mt-4 md:mt-2 lg:mt-0  ">
        {/* Background Circle and Image */}
        <div className="absolute lg:w-[396px] lg:h-[402px] w-[310px] h-[378px] bg-ImgBack-gradient rounded-t-[300px] md:mt-6 lg:mt-0   "></div>

        <div>
          <img
            src={HeroImg}
            alt=""
            className=" relative lg:w-[482px] lg:h-[476px] w-[382px] h-[376px] left-4 lg:top-[123px] sm:top-6    "
          />
        </div>

        {/* Comment Section */}
        {/* comment one */}
        <div className=" hidden relative w-[241px] h-[128px] bg-white border-2 border-[#95DDFF] rounded-xl shadow-md p-4   lg:flex flex-col justify-between left-44 lg:left-32 xl:left-44 lg:bottom-44 bottom-48 sm:bottom-54 ">
          {/* Top: Images + Number */}
          <div className="flex items-center justify-between">
            {/* Images */}
            <div className="flex -space-x-3">
              {commentImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="user"
                  className="w-[37px] h-[37px] rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            {/* Count */}
            <div className="text-xl font-bold text-gray-900">
              2400<span className="text-blue-500 font-semibold">+</span>
            </div>
          </div>

          {/* Middle: Text */}
          <div className="mt-2 text-base text-Primary-Blue-500 font-manrope font-bold">
            Happy Patients
          </div>

          {/* Bottom: Stars */}
          <div className="flex items-center gap-1 text-yellow-400 text-xl">
            <div className="flex">
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStarHalf className="text-yellow-400 text-base" />
            </div>
            <span className="text-gray-500 text-sm ml-1">(4.7 Stars)</span>
          </div>
        </div>

        {/* comment two */}
        <div className=" hidden relative lg:flex justify-center items-center gap-2 w-[296px] h-[44px] rounded-[10px] bg-white shadow-md lg:bottom-44 bottom-52 right-40">
          <div className=" flex justify-center items-center w-[28px] h-[28px] bg-Primary-Blue-50">
            {" "}
            <FaStar className="text-Primary-Blue-700 text-base  " />{" "}
          </div>
          <div className=" font-manrope font-bold text-base">
            Easy Appointment Booking
          </div>
        </div>

        {/* comment Three */}
        <span className=" hidden sm:flex relative lg:bottom-28 bottom-52 text-Primary-Blue-500 text-6xl right-2 z-10  ">
          <BsQuote />
        </span>
        <div className=" relative hidden lg:flex justify-center items-center gap-2 w-[300px] h-[88px] rounded-[10px] bg-white border-2 border-[#95DDFF] lg:shadow-md left-24 xl:left-28 lg:bottom-36 bottom-60 ">
          <div className=" text-center  text-base ">
            Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit
            doloras.{" "}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Hero;
