import React, { useState } from "react";
import Button from "../Button";
import "../../index.css";
import logo from "../../assets/Images/Logo.png";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import SocialMediaIcons from "../SocialMediaIcons";

const Header = () => {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div className=" flex justify-between items-center pl-6 pr-6  pt-6 sm:pl-12 sm:pr-12 ">
        <h1 className=" flex items-center gap-2 text-xl font-general-sans font-bold text-Primary-Blue-700 ">
          {" "}
          <img src={logo} alt="" /> Drs-4You
        </h1>
        <nav className=" hidden lg:flex gap-6 text-Neutral-900  font-manrope font-semibold text-[16px] ">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            Services
          </a>
          <a href="#" className="text-lg">
            Find Doctors
          </a>
          <a href="#" className="text-lg">
            About Us
          </a>
          <a href="#" className="text-lg">
            Blog
          </a>
          <a href="#" className="text-lg">
            Contact Us
          </a>
        </nav>
        <div
          className=" flex  justify-center lg:hidden items-center rounded-xl h-[50px] w-[48px] bg-Primary-Blue-600"
          onClick={() => setDrawerOpen(!DrawerOpen)}
        >
          <div className=" grid grid-cols-2  gap-1  ">
            <span className=" h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className=" h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className=" h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className=" h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
          </div>
        </div>
        <Button
          styles={
            " h-[56px] w-[174px] text-[20px] hidden lg:flex text-[20px] justify-center items-center bg-btn-gradient btn-hover-effect  "
          }
          children={" Patient Login"}
        />
      </div>

      <AnimatePresence>
        {DrawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[9]"
              onClick={() => setDrawerOpen(false)} // close when clicking outside
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 h-screen w-[80vw] md:w-[50vw] z-50 bg-white shadow-lg rounded-l-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-4 border-b">
                <h1 className="flex items-center gap-2 text-xl font-general-sans font-bold text-Primary-Blue-700">
                  <img src={logo} alt="" className="w-6 h-6" /> Drs-4You
                </h1>
                <IoClose
                  className="text-3xl text-Primary-Blue-700 cursor-pointer"
                  onClick={() => setDrawerOpen(false)}
                />
              </div>

              {/* Scrollable Menu */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <nav className="flex flex-col gap-6 text-Neutral-900 font-manrope font-semibold text-lg">
                  <a href="#" className="flex items-center gap-3">
                    <FaHome className="text-xl" />
                    Home
                  </a>
                  <a href="#" className="flex items-center gap-3">
                    <FaBriefcaseMedical className="text-xl" />
                    Services
                  </a>
                  <a href="#" className="flex items-center gap-3">
                    <FaUserDoctor className="text-xl" />
                    Find Doctors
                  </a>
                  <a href="#" className="flex items-center gap-3">
                    <TbInfoOctagonFilled className="text-xl" />
                    About Us
                  </a>
                  <a href="#" className="flex items-center gap-3">
                    <PiVideoBold className="text-xl" />
                    Blog
                  </a>
                  <a href="#" className="flex items-center gap-3">
                    <FaPhoneSquareAlt className="text-xl" />
                    Contact Us
                  </a>
                </nav>
              </div>

              {/* Footer / Social Media */}
              <div className="px-4 py-4 border-t">
                <SocialMediaIcons setgap={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
