import React from "react";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactDetails from "../../components/ContactForm/ContactDetails";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Contact = () => {
  return (
    <>
      <section className=" bg-custom-gradient">
       
        <div className=" flex flex-col items-center justify-center gap-4 mt-16 p-6">
          <h1 className=" text-Primary-Blue-950 text-5xl font-bold">Get In Touch</h1>
          <p className=" text-Neutral-700">Book an Appointment and take the first step toward better health today.</p>
        </div>
        <div className="flex  justify-center mt-8 ">
           <div className="flex flex-col lg:flex-row items-start justify-center gap-24">
             <ContactDetails />
            <ContactForm />
           </div>
        </div>
      </section>
     <div className=" flex flex-col gap-24 mt-16">
       <AppointmentFORM />
      
     </div>
      
    </> 
  );
};

export default Contact;
