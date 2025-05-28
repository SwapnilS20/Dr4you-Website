import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SpecialistCard from "../../components/Specialist/SpecialistCard.jsx";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";


const SpecialistPage = () => {
  const [FilteredData, setFilteredData] = useState([]);
  const DoctorData = [
    {
      id: 1,
      name: "Thomas Daniel",
      img: HeroImg,
      category: "Cardiology",
      linkedinUrl: "https://www.linkedin.com/in/thomasdaniel",
    },
    {
      id: 2,
      name: "Alena Alex",
      img: HeroImg,
      category: "Dermatology",
      linkedinUrl: "https://www.linkedin.com/in/alenaalex",
    },
    {
      id: 3,
      name: "Thomas Edison",
      img: HeroImg,
      category: "Pediatrics",
      linkedinUrl: "https://www.linkedin.com/in/thomasedison",
    },
    {
      id: 4,
      name: "Jane Doe",
      img: HeroImg,
      category: "Neurology",
      linkedinUrl: "https://www.linkedin.com/in/janedoe",
    },
    {
      id: 5,
      name: "John Smith",
      img: HeroImg,
      category: "Orthopedics",
      linkedinUrl: "https://www.linkedin.com/in/johnsmith",
    },
    {
      id: 6,
      name: "Alice Johnson",
      img: HeroImg,
      category: "Gastroenterology",
      linkedinUrl: "https://www.linkedin.com/in/alicejohnson",
    },
    {
      id: 7,
      name: "Michael Brown",
      img: HeroImg,
      category: "Ophthalmology",
      linkedinUrl: "https://www.linkedin.com/in/michaelbrown",
    },
    {
      id: 8,
      name: "Emily Clark",
      img: HeroImg,
      category: "Endocrinology",
      linkedinUrl: "https://www.linkedin.com/in/emilyclark",
    },
    {
      id: 9,
      name: "David Lee",
      img: HeroImg,
      category: "Oncology",
      linkedinUrl: "https://www.linkedin.com/in/davidlee",
    },
    {
      id: 10,
      name: "Sophia Turner",
      img: HeroImg,
      category: "Rheumatology",
      linkedinUrl: "https://www.linkedin.com/in/sophiaturner",
    },
    {
      id: 11,
      name: "Chris Evans",
      img: HeroImg,
      category: "Pulmonology",
      linkedinUrl: "https://www.linkedin.com/in/chrisevans",
    },
    {
      id: 12,
      name: "Olivia Harris",
      img: HeroImg,
      category: "Nephrology",
      linkedinUrl: "https://www.linkedin.com/in/oliviaharris",
    },
    {
      id: 13,
      name: "William Scott",
      img: HeroImg,
      category: "Urology",
      linkedinUrl: "https://www.linkedin.com/in/williamscott",
    },
    {
      id: 14,
      name: "Grace Miller",
      img: HeroImg,
      category: "Hematology",
      linkedinUrl: "https://www.linkedin.com/in/gracemiller",
    },
    {
      id: 15,
      name: "Benjamin Carter",
      img: HeroImg,
      category: "Immunology",
      linkedinUrl: "https://www.linkedin.com/in/benjamincarter",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width > 1440: // large screens
          setItemsPerPage(12);
          break;
        case width >= 1024: // large screens
          setItemsPerPage(9);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(9);
          break;
        default: // small screens
          setItemsPerPage(5);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = DoctorData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(DoctorData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -10,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section>
        <div className=" flex flex-col gap-8 bg-Primary-Blue-50 pb-14">
          <Header />
          {/* heading and para */}
          <div className=" flex flex-col gap-4 justify-center items-center mt-16">
            <h1 className=" text-6xl font-manrope font-bold text-center">
              Our <span className="text-gradient-btn">specialists</span>{" "}
            </h1>
            <p className=" text-base max-w-[500px] font-general-sans text-center">
              Meet our trusted medical experts, dedicated to delivering
              compassionate care and advanced treatment tailored to your needs.
            </p>
          </div>
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4 md:px-0">
            {/* Search Input */}
            <div className="flex items-center w-full md:w-[350px] h-[45px] max-w-[350px] border border-[#cecece] bg-white rounded-md px-3 transition-all focus-within:ring-2 focus-within:ring-[#5dccff]">
              <LuUserSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Search by name or category"
                onChange={(e) => setFilteredData(e.target.value)} // ✅ Corrected here
              />
            </div>

            {/* Filter Dropdown */}`1`
            <div className="relative w-full max-w-[200px]">
              <select
                name="Filter"
                id="filter"
                className="appearance-none w-full h-[45px] px-4 bg-btn-gradient text-white font-semibold rounded-md shadow-md outline-none focus:ring-2 focus:ring-[#5dccff] transition-all duration-300 ease-in-out"
              >
                <option
                  disabled
                  selected
                  className="text-gray-200 bg-[#011632]"
                >
                  Filter by Specialty
                </option>
                {DoctorData.map((data) => (
                  <option
                    key={data.id}
                    value={data.category}
                    className="text-black "
                  >
                    {data.category}
                  </option>
                ))}
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <IoIosArrowDown className="text-white text-xl" />
              </div>
            </div>
          </div>
          {/* cards Views */}
          <div className=" flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid max-w-[1300px] gap-8 xs:px-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {currentItems.map((data) => (
                  <motion.div key={data.id} variants={card}>
                    <SpecialistCard
                      data = {data}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* Pagination Buttons for mobile */}
            <div className="flex justify-center mt-4 ">
              <ReactPaginate
                previousLabel={
                  <div className="w-14 h-14 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
                    <BsArrowLeft className="text-Primary-Blue-700 text-2xl" />
                  </div>
                }
                nextLabel={
                  <div className="w-14 h-14 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
                    <BsArrowLeft className="rotate-180 text-Primary-Blue-700 text-2xl" />
                  </div>
                }
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="flex gap-2 items-center mt-6"
                pageClassName="show show text-sm" // Hide default number buttons
                breakClassName="hidden"
                activeClassName=" w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-400 text-white"
                disabledClassName="opacity-50 pointer-events-none"
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
              />
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
      <FrequentlyAskedQuestion/>
      <Footer />
    </>
  );
};

export default SpecialistPage;
