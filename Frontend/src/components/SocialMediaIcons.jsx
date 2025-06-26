import React from "react";
import "remixicon/fonts/remixicon.css";

const iconColors = {
  facebook: "bg-[#3b5999]",
  twitter: "bg-[#55acee]",
  linkedin: "bg-[#0077b5]",
  google: "bg-[#dd4b39]",
  instagram: "bg-[#E4405F]",
};

const SocialMediaIcons = ({ setgap, data }) => {

  return (
    <div className="flex justify-center items-center">
      <ul className={`flex  ${setgap ? "gap-2" : "gap-4"} `}>
        {data?.map((item, idx) => {
          const name = item.link.text.toLowerCase(); // for color mapping
          const url = item.link.url;
          const iconClass = item.remixicon_classname;

          return (
            <li key={idx} className="list-none">
              <a
                href={url}
                target="_blank"
                className={`
                group relative w-10 h-10 flex items-center justify-center 
                bg-white  ${
                  setgap ? "bg-amber-50" : ""
                }  rounded-full overflow-hidden
              `}
              >
                {/* Gradient background on hover */}
                <span
                  className={`
                  absolute inset-0 transition-all duration-500 top-full group-hover:top-0 z-0 
                  ${iconColors[name]}
                `}
                ></span>

                {/* Icon */}
                <i
                  className={`
                  ${iconClass} text-[25px] text-[#262626] 
                  z-10 transition-transform duration-500 group-hover:text-white 
                  group-hover:rotate-[360deg]
                `}
                ></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
