import React from 'react';
import { GoDotFill } from "react-icons/go";

const SpecialitiesCard = () => {
    return (
        // main container 
        <div className=' flex flex-col font-general-sans bg-Primary-Blue-50 p-6 gap-2 rounded-lg shadow-lg max-w-[420px]  2xl:max-w-[450px]'>
            <div className=' w-[70px] h-[70px] rounded-full bg-Primary-Blue-400'> </div>
            <h3 className=' font-medium text-2xl'>Cardiology</h3>
            <p className=' text-justify text-lg'>Heart health is at the core of overall wellness. Our cardiologists specialize in diagnosing and treating cardiovascular diseases.</p>
            <div className=' flex font-medium justify-start items-center gap-2'>
                <span><GoDotFill className=' text-Primary-Blue-400'/></span>
                <span className=' text-base'>3+ Doctor </span>
            </div>
        </div>
    );
}

export default SpecialitiesCard;
