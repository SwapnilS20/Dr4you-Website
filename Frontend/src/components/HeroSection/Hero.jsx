import React from "react";
import "../../index.css";
import Button from "../Button";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import commentImg1 from "../../assets/Images/commentImg1.jpg";
import commentImg2 from "../../assets/Images/commentImg2.jpg";
import commentImg3 from "../../assets/Images/commentImg3.jpg";
import commentImg4 from "../../assets/Images/commentImg4.jpg";

import { FaStar , FaStarHalf } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";


const Hero = () => {
  const commentImages = [
    commentImg1,
    commentImg2,
    commentImg3,
    commentImg4,
  ];

  return (
    // Main Container
    <div className=" flex flex-col sm:flex-row  h-full ">


      {/* left side    */}
      <div className="flex flex-col gap-10  sm:w-[50%] md:pl-[77px]  smmt-[120px]">
        {/* Tagline */}
        <div className=" font-manrope font-bold">
          Connecting You to Experts. <br />{" "}
          <span className="text-gradient-btn font-extrabold">
            Anytime, Anywhere.
          </span>
        </div>
        {/* Description */}
        <div className=" font-manrope text-base">
          From Consultation to Clarity—We're With You. Get personalized care
          from home with Drs-4You. Whether you need a second opinion or a new
          consultation, connect with certified doctors across specialties. From
          expert advice to prescriptions and appointments—healthcare made easy.
        </div>
        {/* Button and contact */}
        <div className="flex flex-row gap-10">
            <Button styles={' h-[56px] , w-[227px] , text-base , sm:text-[14px] '} children={"Book an Appointment"}/>

            <div className=" flex gap-4 items-center">
                <div className="border-gradient-btn h-[55px] w-[55px] rounded-[20%]  p-[1px] ">
                    <div className=" flex justify-center items-center bg-white h-full w-full rounded-[20%] p-[4px] ">
                       <span className=" flex items-center justify-center bg-bg-gradient h-full w-full rounded-[15%] "> <BiSolidPhoneCall className=" text-[#1376F8] text-2xl "  /> </span>
                    </div>
                </div>
                <div className=" flex flex-col text-base font-general-sans  ">
                    <span className=" text-[#1376F8] font-semibold">Emergency</span>
                    <a href="tel:8655910652" className=" font-normal">+91 8655910652</a>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-8 place-items-center sm:w-[25vw]">
            {/* Info 1 */}
            <div className="flex flex-col items-center text-Neutral-900">
              <div className="font-manrope font-bold text-5xl">
                60<span className="text-Primary-Blue-500">+</span>
              </div>
              <div className="font-manrope font-semibold text-base">Expert Specialists</div>
            </div>

            {/* Info 2 */}
            <div className="flex flex-col items-center text-Neutral-900">
              <div className="font-manrope font-bold text-5xl">
                500<span className="text-Primary-Blue-500">+</span>
              </div>
              <div className="font-manrope font-semibold text-base">Patients Served</div>
            </div>

            {/* Info 3 (Centered Below) */}
            <div className="flex flex-col items-center text-Neutral-900 sm:col-span-2">
              <div className="font-manrope font-bold text-5xl">
                22<span className="text-Primary-Blue-500">+</span>
              </div>
              <div className="font-manrope font-semibold text-base">Medical Services</div>
            </div>
        </div>
      </div>


      {/* right side */}
      <div className=" flex flex-col justify-center items-center  sm:w-[50%]">
        {/* Background Circle and Image */}
          <div className="absolute sm:w-[396px] sm:h-[402px] w-[310px] h-[378px] bg-ImgBack-gradient rounded-t-[300px]">
          </div>

          <div >
            <img src={HeroImg} alt=""  className=" relative  sm:w-[482px] sm:h-[476px] w-[382px] h-[376px] left-4 sm:top-[123px]  " />
          </div>

        {/* Comment Section */}
       <div className=" hidden relative w-[241px] h-[128px] bg-white border-2 border-[#95DDFF] rounded-xl shadow-md p-4  sm:flex flex-col justify-between left-44 bottom-44 ">
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
            Happy Customers
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
        <div className=" hidden relative sm:flex justify-center items-center gap-2 w-[296px] h-[44px] rounded-[10px] bg-white shadow-md bottom-44 right-40">
              <div className=" flex justify-center items-center w-[28px] h-[28px] bg-Primary-Blue-50"> <FaStar className="text-Primary-Blue-700 text-base  "/> </div>
              <div className=" font-manrope font-bold text-base">Easy Appointment Booking</div>
        </div>

        {/* comment Three */}
              <span className=" hidden sm:flex relative bottom-28 text-Primary-Blue-500 text-6xl right-2 z-10  "><BsQuote/></span>
        <div className=" relative hidden sm:flex justify-center items-center gap-2 w-[300px] h-[88px] rounded-[10px] bg-white border-2 border-[#95DDFF] shadow-md left-28 bottom-36">
              <div className=" text-center  text-base ">Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras. </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
