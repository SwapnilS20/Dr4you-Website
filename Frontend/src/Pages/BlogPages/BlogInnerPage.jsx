import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import blog1 from "../../assets/Images/dentalClinic.jpg";
import blog2 from "../../assets/Images/image3.jpg";
import blog3 from "../../assets/Images/image4.jpg";

import BlogsCard from "../../components/Blogs/BlogsCard";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx";
import RichTextRender from "../../components/RichTextRenderer.jsx";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogInnerPage = () => {
  const [FilteredData, setFilteredData] = useState();
  const BlogData = useSelector((state) => state.blogs.blogs);
  const pageId = useParams().id;

  
  useEffect(() => {
    const data = BlogData.find((item) => item.id === parseInt(pageId));
    setFilteredData(data);
  }, [pageId]);

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width >= 1440: // large screens
          setItemsPerPage(3);
          break;
        case width >= 1024: // large screens
          setItemsPerPage(2);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(2);
          break;
        default: // small screens
          setItemsPerPage(1);
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
      {FilteredData ? (
        <>
          <section className="bg-custom-gradient pb-16">
          
            <div className="flex flex-col items-center mt-12 md:px-8 px-4 ">
              {/* Image */}
              <div className="w-full max-w-7xl h-auto">
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${
                    FilteredData?.image?.url
                  }`}
                  alt="Blog visual"
                  className="w-full max-h-[700px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Title & Category */}
              <div className="w-full max-w-7xl mt-8 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4">
                <div className="flex flex-col gap-1 font-general-sans">
                  <h2 className="text-3xl md:text-4xl font-medium text-Primary-Blue-950 leading-snug text-justify">
                    {FilteredData.heading}
                  </h2>
                  <p className="text-justify">{FilteredData.by}</p>
                  <span className="text-Primary-Blue-500">
                    {FilteredData.createdAt}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-Primary-Blue-200 rounded-lg shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-Primary-Blue-950" />
                  <p className="text-sm text-Primary-Blue-950 font-semibold">
                    {FilteredData?.service?.name}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="max-w-7xl w-full mt-10 text-lg text-gray-800 leading-7 font-general-sans">
                <div
                  className="prose prose-blue max-w-full"
                  
                >
                  <RichTextRender content={FilteredData.blog} />
                </div>
              </div>
            </div>
          </section>
          {/* More suggestion Blogs  */}
          <div className="max-w-7xl mx-auto md:px-8 px-4 text-start mt-10">
            <h2 className="text-2xl md:text-4xl text-Primary-Blue-900 font-semibold mb-6">
              Explore More ....
            </h2>

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

          <AppointmentFORM />
          <FrequentlyAskedQuestion />
     
        </>
      ) : (
        <div className="text-center mt-20 text-gray-600 text-lg">
          Loading...
        </div>
      )}
    </>
  );
};

export default BlogInnerPage;
