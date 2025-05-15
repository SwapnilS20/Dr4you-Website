import React from "react";
import PromiseCard from "./PromiseCard";
import promise1 from "../../assets/Images/promise1.png";
import promise2 from "../../assets/Images/promise.png";
import promise3 from "../../assets/Images/promise3.png";  
import promise4 from "../../assets/Images/Promise4.png";
import promise5 from "../../assets/Images/promise5.png";
import promise6 from "../../assets/Images/promise6.png";


const Promise = () => {
  const promiseData = [
    {
      img: promise1,
      title: "Flexible Appointments",
      description: "We offer same-day appointments whenever possible and make it easy to reschedule if needed.",
    },
    {
      img: promise2,
      title: "Price Match",
      description: "If you receive a cheaper quote we will match it, so you can get the best value for yur care.",
    },
    {
      img: promise3,
      title: "Unlimited Aftercare",
      description: "We provide follow-up appointments and on gouging support for as long as you red",
    },
    {
      img: promise4,
      title: "Your Choice of Consultant",
      description: "You can choose a specialist that best suits your requirement and change if you wish.",
    },
    {
      img: promise5,
      title: "No Cancellations",
      description: "Once you have scheduled your treatment, we guarantee it will not be cancelled.",
    },
    {
      img: promise6,
      title: "No Waiting Lists",
      description: "Receive prompt access to diagnosis and treatment without the need to wait",
    },
  ]
  return (
    <section>
      <div className=" flex flex-col justify-center  items-center gap-4 mt-8 ">
        <h2 className=" font-manrope font-bold text-center text-6xl">
          Our <span className="text-gradient-btn  ">Promise</span> to You
        </h2>
        <h3 className=" font-manrope font-bold text-[28px] text-gradient-btn text-center">What Makes us unique </h3>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-12 lg:gap-12 xl:gap-28 p-6">
          {/* Map through the promiseData array and render a PromiseCard for each item */}
          {promiseData.map((item, index) => (
            <PromiseCard
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
