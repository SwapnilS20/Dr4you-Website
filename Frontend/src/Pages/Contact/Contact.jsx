import ContactForm from "../../components/ContactForm/ContactForm";
import ContactDetails from "../../components/ContactForm/ContactDetails";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx"; 
import { useSelector } from "react-redux";


const Contact = () => {

  const pageHeadData = useSelector((state)=> state.contact.contactPageInfo);
  const contactData = useSelector((state)=> state.contact.data);

  return (
    <>
      <section className=" bg-custom-gradient">
       
        <div className=" flex flex-col items-center justify-center gap-4 mt-16 p-6">
          <h1 className=" text-Primary-Blue-950 text-5xl font-bold">{pageHeadData?.title}</h1>
          <p className=" text-Neutral-700">{pageHeadData?.short_description}</p>
        </div>
        <div className="flex  justify-center mt-8 ">
           <div className="flex flex-col lg:flex-row items-start justify-center gap-24">
             <ContactDetails data = {contactData} />
            <ContactForm />
           </div>
        </div>
      </section>
     <div className=" flex flex-col gap-24 mt-16 mb-24">
       <AppointmentFORM />
      
     </div>
      
    </> 
  );
};

export default Contact;
