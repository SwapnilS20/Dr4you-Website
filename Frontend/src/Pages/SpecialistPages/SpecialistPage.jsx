import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import SpecialistCard from "../../components/Specialist/SpecialistCard.jsx";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import { useSelector } from "react-redux";

const SpecialistPage = () => {
  const DoctorData = useSelector((state) => state.doctors.doctors);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1440) setItemsPerPage(12);
      else if (width >= 1024) setItemsPerPage(9);
      else if (width >= 768) setItemsPerPage(6);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter logic
  useEffect(() => {
    let data = DoctorData;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = data.filter(
        (doc) =>
          doc.name?.toLowerCase().includes(query) ||
          doc.service?.name?.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      data = data.filter(
        (doc) =>
          doc.service?.name?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredDoctors(data);
    setCurrentPage(0); // Reset to first page after filter
  }, [DoctorData, searchQuery, selectedCategory]);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredDoctors.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredDoctors.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
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

  // Unique category list
  const uniqueCategories = [
    ...new Set(DoctorData.map((d) => d.service?.name).filter(Boolean)),
  ];

  return (
    <>
      <section>
        <div className="flex flex-col gap-8 bg-Primary-Blue-50 pb-14">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center mt-16">
            <h1 className="text-6xl font-manrope font-bold text-center">
              Our <span className="text-gradient-btn">specialists</span>
            </h1>
            <p className="text-base max-w-[500px] font-general-sans text-center">
              Meet our trusted medical experts, dedicated to delivering
              compassionate care and advanced treatment tailored to your needs.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4 md:px-0">
            {/* Search */}
            <div className="flex items-center w-full md:w-[350px] h-[45px] border border-[#cecece] bg-white rounded-md px-3 transition-all focus-within:ring-2 focus-within:ring-[#5dccff]">
              <LuUserSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Search by name or category"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full max-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full h-[45px] px-4 bg-btn-gradient text-white font-semibold rounded-md shadow-md outline-none focus:ring-2 focus:ring-[#5dccff] transition-all"
              >
                <option value="" className=" text-black">
                  All Specialties
                </option>
                {uniqueCategories.map((category, index) => (
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

          {/* Doctor Cards */}
          <div className="flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid max-w-[1300px] gap-8 xs:px-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {currentItems.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 text-xl font-semibold">
                    No doctors found
                  </div>
                ) : (
                  currentItems.map((data) => (
                    <motion.div key={data.id} variants={card}>
                      <SpecialistCard data={data} />
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
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
                pageClassName="show text-sm"
                activeClassName="w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-400 text-white"
                disabledClassName="opacity-50 pointer-events-none"
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
              />
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
      <FrequentlyAskedQuestion currentPage={"doctor"} />
    </>
  );
};

export default SpecialistPage;
