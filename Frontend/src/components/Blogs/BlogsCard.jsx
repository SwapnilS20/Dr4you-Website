import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "../../index.css";
import { Link } from "react-router-dom";

const BlogsCard = ({ data }) => {
  return (
    <>
      <Link to={`/blog/${data.id}`} className="no-underline">
        <div
          className=" lg:w-[370px] h-[470px] xs:w-[300px] md:w-[350px] w-[370px]  rounded-2xl relative bg-cover bg-center overflow-hidden shadow-md"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>

          {/* Top Section */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 text-white z-10">
            {/* Category Tag */}
            <span className="bg-Primary-Blue-200  text-sm px-3 py-1 rounded-full flex items-center gap-2 text-Primary-Blue-900">
              <span className="w-4 h-4 bg-Primary-Blue-900   rounded-full"></span>
              {data.category}
            </span>

            {/* Blog Title */}
            <h3 className="text-xl font-semibold">{data.name}</h3>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white z-10">
            <span className="text-sm">{data.date}</span>
            <button className="w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
              <HiArrowRight className="text-white w-5 h-5 -rotate-45" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogsCard;
