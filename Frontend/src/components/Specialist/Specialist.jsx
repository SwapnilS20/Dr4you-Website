import React, { useState, useEffect, use } from "react";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import { LuMoveLeft } from "react-icons/lu";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import SpecialistCard from "./SpecialistCard";
import { useSelector } from "react-redux";

const Specialist = ({ category, show }) => {
  const headingData = useSelector(
    (state) => state.repeatable.DoctorComponentInfo
  );

  const doctorsData = useSelector(
    (state) => state.doctors.doctors
  );  

console.log(doctorsData);


  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width >= 1440:
          setItemsPerPage(4);
          break;
        case width >= 1024:
          setItemsPerPage(3);
          break;
        case width >= 768:
          setItemsPerPage(2);
          break;
        default:
          setItemsPerPage(1);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logic for filtering data based on category or show prop
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (show || category) {
      const newData = show
        ? doctorsData
        : doctorsData.filter((data) => data.category === category);
      setFilteredData(newData);
      setCurrentPage(0); // reset to first page on category/show change
    }
  }, [category, show]);

  // Logic for pagination
  const offset = currentPage * itemsPerPage;
  const currentItems = (show ? doctorsData : filteredData).slice(
    offset,
    offset + itemsPerPage
  );
  const pageCount = Math.ceil(
    (show ? doctorsData : filteredData).length / itemsPerPage
  );

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
    <section className="w-full">
      <div className="flex flex-col pt-10 pb-4 items-center gap-4 lg:mt-8 bg-Primary-Blue-50 lg:min-h-[750px] ">
        <h2 className="font-manrope font-bold text-[42px] text-center text-[#011632]">
          {show
            ? headingData?.sectionhead?.title
            : `Our well-known ${category} Specialists`}
        </h2>
        {show ? (
          <p className="font-manrope text-base max-w-[470px] text-center text-[#3C4959]">
            {headingData?.sectionhead?.short_description}
          </p>
        ) : null}

        {/* Animated Grid with Staggered Card Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid  gap-x-10 lg:py-6  p-2 grid-flow-col auto-cols-auto "
          >
            {show
              ? currentItems.map((data) => (
                  <motion.div key={data.id} variants={card}>
                    <SpecialistCard data={data} />
                  </motion.div>
                ))
              : filteredData.map((data) => (
                  <motion.div key={data.id} variants={card}>
                    <SpecialistCard data={data} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={
            <LuMoveLeft className="rotate-0 text-primary-Blue-950 text-[28px]" />
          }
          nextLabel={
            <LuMoveLeft className="rotate-180 text-primary-Blue-950 text-[28px]" />
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2 items-center"
          pageClassName="text-sm transition-transform duration-300 hover:scale-110"
          previousClassName="bg-Primary-Blue-950 px-4 py-2 bg-white"
          nextClassName="bg-Primary-Blue-950 px-4 py-2 bg-white"
          activeClassName="w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-950 text-white"
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
        />
      </div>
    </section>
  );
};

export default Specialist;
