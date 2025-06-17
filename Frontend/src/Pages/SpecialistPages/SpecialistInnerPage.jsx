import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/HeroSectionMainImg.png";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import "../../index.css";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";

const SpecialistInnerPage = () => {
  const { id } = useParams(); // ✅ FIXED: Extract id from param
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const doctor = [
  {
    id: 1,
    name: "Thomas Daniel",
    category: "Cardiology",
    image: img,
    description:
      "Dr. Thomas Daniel is a highly experienced and compassionate cardiologist dedicated to improving cardiovascular health through early detection, cutting-edge procedures, and lifestyle-based interventions. With a focus on preventive care, he works closely with patients to develop individualized treatment plans. His deep knowledge and empathetic nature have earned him recognition as one of the most trusted heart specialists in his field.",
    message:
      "Heart care requires more than just medication and procedures—it demands a holistic approach that incorporates education, empathy, and long-term support. I take pride in guiding my patients through their health journeys with personalized attention, helping them understand their conditions and empowering them to make the right lifestyle and medical decisions. Every heartbeat matters, and I'm here to ensure yours stays strong and steady.",
    expertise: [
      "Cardiac stress testing",
      "Echocardiography",
      "Heart disease prevention",
      "Cardiac catheterization"
    ],
    education: [
      "MBBS – Johns Hopkins University",
      "MD (Internal Medicine) – Stanford University",
      "DM Cardiology – Mayo Clinic"
    ],
    experience: [
      "Senior Cardiologist – HeartCare Institute (Present)",
      "Cardiology Consultant – MedCity Hospital (2014–2020)",
      "Resident Cardiologist – Stanford Medical Center (2011–2014)"
    ]
  },
  {
    id: 2,
    name: "Alena Alex",
    category: "Dermatology",
    image: img,
    description:
      "Dr. Alena Alex is a board-certified dermatologist renowned for her ability to treat both common and complex skin disorders with precision and care. She blends medical science with a personalized approach to skincare, ensuring that patients receive effective treatments tailored to their unique needs. Her expertise spans cosmetic dermatology, chronic conditions, and skin cancer detection, making her a versatile and respected expert in the field.",
    message:
      "Skin health is about more than just appearance—it reflects your overall well-being. I strive to create a welcoming environment where patients feel heard and confident about their skin concerns. Whether it's treating chronic conditions or providing cosmetic solutions, I work closely with each individual to develop tailored care plans that not only heal but also empower. Together, we’ll help your skin thrive.",
    expertise: [
      "Acne and pigmentation treatment",
      "Skin allergy management",
      "Skin biopsy & mole evaluation",
      "Anti-aging and cosmetic dermatology"
    ],
    education: [
      "MBBS – University of California, San Diego",
      "MD Dermatology – University of Chicago"
    ],
    experience: [
      "Consultant Dermatologist – GlowCare Skin Clinic (Present)",
      "Senior Resident – UCSD Medical Center (2015–2020)"
    ]
  },
  {
    id: 3,
    name: "Thomas Edison",
    category: "Pediatrics",
    image: img,
    description:
      "Dr. Thomas Edison is a pediatrician with a warm, approachable manner and a passion for child health. He brings a holistic philosophy to pediatrics, focusing on growth, development, and preventive care. From newborns to teens, he ensures each child receives age-appropriate medical attention while fostering a nurturing and safe healthcare experience. His emphasis on communication makes him a favorite among parents and children alike.",
    message:
      "Pediatrics is not just about treating illnesses—it's about fostering lifelong wellness. I work alongside families to build strong foundations for health through education, prevention, and trust. From your baby’s first checkup to adolescent milestones, my mission is to provide compassionate and thorough care that promotes physical, emotional, and developmental well-being. Every child deserves a healthy start, and I’m honored to be a part of that journey.",
    expertise: [
      "Childhood immunizations",
      "Nutritional guidance",
      "Developmental assessment",
      "Acute illness and injury management"
    ],
    education: [
      "MBBS – University of Toronto",
      "MD Pediatrics – Harvard Medical School"
    ],
    experience: [
      "Lead Pediatrician – Little Steps Clinic (Present)",
      "Pediatric Consultant – HealthBridge Hospital (2016–2021)"
    ]
  },
  {
    id: 4,
    name: "Jane Doe",
    category: "Neurology",
    image: img,
    description:
      "Dr. Jane Doe is a neurologist with a deep commitment to treating disorders of the nervous system with accuracy and compassion. With years of specialized experience, she handles complex conditions such as epilepsy, migraines, stroke recovery, and neurodegenerative diseases. She is known for her thorough diagnostic skills and her ability to simplify intricate medical conditions for patients and caregivers alike, promoting better understanding and outcomes.",
    message:
      "The brain is the command center of our lives, and neurological challenges can deeply impact both patients and their families. My role is to offer not just treatment but also clarity, comfort, and partnership throughout your care journey. I emphasize clear communication, collaborative decision-making, and evidence-based treatments to support every individual in navigating their neurological health with confidence and hope.",
    expertise: [
      "Migraine & chronic headache treatment",
      "Stroke prevention & recovery",
      "Epilepsy & seizure management",
      "Neuromuscular disorders"
    ],
    education: [
      "MBBS – King's College London",
      "MD Neurology – University of Pennsylvania"
    ],
    experience: [
      "Senior Neurologist – NeuroPlus Institute (Present)",
      "Consultant Neurologist – BrainCare Hospital (2013–2020)"
    ]
  },
  {
    id: 5,
    name: "John Smith",
    category: "Orthopedics",
    image: img,
    description:
      "Dr. John Smith is a leading orthopedic surgeon with extensive experience in treating musculoskeletal conditions ranging from joint pain to complex fractures. His approach combines surgical excellence with advanced rehabilitative strategies, aiming to restore patients’ mobility and improve their quality of life. With a reputation for successful outcomes and empathetic care, he is trusted by athletes and seniors alike.",
    message:
      "Movement is central to life, and when it’s restricted by injury or chronic conditions, the impact is profound. My goal is to not only heal but to fully restore strength, mobility, and confidence through personalized orthopedic care. From diagnosis to surgery and rehabilitation, I ensure each step of the process is patient-centered and focused on long-term wellness. Let’s get you moving better and living stronger.",
    expertise: [
      "Knee and hip replacement",
      "Arthroscopy and joint repair",
      "Fracture care",
      "Sports injuries and rehab"
    ],
    education: [
      "MBBS – University of Michigan",
      "MS Orthopedics – Duke University School of Medicine"
    ],
    experience: [
      "Lead Orthopedic Surgeon – OrthoLife Hospital (Present)",
      "Senior Consultant – MotionMed Clinic (2014–2020)"
    ]
  }
];

  useEffect(() => {
    const filteredDoctor = doctor.find((item) => item.id === parseInt(id));
    setCurrentDoctor(filteredDoctor);
  }, [id]);

  if (!currentDoctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading doctor details...
      </div>
    );
  }

  return (
    <>
      <section className="bg-custom-gradient min-h-screen">
       
        <div className="max-w-7xl mx-auto px-2 lg:px-6 py-16 flex flex-col gap-16">
          <h1 className="text-5xl md:text-6xl font-manrope font-bold text-center">
            Our <span className="text-gradient-btn">Specialist</span>
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
            <div className="flex w-full lg:w-[50%] justify-center xs:p-2">
              <img
                src={currentDoctor.image}
                alt={currentDoctor.name}
                className="w-[320px] md:w-[400px] h-auto rounded-3xl shadow-xl object-cover bg-[#9c9c9c] bg-opacity-35"
              />
            </div>

            <div className="w-full lg:w-[50%] items-center lg:items-start flex flex-col gap-4 font-general-sans p-6 pl-0 xs:p-2">
              <div className="text-Primary-Blue-900 space-y-1">
                <h2 className=" text-4xl md:text-5xl font-semibold">
                  {currentDoctor.name}
                </h2>
                <h3 className=" text-center lg:text-start text-xl md:text-2xl text-gray-600">
                  {currentDoctor.category}
                </h3>
              </div>
              <p className="text-lg max-w-[500px] text-gray-800 text-justify leading-relaxed">
                {currentDoctor.description}
              </p>
            </div>
          </div>

          {/* Message Section */}
          <div className="relative border-[1px] border-[#9c9c9c] shadow-md px-6 py-8 rounded-xl max-w-5xl mx-auto font-general-sans">
            <div className="mb-4">
              <span className="text-sm text-Primary-Blue-500">
                Message From -{" "}
              </span>
              <span className="text-lg font-semibold text-Primary-Blue-900">
                {currentDoctor.name}
              </span>
            </div>
            <p className="text-gray-700 text-[17px] leading-relaxed text-justify">
              "{currentDoctor.message}"
            </p>
          </div>
        </div>

        {/* Expertise, Education, Experience Sections */}
        <div className="mb-10">
          {/* Expertise */}
          <div className="flex">
            <div className="flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900"></div>
            <div className="lg:w-[50%] w-full px-8 relative">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl">
                Specialities & Expertise
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.expertise.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <FaCheck className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex lg:flex-row-reverse">
            <div className="flex w-[20%] lg:w-[50%] border-r-2 lg:border-none border-Primary-Blue-900"></div>
            <div className="flex flex-col lg:justify-end lg:items-end lg:w-[50%] w-full px-8 relative lg:border-r-2 border-Primary-Blue-900">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4 lg:left-[97%] xl:left-[98%] 2xl:left-[98.8%]">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl lg:text-end">
                Education & Training
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.education.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <FaGraduationCap className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex">
            <div className="flex justify-end items-end w-[20%] lg:w-[50%] border-r-2 border-Primary-Blue-900"></div>
            <div className="lg:w-[50%] w-full px-8 relative">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-Primary-Blue-950 absolute top-0 -left-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-Primary-Blue-900 text-3xl xl:text-5xl">
                Experience
              </h3>
              <div className="flex flex-col gap-4 my-6">
                {currentDoctor.experience.map((item, i) => (
                  <div key={i} className="flex items-start xl:items-center gap-2">
                    <div className="flex justify-center items-center text-white p-1 xl:w-7 xl:h-7 rounded-full bg-rounded-gradient mt-[4px] lg:mt-0">
                      <MdWorkHistory className="text-[10px] lg:text-[16px]" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
      <FrequentlyAskedQuestion />
      <Footer />
    </>
  );
};

export default SpecialistInnerPage;
