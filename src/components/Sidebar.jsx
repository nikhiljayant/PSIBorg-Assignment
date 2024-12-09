import React from "react";
// Icon
import { IoIosFlower } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="min-h-dvh w-[60px] bg-[#20202A] flex flex-col justify-between items-center py-2.5">
      <div className="flex flex-col gap-5 w-full items-center">
        <IoIosFlower className="text-[#6E86FF] text-[45px]" />
        <div className="flex flex-col gap-5 items-center w-full">
          <AiFillHome className="text-[#6E86FF] text-[22px] w-full border-l-2 rounded-sm border-[#6E86FF]" />
          <MdOutlineAnalytics className="text-white text-[22px]" />
          <GoChecklist className="text-white text-[22px]" />
          <CiWallet className="text-white text-[22px]" />
          <IoBagCheckOutline className="text-white text-[22px]" />
        </div>
      </div>
      <AiOutlineLogout className="text-white text-[25px] mb-5" />
    </div>
  );
};

export default Sidebar;
