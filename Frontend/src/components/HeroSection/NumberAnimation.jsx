import React, { useEffect, useState } from 'react';

const NumberAnimation = ({ number, text ,span }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  const duration = 2000; // Total duration in ms
  const steps = number;
  const stepTime = Math.max(Math.floor(duration / steps), 20);

  const timer = setInterval(() => {
    setCount(prev => {
      if (prev >= number) {
        clearInterval(timer);
        return number;
      }
      return prev + 1;
    });
  }, stepTime);

  return () => clearInterval(timer);
}, [number]);
// Run only when `number` changes

  return (
    <div className={`"flex flex-col items-center justify-center text-Neutral-900" ${span?"col-span-2":""}`}>
      <div className="flex justify-center items-center font-manrope font-bold text-5xl">
        {count}
        <span className="text-Primary-Blue-500">+</span>
      </div>
      <div className="font-manrope font-semibold text-base">
        {text}
      </div>
    </div>
  );
};

export default NumberAnimation;
