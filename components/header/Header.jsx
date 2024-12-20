import React from "react";
import { FaChevronRight } from "react-icons/fa"; 

const Header = () => {
  return (
    <div className="bg-white py-3 px-6 font-poppins">
      <div className="text-2xl font-bold  text-blue-900">Dashboard</div>
      <div className="flex text-sm text-gray-500 mt-1">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="mx-1">
          <FaChevronRight className="w-[12px] h-[12px] mt-[4px]"/> 
        </span>
        <span className="hover:text-blue-600 cursor-pointer">Order</span>
        <span className="mx-1">
          <FaChevronRight className="w-[12px] h-[12px] mt-[4px]"/> 
        </span>
        <span className="text-gray-400">Setup</span>
      </div>
    </div>
  );
};

export default Header;
