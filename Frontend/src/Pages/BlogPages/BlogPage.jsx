import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeroImg from "../../assets/Images/HeroSectionMainImg.png";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";


const BlogPage = () => {
    const [FilteredData ,setFilteredData] = useState()
    const DoctorData = [
        {
          id: 1,
          name: "Thomas Daniel",
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
      ];
    
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
             Stay informed with the latest healthcare tips, expert insights, and medical advancements.
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
                {DoctorData.map((data) => (
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
        </div>
      </section>
    </>
  );
};

export default BlogPage;
