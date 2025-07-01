import React from "react";
import FrequentlyAskCard from "./FrequentlyAskCard";
import { useSelector } from "react-redux";

const FrequentlyAskedQuestion = () => {
  const headingData = useSelector((state)=> state.repeatable.FaqComponentInfo);

  const FaqData = [
    {
      id: 1,
      question: "What is the process for booking an appointment?",
      answer:
        "To book an appointment, you can visit our website or mobile app, select your preferred specialist, choose a date and time, and complete the booking process.",
    },
    {
      id: 2,
      question: "How do I cancel or reschedule my appointment?",
      answer:
        "You can cancel or reschedule your appointment through your account on our website or app. Simply navigate to your appointments and follow the prompts.",
    },
    {
      id: 3,
      question: "What should I do if I have a medical emergency?",
      answer:
        "In case of a medical emergency, please call your local emergency services or go to the nearest hospital immediately.",
    },
    {
      id: 4,
      question: "Are virtual consultations available?",
      answer:
        "Yes, we offer virtual consultations with our specialists. You can choose this option while booking your appointment.",
    },
  ];

  return (
    <section>
      <div className=" flex flex-col items-center gap-8 my-10 md:my-28 ">
        <h2 className="font-manrope font-bold text-[42px] text-center text-[#011632]">
          {headingData?.sectionhead?.title}
        </h2>
        <p className="font-manrope text-base max-w-[470px] text-center text-[#3C4959]">
          {headingData?.sectionhead?.short_description}
        </p>
        <div className=" flex flex-col gap-4 p-2 max-w-[600px]">
          {FaqData.map((item) => {
            return (
              <FrequentlyAskCard
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
