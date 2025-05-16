import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import SpecialitiesCard from "../../components/Specialities/SpecialitiesCard.jsx";
import { BsArrowLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.JSX";
import Specialist from "../../components/Specialist/Specialist.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MyEditor from "../../components/MyEditor.jsx";


const SpecialtiesPage = () => {
  const specialtiesData = [
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
    {
      id: 12,
      category: "Gynecology",
      description:
        "Women's health specialists offering consultations for reproductive health issues.",
      doctors: 12,
    },
    {
      id: 13,
      category: "Allergy",
      description:
        "Allergy specialists offering consultations for various allergies and asthma.",
      doctors: 10,
    },
    {
      id: 14,
      category: "Cardiology",
      description:
        "Expert cardiologists for heart health, offering consultations and second opinions.",
      doctors: 20,
    },
    {
      id: 15,
      category: "Dermatology",
      description:
        "Skincare specialists providing virtual consultations for all skin concerns.",
      doctors: 15,
    },
    {
      id: 16,
      category: "Pediatrics",
      description:
        "Child health experts available for online consultations and advice.",
      doctors: 25,
    },
  ];
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width > 1440: // large screens
          setItemsPerPage(16);
          break;
        case width >= 1024: // large screens
          setItemsPerPage(12);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(12);
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
  const currentItems = specialtiesData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(specialtiesData.length / itemsPerPage);

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
      {/* cards section */}
      <section>
        <div className="bg-custom-gradient ">
          <Header />
          <div className=" flex flex-col gap-10 py-14 ">
            {/* Name and Description */}
            <div className=" flex flex-col justify-center items-center gap-4 mt-8 ">
              <h1 className=" text-gradient-btn font-general-sans font-semibold text-6xl ">
                Services{" "}
              </h1>
              <p className=" max-w-[550px] text-center">
                We connect you with trusted healthcare specialists to help you
                make informed decisions for your well-being.
              </p>
            </div>
            {/* Services Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid xs:px-4 md:px-10 px-6 lg:px-10 xl:px-48 gap-8 mt-4 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {currentItems.map((data) => (
                  <motion.div key={data.id} variants={card} >
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
            <div className="flex justify-center ">
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
        {/* appointment form */}
        <AppointmentForm />
        {/* Doctors info  */}
        <MyEditor />
      
        <Specialist />
        {/* FAQ */}
        <FrequentlyAskedQuestion />
        {/* footer */}
        <Footer />
      </section>
    </>
  );
};

export default SpecialtiesPage;
