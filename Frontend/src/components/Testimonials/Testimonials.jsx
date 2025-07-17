import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ReactPaginate from "react-paginate";
import { LuMoveLeft } from "react-icons/lu";
import commentImg1 from "../../assets/Images/commentImg1.jpg";
import commentImg2 from "../../assets/Images/commentImg2.jpg";
import commentImg3 from "../../assets/Images/commentImg3.jpg";
import commentImg4 from "../../assets/Images/commentImg4.jpg";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const headingData = useSelector(
    (state) => state.home.testimonialComponentInfo
  );

  const FeedbackData = useSelector(
    (state) => state.testimonials.testimonials
  );
  
 

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width >= 1440: // large screens
          setItemsPerPage(3);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(2);
          break;
        default: // small screens
          setItemsPerPage(1);
          break;
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = FeedbackData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(FeedbackData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="p-8">
      <div className="flex flex-col justify-center items-center gap-8 md:mt-8">
        <h2 className="font-manrope font-bold text-[42px] text-center text-Neutral-900">
          {headingData?.sectionhead?.title}
        </h2>
        <p className="font-manrope text-base max-w-[470px] text-center text-Neutral-500">
          {headingData?.sectionhead?.short_description}
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-4">
          {currentItems.map((data) => (
            <TestimonialCard
             data={data}
             key={data?.id} // Ensure each card has a unique key
            />
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={
            <LuMoveLeft className="rotate-0 text-white text-[20px]" />
          }
          nextLabel={
            <LuMoveLeft className="rotate-180 text-white text-[20px]" />
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2 items-center"
          pageClassName="show text-sm " // hide page numbers
          previousClassName="bg-Primary-Blue-950 px-4 py-2 "
          nextClassName="bg-Primary-Blue-950 px-4 py-2 "
          activeClassName=" w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-950 text-white"
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
        />
      </div>
    </section>
  );
};

export default Testimonials;
