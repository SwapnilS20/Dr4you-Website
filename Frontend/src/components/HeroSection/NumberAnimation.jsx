import React, { useEffect, useState } from 'react';

const NumberAnimation = ({ number, text ,span }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // milliseconds
    const stepTime = Math.max(Math.floor(duration / (end - start)), 20); // fallback to minimum delay

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    // cleanup on unmount
    return () => clearInterval(timer);
  }, [number]); // Run only when `number` changes

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
