import React from "react";
// Icon
import { FaAngleRight } from "react-icons/fa";

const Card = ({ bgColor, icon, text }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className={`p-3 rounded-full ${bgColor}`}>{icon}</div>
        <span className="text-white">{text}</span>
      </div>
      <div className="p-1.5 rounded-full bg-[#47484C]">
        <FaAngleRight className="text-[15px] text-white" />
      </div>
    </div>
  );
};

export default Card;
