import React from "react";

const TeamCard = ({ img, position, name }) => {
  return (
    <div className="bg-white rounded-2xl rounded-b-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-[280px]">
      <img
        src={img}
        alt={name}
        className="h-[250px] w-full object-cover object-top"
      />
      <div className="p-2 flex flex-col items-start font-general-sans">
        <h3 className="text-lg font-semibold text-Primary-Blue-800">{name}</h3>
        <p className="text-sm text-Neutral-500">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
