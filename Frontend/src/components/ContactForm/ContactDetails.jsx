import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";
import ContactCard from "./ContactCard";

const ContactDetails = () => {

  const placeCall =()=>{
    window.location.href = "tel:022 6901 2250";
  }
  const openMail = () => {
    window.location.href = "mailto:info@inmedbharat.com";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+918928473062", "_blank");
  };
  
  const contactDetails = [
    {
      icon: <FaClock />,
      heading: "Opening Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      
    },
    {
      icon: <FaEnvelope  />,
      heading: "Email",
      content: "info@inmedbharat.com",
      func: openMail,
    },
    {
      icon: <FaPhoneAlt  />,
      heading: "Phone",
      content: "+91 22 1234 5678",
      func: placeCall,
    },
    {
      icon: <FaComments  />,
      heading: "Chat",
      content: "Available 24/7",
      func: openWhatsApp,
    },
  ];

  return (
    <div className=" sm:w-[400px] mx-auto bg-transparent space-y-4 p-4">
      {/* Map and Address Card */}
      <div className="relative border-2 border-Primary-Blue-400 border-opacity-50 max-h-[310px] xl:w-[450px]  lg:w-[40vw] border-P rounded-md overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6222513451266!2d72.88888447580698!3d19.124220750455745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90069cf10d1%3A0x91780a7c1c15c83a!2sInmed%20Bharat%20Healthcare%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748333595734!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen="-1" // disables fullscreen button
          tabIndex="-1" // disables keyboard shortcuts
          className="w-full h-[350px] border-0"
        ></iframe>

        {/* Glass effect overlay */}
        <div className="absolute bottom-0 left-0 right-0 m-2 rounded-md bg-white/50 backdrop-blur-md shadow-md border border-blue-200 p-4 flex items-center gap-3 z-10">
          <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-btn-gradient">
            <FaMapMarkerAlt className="text-white text-xl" />
          </div>
          <div>
            <p className="font-semibold ">Office Address</p>
            <p className="text-sm ">413 Solaris 2, Saki Vihar Road, Andheri</p>
          </div>
        </div>
      </div>


      <div className=" flex flex-col gap-4 ">
          {
            contactDetails.map((detail, index) => (
              <ContactCard
                key={index}
                icon={detail.icon}
                heading={detail.heading}
                content={detail.content}
                func={detail.func}  
              />
            ))}
      </div>
    </div>
  );
};

export default ContactDetails;
