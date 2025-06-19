import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { PiVideoBold } from "react-icons/pi";
import gsap from "gsap";
import Button from "../Button";
import SocialMediaIcons from "../SocialMediaIcons";
import logo from "../../assets/Images/Logo.png";
import "../../index.css";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { setHeader , setFooter } from "../../App/features/headerFooterSlics";

const Header = () => {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [HeaderData, setHeaderData] = useState();   
  const [logoUrl, setLogoUrl] = useState();
  const dispatch = useDispatch();
  const { loading, data, error } = useFetch(
    "http://localhost:1337/api/header-and-footer?populate[Header][populate]=*&populate[Footer][populate]=*"
  );

  useEffect(() => {
    if (!loading && data?.data) {
      setHeaderData(data.data.Header);
      dispatch(setHeader(data.data.Header));
      
      dispatch(setFooter(data.data.Footer));
      setLogoUrl(`http://localhost:1337${data.data.Header.Logo.url}`);
    }

    if (error) {
      console.error("Error fetching header data:", error);
    }
  }, [loading, data, error]);


  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const elements = gsap.utils.toArray(".header-anim");
      const tl = gsap.timeline({
        defaults: {
          ease: "back.out(1.7)",
          duration: 0.8,
        },
      });

      tl.from(".header-container", {
        opacity: 0,   

        y: -20,
        duration: 0.5,
      });

      tl.from(
        elements,
        {
          delay: 0.3,
          y: -30,
          scale: 0.95,
          autoAlpha: 0,
          stagger: 0.2,
        },
        "-=0.4"
      );
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  
const Navitems = [
    { id: 1, name: HeaderData?.page1 || "Home", slug: "/", icon: <FaHome /> },
    {
      id: 2,
      name: HeaderData?.page2 || "Services",
      slug: "/services",
      icon: <FaBriefcaseMedical />,
    },
    {
      id: 3,
      name: HeaderData?.page3 || "Find Doctors",
      slug: "/specialist",
      icon: <FaBriefcaseMedical />,
    },
    {
      id: 4,
      name: HeaderData?.page4 || "About us",
      slug: "/about",
      icon: <TbInfoOctagonFilled />,
    },
    {
      id: 5,
      name: HeaderData?.page5 || "Blogs",
      slug: "/blogs",
      icon: <PiVideoBold />,
    },
    {
      id: 6,
      name: HeaderData?.page6 || "Contact us",
      slug: "/contact-us",
      icon: <FaPhoneSquareAlt />,
    },
  ];


  if (loading) {
    return (
      <div className="header-container flex justify-between items-center pl-6 pr-6 pt-6 sm:pl-12 sm:pr-12">
        <p className="text-xl font-bold text-gray-500 animate-pulse">
          Loading header...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-transparent">
      <div className="header-container flex justify-between items-center pl-6 pr-6 pt-6 sm:pl-12 sm:pr-12">
        <img src={logoUrl} alt="logo" width={200} className="header-anim" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-Neutral-900 font-manrope font-semibold text-[16px]">
          {Navitems.map((data) => (
            <NavLink
              key={data.id}
              to={data.slug}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-Primary-Blue-500 font-bold"
                    : "text-Neutral-900"
                }`
              }
            >
              <span className="header-anim">{data.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="flex justify-center lg:hidden items-center rounded-xl h-[50px] w-[48px] bg-Primary-Blue-600"
          onClick={() => setDrawerOpen(!DrawerOpen)}
        >
          <div className="grid grid-cols-2 gap-1">
            <span className="h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className="h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className="h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
            <span className="h-[9px] w-[9px] rounded-sm border-2 border-white"></span>
          </div>
        </div>

        {/* Login Button */}
        <Button
          styles={
            "header-anim h-[56px] w-[174px] text-[20px] hidden lg:flex justify-center items-center bg-btn-gradient btn-hover-effect"
          }
          children={" Patient Login"}
          onClick={() =>
            window.open(
              "https://cloud.softlinkinternational.com/IBH_TeleHealth/Login/AppointmentPage"
            )
          }
        />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {DrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[9]"
              onClick={() => setDrawerOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 w-[80vw] md:w-[50vw] z-50 bg-white shadow-lg rounded-l-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-4 border-b">
                <h1 className="flex items-center gap-2 text-xl font-general-sans font-bold text-Primary-Blue-400">
                  <img src={logo} alt="logo" />
                  Drs-4You
                </h1>
                <IoClose
                  className="text-3xl text-Primary-Blue-700 cursor-pointer"
                  onClick={() => setDrawerOpen(false)}
                />
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6">
                <nav className="flex flex-col gap-6 text-Neutral-900 font-manrope font-semibold text-lg">
                  {Navitems.map((data) => (
                    <NavLink
                      key={data.id}
                      to={data.slug}
                      className={({ isActive }) =>
                        `flex items-center gap-3 ${
                          isActive
                            ? "text-Primary-Blue-700 font-bold"
                            : "text-Neutral-900"
                        }`
                      }
                      onClick={() => setDrawerOpen(false)}
                    >
                      {data.icon}
                      {data.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

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
