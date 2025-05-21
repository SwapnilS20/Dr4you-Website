import React from "react";
import logo from "../../assets/Images/fotterLogo.png";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import SocialMediaIcons from "../SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="  bg-Primary-Blue-50 w-full py-4 xl:px-32">
      <div className=" flex md:flex-row flex-col justify-between border-b-2 border-Primary-Blue-400 border-opacity-40 pb-10 p-4">
        {/* logo name and tagline */}
        <div className=" flex flex-col gap-8 border-b-2 border-Primary-Blue-400 border-opacity-40 pb-10 md:pb-0 md:border-b-0 md:w-[30%]">
          <div>
            <img src={logo} alt="" className=" w-[89px] h-[92px]" />
            <h2 className="  text-2xl font-general-sans font-bold text-Primary-Blue-700">
              {" "}
              Drs-4You
            </h2>
          </div>
          <p className=" font-manrope text-base max-w-[269px]">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>

        {/* quick Links  */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:gap-16 gap-8  ">
          {/* support  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">
              Support
            </span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                <li className=" font-manrope text-base text-Neutral-900">
                  Getting Started
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  FAQ
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Help Articles
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Contact Hepl Desk
                </li>
              </ul>
            </div>
          </div>
          {/* Services  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">Services </span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                <li className=" font-manrope text-base text-Neutral-900">
                  Booking Appointments
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Online Consultation
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Prescriptions{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* Legal  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">Legal</span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                <li className=" font-manrope text-base text-Neutral-900">
                  Terms & Conditions
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Privacy Policy
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Cookie Notice{" "}
                </li>
                <li className=" font-manrope text-base text-Neutral-900">
                  Cookie Preferences{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links and Copyright */}
      <div className=" flex flex-col md:flex-row gap-4  justify-between items-center py-4 px-4">
        <div className=" flex gap-6 text-4xl">
         
          <SocialMediaIcons />
        </div>
        <p className=" font-manrope text-base text-Neutral-900">
          © 2025 Drs-4You. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
