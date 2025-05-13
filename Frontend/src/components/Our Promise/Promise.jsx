import React from "react";
import PromiseCard from "./PromiseCard";

const Promise = () => {
  return (
    <section>
      <div className=" flex flex-col justify-center  items-center gap-4 mt-8 ">
        <h2 className=" font-manrope font-bold text-center text-6xl">
          Our <span className="text-gradient-btn  ">Promise</span> to You
        </h2>
        <h3 className=" font-manrope font-bold text-[28px] text-gradient-btn text-center">What Makes us unique </h3>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-12 lg:gap-12 xl:gap-28 p-6">
          <PromiseCard />
          <PromiseCard />
          <PromiseCard />
          <PromiseCard />
          <PromiseCard />
          <PromiseCard />
        </div>
      </div>
    </section>
  );
};

export default Promise;
