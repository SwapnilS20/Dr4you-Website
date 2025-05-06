import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
function WhyChooseUsCard({ChooseUsData}) {
  return (
    <div className='group flex flex-col bg-white p-4 min-h-[155px] justify-center rounded-2xl gap-1 hover:bg-Primary-Blue-700 hover:cursor-pointer  hover:drop-shadow-lg hover:blur-xs'>
      <FaUserDoctor className='w-[36px] h-[36px] text-Neutral-900 group-hover:text-white'/>
      <h3 className='font-general-sans text-sm sm:text-xl font-medium text-Primary-Blue-800 group-hover:text-white'>{ChooseUsData.title}</h3>
      <p className='font-general-sans text-xs sm:text-base font-light text-Neutral-950 mt-2 text-pretty text-opacity-60 group-hover:text-white'>{ChooseUsData.description}</p>
    </div>
  )
}

export default WhyChooseUsCard