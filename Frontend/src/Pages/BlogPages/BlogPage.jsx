import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import BlogsCard from "../../components/Blogs/BlogsCard";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const BlogData = useSelector((state) => state.blogs.blogs);
  const blogPageHead = useSelector((state) => state.blogs.blogPageInfo);

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1440) setItemsPerPage(9);
      else if (width >= 1024) setItemsPerPage(6);
      else if (width >= 768) setItemsPerPage(6);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!Array.isArray(BlogData)) return;

    let filtered = BlogData;

    // Search filter
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter((item) => {
        const title = item.card_title || "";
        const desc = item.service.name || "";
        return (
          title.toLowerCase().includes(lower) ||
          desc.toLowerCase().includes(lower)
        );
      });
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) =>
          item?.service?.name?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredData(filtered);
    setCurrentPage(0);
  }, [searchTerm, selectedCategory, BlogData]);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, rotateX: -10, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = [
    ...new Set(BlogData.map((item) => item.service.name).filter(Boolean)),
  ];

  return (
    <>
      <section>
        <div className="flex flex-col gap-8 bg-custom-gradient">
          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center mt-16">
            <h1 className="text-gradient-btn text-6xl font-manrope font-bold text-center p-2">
              {blogPageHead?.title}
            </h1>
            <p className="text-base max-w-[500px] font-general-sans text-center">
              {blogPageHead?.short_description}
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4 md:px-0">
            {/* Search Input */}
            <div className="flex items-center w-full md:w-[350px] h-[45px] max-w-[350px] border border-[#cecece] bg-white rounded-md px-3 focus-within:ring-2 focus-within:ring-[#5dccff] transition-all">
              <LuUserSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Search for articles, tips, or news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full max-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full h-[45px] px-4 bg-btn-gradient text-white font-semibold rounded-md shadow-md outline-none focus:ring-2 focus:ring-[#5dccff] transition-all duration-300 ease-in-out"
              >
                <option value="all" className=" text-black">
                  All
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category} className=" text-black">
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <IoIosArrowDown className="text-white text-xl" />
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid max-w-[1300px] gap-8 xs:px-4 mt-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {currentItems.length > 0 ? (
                  currentItems.map((data) => (
                    <motion.div key={data.id} variants={card}>
                      <BlogsCard data={data} />
                    </motion.div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-600 text-lg mt-10">
                    No blogs found.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <ReactPaginate
                previousLabel={
                  <div className="w-16 h-8 border bg-Primary-Blue-950 flex items-center justify-center">
                    <BsArrowLeft className="text-white text-2xl" />
                  </div>
                }
                nextLabel={
                  <div className="w-16 h-8 border bg-Primary-Blue-950 flex items-center justify-center">
                    <BsArrowLeft className="rotate-180 text-white text-2xl" />
                  </div>
                }
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="flex gap-2 items-center mt-6"
                pageClassName="text-sm"
                activeClassName="w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-400 text-white"
                disabledClassName="opacity-50 pointer-events-none"
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
              />
            </div>
          </div>
        </div>
      </section>

      <AppointmentFORM />
      <FrequentlyAskedQuestion currentPage="blog" />
    </>
  );
};

export default BlogPage;
