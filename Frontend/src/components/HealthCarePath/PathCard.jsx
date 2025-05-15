import React from 'react';

const PathCard = ({img ,title , description}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-Primary-Blue-50 rounded-lg gap-2 shadow-md p-6 h-[290px] max-w-[400px]">
            <img src={img} alt={title} className="w-full h-[90px] max-w-[131px]" />
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
}

export default PathCard;
