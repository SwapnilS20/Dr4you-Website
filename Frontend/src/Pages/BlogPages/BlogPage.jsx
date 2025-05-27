import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import blog1 from "../../assets/Images/dentalClinic.jpg";
import blog2 from "../../assets/Images/image3.jpg";
import blog3 from "../../assets/Images/image4.jpg";

import BlogsCard from "../../components/Blogs/BlogsCard";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx";

const BlogPage = () => {
  const [FilteredData, setFilteredData] = useState();
  const BlogData = [
    {
      id:1,
      img: blog1,
      name: "Care Of Your Teeth",
      category: "Self Care",
      date: "23/05/2025",
    },
    {
      id:2,
      img: blog2,
      name: "Care Of Your Mouth",
      category: "Self Care",
      date: "23/05/2025",
    },
    {  id:3,
      img: blog3,
      name: "Care Of Your Teeth",
      category: "Self Care",
      date: "23/05/2025",
    },
    {
      id:4,
      img: blog3,
      name: "Care Of Your Teeth",
      category: "Self Care",
      date: "23/05/2025",
    },

    {
      id:5,
      img: blog1,
      name: "Care Of Your Teeth",
      category: "Self Care",
      date: "23/05/2025",
    },
    {
      id:6,
      img: blog2,
      name: "Care Of Your Mouth",
      category: "Self Care",
      date: "23/05/2025",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width > 1440: // large screens
          setItemsPerPage(9);
          break;
        case width >= 1024: // large screens
          setItemsPerPage(6);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(6);
          break;
        default: // small screens
          setItemsPerPage(4);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = BlogData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(BlogData.length / itemsPerPage);

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
        <div className=" flex flex-col gap-8 ">
          <Header />
          <div className=" flex flex-col gap-4 justify-center items-center mt-24">
            <h1 className=" text-gradient-btn text-6xl font-manrope font-bold text-center p-2">
              Blogs
            </h1>
            <p className=" text-base max-w-[500px] font-general-sans text-center">
              Stay informed with the latest healthcare tips, expert insights,
              and medical advancements.
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
                placeholder="Search for articles, tips, or news..."
                onChange={(e) => setFilteredData(e.target.value)} // ✅ Corrected here
              />
            </div>

            {/* Filter Dropdown */}
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
                  Filter by Category
                </option>
                {BlogData.map((data) => (
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
                className="grid max-w-[1300px] gap-8 xs:px-4 mt-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {currentItems.map((data) => (
                  <motion.div key={data.id} variants={card}>
                    <BlogsCard data={data} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* Pagination Buttons for mobile */}
            <div className="flex justify-center mt-4 ">
              <ReactPaginate
                previousLabel={
                  <div className="w-16 h-8  border bg-Primary-Blue-950 flex items-center justify-center">
                    <BsArrowLeft className="text-white text-2xl" />
                  </div>
                }
                nextLabel={
                  <div className="w-16 h-8  border bg-Primary-Blue-950 flex items-center justify-center">
                    <BsArrowLeft className="rotate-180 text-white text-2xl" />
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
      <AppointmentFORM />
      <FrequentlyAskedQuestion />
      <Footer />
    </>
  );
};

export default BlogPage;
