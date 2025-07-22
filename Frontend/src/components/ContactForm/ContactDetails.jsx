import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";
import ContactCard from "./ContactCard";
import "remixicon/fonts/remixicon.css";

const ContactDetails = ({ data }) => {
  const placeCall = () => {
    window.location.href = "tel:022 6901 2250";
  };
  const openMail = () => {
    window.location.href = "mailto:info@inmedbharat.com";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+918928473062", "_blank");
  };

  const funcDetails = [
    {
      heading: "Email",

      func: openMail,
    },
    {
      heading: "Phone",

      func: placeCall,
    },
    {
      heading: "Chat",

      func: openWhatsApp,
    },
  ];

  return (
    <div className=" sm:w-[400px] mx-auto bg-transparent space-y-4 p-4">
      {/* Map and Address Card */}
      <div className="relative border-2 border-Primary-Blue-400 border-opacity-50 max-h-[310px] lg:w-[450px] border-P rounded-md overflow-hidden shadow-sm">
        <iframe
          src={data[0]?.google_map_embed_src}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen="-1" // disables fullscreen button
          tabIndex="-1" // disables keyboard shortcuts
          className="w-full h-[350px] border-0"
        ></iframe>

        {/* Glass effect overlay */}
        <div className="absolute bottom-0 left-0 right-0 m-2 rounded-md bg-white/50 backdrop-blur-md shadow-md border border-blue-200 p-4 flex items-center gap-3 z-10">
          <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-btn-gradient">
            <i
              className={`${data[0]?.on_map_data.remixicon_classname} text-white text-xl`}
            ></i>
          </div>
          <div>
            <p className="font-semibold ">{data[0]?.on_map_data.title}</p>
            <p className="text-sm ">{data[0]?.on_map_data.details}</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 ">
        {data[0]?.contact_items?.map((detail, index) => {
          // Find the function based on heading match
          const matchedFunc = funcDetails.find(
            (item) => item.heading.toLowerCase() === detail.title.toLowerCase()
          )?.func;

          return (
            <ContactCard
              key={index}
              icon={detail.remixicon_classname}
              heading={detail.title}
              content={detail.details}
              func={matchedFunc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
