import React, { useRef, useEffect, useState } from "react";

const WorkingCard = ({ id, title, content }) => {
  const contentRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setLineHeight(contentRef.current.offsetHeight - 60);
    }
  }, []);

  return (
    <div className="flex items-start justify-start font-manrope gap-4 mt-2 ">
      {/* Left Section */}
      <div className="flex flex-col items-center pt-1">
        <div className="w-[52px] h-[52px] rounded-full bg-btn-gradient flex justify-center items-center text-white">
          {id}
        </div>
        {/*  line  */}
        <div
          className="w-px border-l-2 border-dashed border-[#D0D5DD] mt-1 xs:mt-2 md:text-3xl text-2xl"
          style={{ height: `${lineHeight}px` }}
        ></div>
      </div>

      {/* Right Section */}
      <div ref={contentRef} className="flex flex-col max-w-96   gap-2">
        <h3 className="font-bold text-3xl text-Neutral-900 ">{title}</h3>
        <p className="font-semibold text-base text-Neutral-500 text-justify">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WorkingCard;
