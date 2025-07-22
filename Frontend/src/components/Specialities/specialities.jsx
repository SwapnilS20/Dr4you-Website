import React, { useState, useEffect } from "react";
import SpecialitiesCard from "./SpecialitiesCard";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Specialities = () => {
  const heading = useSelector((state) => state.home.servicesComponentInfo);
  const specialitiesData = useSelector((state) => state.category.category);

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

  // Split heading.title into two parts by first space
  let part1 = "";
  let part2 = "";
  if (heading && heading.title) {
    const splitIndex = heading.title.indexOf(" ");
    if (splitIndex !== -1) {
      part1 = heading.title.slice(0, splitIndex);
      part2 = heading.title.slice(splitIndex + 1);
    } else {
      part1 = heading.title;
      part2 = "";
    }
  }

  return (
    <section className="flex flex-col gap-4 mt-12 justify-center items-center">
      <div className="flex items-center  px-4 md:px-12 w-[80%] 4xl:w-[60%] ">
        <h2 className="text-4xl md:text-6xl font-manrope font-bold w-full text-center">
          {part1}{" "}
          <span className="text-gradient-btn">{part2}</span>
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
                data ={data}
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
