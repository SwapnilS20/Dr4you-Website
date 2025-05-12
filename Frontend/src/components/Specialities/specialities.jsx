import React, { useState, useEffect } from "react";
import SpecialitiesCard from "./SpecialitiesCard";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";

const Specialities = () => {
  const specialitiesData = [
    {
      id: 1,
      category: "Cardiology",
      description:
        "Expert cardiologists for heart health, offering consultations and second opinions.",
      doctors: 20,
    },
    {
      id: 2,
      category: "Dermatology",
      description:
        "Skincare specialists providing virtual consultations for all skin concerns.",
      doctors: 15,
    },
    {
      id: 3,
      category: "Pediatrics",
      description:
        "Child health experts available for online consultations and advice.",
      doctors: 25,
    },
    {
      id: 4,
      category: "Neurology",
      description:
        "Neurologists specializing in brain and nervous system disorders.",
      doctors: 18,
    },
    {
      id: 5,
      category: "Orthopedics",
      description:
        "Bone and joint specialists offering consultations for musculoskeletal issues.",
      doctors: 22,
    },
    {
      id: 6,
      category: "Gastroenterology",
      description:
        "Digestive health experts providing virtual consultations and second opinions.",
      doctors: 12,
    },
    {
      id: 7,
      category: "Psychiatry",
      description:
        "Mental health professionals available for online therapy and consultations.",
      doctors: 30,
    },
    {
      id: 8,
      category: "Endocrinology",
      description:
        "Hormonal health specialists offering consultations for endocrine disorders.",
      doctors: 10,
    },
    {
      id: 9,
      category: "Oncology",
      description:
        "Cancer specialists providing virtual consultations and treatment plans.",
      doctors: 8,
    },
    {
      id: 10,
      category: "Ophthalmology",
      description:
        "Eye care specialists offering consultations for vision problems.",
      doctors: 14,
    },
    {
      id: 11,
      category: "Urology",
      description:
        "Urological health experts available for online consultations.",
      doctors: 16,
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width >= 1024: // large screens
          setItemsPerPage(6);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(4);
          break;
        default: // small screens
          setItemsPerPage(2);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = specialitiesData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(specialitiesData.length / itemsPerPage);

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
    <section className="flex flex-col gap-4 mt-12 justify-center items-center">
      <div className="flex items-center  px-4 md:px-12 w-[80%]">
        <h2 className="text-4xl md:text-6xl font-manrope font-bold w-full text-center">
          Our <span className="text-gradient-btn">Specialities</span>
        </h2>
        {/* Arrows for Desktop */}
        <div className="hidden  lg:flex   ">
          <ReactPaginate
            previousLabel={
              <div className="w-12 h-12 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
                <BsArrowLeft className="text-Primary-Blue-700 text-2xl" />
              </div>
            }
            nextLabel={
              <div className="w-12 h-12 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-rows-2 lg-grid-rows-1 px-4 lg:px-10 xl:px-48 gap-12 2xl:gap-24 mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {currentItems.map((data) => (
            <motion.div key={data.id} variants={card}>
              <SpecialitiesCard
                category={data.category}
                description={data.description}
                doctors={data.doctors}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Buttons for mobile */}
      <div className="flex justify-center lg:hidden">
        <ReactPaginate
          previousLabel={
            <div className="w-12 h-12 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
              <BsArrowLeft className="text-Primary-Blue-700 text-2xl" />
            </div>
          }
          nextLabel={
            <div className="w-12 h-12 rounded-full border border-Primary-Blue-700 flex items-center justify-center">
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
    </section>
  );
};

export default Specialities;
