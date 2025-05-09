import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import { LuMoveLeft } from "react-icons/lu";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import SpecialistCard from "./SpecialistCard";

const Specialist = () => {
  const FeedbackData = [
    {
      id: 1,
      name: "Thomas daniel",
      img: HeroImg,
      category: "Cardiology",
      linkedinUrl: "https://www.linkedin.com/in/thomasdaniel",
    },
    {
      id: 2,
      name: "Alena Alex",
      img: HeroImg,
      category: "Dermatology",
      linkedinUrl: "https://www.linkedin.com/in/alenaalex",
    },
    {
      id: 3,
      name: "Thomas Edison",
      img: HeroImg,
      category: "Pediatrics",
      linkedinUrl: "https://www.linkedin.com/in/thomasedison",
    },
    {
      id: 4,
      name: "Jane Doe",
      img: HeroImg,
      category: "Neurology",
      linkedinUrl: "https://www.linkedin.com/in/janedoe",
    },
    {
      id: 5,
      name: "John Smith",
      img: HeroImg,
      category: "Orthopedics",
      linkedinUrl: "https://www.linkedin.com/in/johnsmith",
    },
    {
      id: 6,
      name: "Alice Johnson",
      img: HeroImg,
      category: "Gastroenterology",
      linkedinUrl: "https://www.linkedin.com/in/alicejohnson",
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
          setItemsPerPage(4);
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
    <section className="  w-full ">
      <div className="flex flex-col pt-8 items-center gap-4 lg:mt-8 bg-Primary-Blue-50 min-h-[850px] p-2">
        <h2 className="font-manrope font-bold text-[42px] text-center text-[#011632]">
          Meet our specialists
        </h2>
        <p className="font-manrope text-base max-w-[470px] text-center text-[#3C4959]">
          Meet our trusted medical experts, dedicated to delivering
          compassionate care and advanced treatment tailored to your needs.
        </p>

        {/* specialist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 lg:py-20 px-20 p-2 ">
          {currentItems.map((data) => (
            <SpecialistCard
              key={data.id}
              img={data.img}
              name={data.name}
              category={data.category}
              linkedinUrl={data.linkedinUrl} // Pass the URL to the card
            />
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={
            <LuMoveLeft className="rotate-0 text-primary-Blue-950 text-[20px]" />
          }
          nextLabel={
            <LuMoveLeft className="rotate-180 text-primary-Blue-950 text-[20px]" />
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2 items-center"
          pageClassName="show text-sm " // hide page numbers
          previousClassName="bg-Primary-Blue-950 px-4 py-2 bg-white " 
          nextClassName="bg-Primary-Blue-950 px-4 py-2 bg-white "
          activeClassName=" w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-950 text-white"
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
        />
      </div>
    </section>
  );
};

export default Specialist;
