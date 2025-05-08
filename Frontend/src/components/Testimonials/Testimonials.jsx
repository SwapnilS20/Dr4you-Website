import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ReactPaginate from "react-paginate";
import { LuMoveLeft } from "react-icons/lu";
import commentImg1 from "../../assets/Images/commentImg1.jpg";
import commentImg2 from "../../assets/Images/commentImg2.jpg";
import commentImg3 from "../../assets/Images/commentImg3.jpg";
import commentImg4 from "../../assets/Images/commentImg4.jpg";

const Testimonials = () => {
  const FeedbackData = [
    {
      id: 1,
      name: "Thomas daniel",
      img: commentImg1,
      rating: 5,
      feedback:
        "I had been struggling with conflicting diagnoses until I found Drs-4You. The second opinion I received was clear, professional, and helped me move forward with confidence. Highly recommended!",
    },
    {
      id: 2,
      name: "Alena Alex",
      img: commentImg2,
      rating: 4,
      feedback:
        "Drs-4You made it so easy to consult with a specialist from home. The whole process—from booking to prescription—was seamless and stress-free. It truly redefines convenience in healthcare.",
    },
    {
      id: 3,
      name: "Thomas Edison",
      img: commentImg3,
      rating: 5,
      feedback:
        "Professional, caring, and efficient. I loved how personalized the treatment suggestions were. Drs-4You helped me find the right doctor without stepping out of my house!",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width >= 1024: // large screens
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
          Our Happy Clients
        </h2>
        <p className="font-manrope text-base max-w-[470px] text-center text-Neutral-500">
          See what our patients have to say about their journey to better health
          with Drs-4You...
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-4">
          {currentItems.map((data) => (
            <TestimonialCard
              key={data.id}
              img={data.img}
              name={data.name}
              rating={data.rating}
              feedback={data.feedback}
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
