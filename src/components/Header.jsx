import React from "react";
// Icon
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="h-[60px] bg-[#20202A] w-full px-5 flex items-center justify-between">
      <div className="bg-[#2A2B30] text-white flex gap-2 items-center py-1.5 px-2.5 rounded-md">
        <CiSearch className="text-[20px]" />
        <input
          type="search"
          placeholder="Search"
          className="bg-[#2A2B30] placeholder:text-white outline-none"
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-2 bg-[#444547]">
            <CiMail className="text-white text-[23px]" />
          </div>
          <div className="rounded-full p-2 bg-[#444547]">
            <CiSettings className="text-white text-[23px]" />
          </div>
          <div className="rounded-full p-2 bg-[#444547] relative">
            <IoIosNotificationsOutline className="text-white text-[23px]" />
            <p className="rounded-full h-[8px] w-[8px] bg-[#6E86FF] absolute top-2 right-2.5" />
          </div>
        </div>
        <RxAvatar className="text-white text-[33px]" />
      </div>
    </div>
  );
};

export default Header;
