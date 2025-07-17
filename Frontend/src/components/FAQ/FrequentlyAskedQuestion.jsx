import React from "react";
import FrequentlyAskCard from "./FrequentlyAskCard";
import { useSelector } from "react-redux";

const FrequentlyAskedQuestion = ({ currentPage }) => {
  const headingData = useSelector((state) => state.repeatable.FaqComponentInfo);
  const FaqData = useSelector((state) => state.faqs.faqs);

  // Safely compute filtered data directly inside the render
  const pageType = currentPage?.toLowerCase() || "general";
  const filteredFaqData = FaqData?.filter(
    (item) => item.type?.toLowerCase() === pageType
  );

  return (
    <section className=" bg-white min-h-[500px] pt-2">
      <div className="flex flex-col items-center gap-8 my-10 md:my-28">
        <h2 className="font-manrope font-bold text-[42px] text-center text-[#011632]">
          {headingData?.sectionhead?.title}
        </h2>
        <p className="font-manrope text-base max-w-[470px] text-center text-[#3C4959]">
          {headingData?.sectionhead?.short_description}
        </p>
        <div className="flex flex-col gap-4 p-2 max-w-[600px]">
          {filteredFaqData?.map((item) => (
            <FrequentlyAskCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
