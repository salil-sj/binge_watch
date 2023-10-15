import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const DropDownMenu = () => {
  return (
    <div className="bg-gray-950 text-white w-1/2 h-screen absolute z-50">
      <div className="flex">
        <AiOutlineHome className="ml-3 mt-3" />
        <div className=" ml-1 p-2 text-md">Home </div>
      </div>
      <div className="flex mt-1">
        <AiFillAppstore className="ml-3 mt-3" />
        <div className=" p-2 text-md">Store</div>
      </div>
      <div className="flex mt-1">
        <PiTelevisionSimpleBold className="ml-3 mt-3" />
        <div className=" p-2 text-md">Live Tv</div>
      </div>
      <div className="flex mt-1">
        <MdOutlineCategory className="ml-3 mt-3" />
        <div className=" p-2 text-md">Categories</div>
      </div>
      <div className="flex mt-1 mb-3">
        <MdOutlineFeaturedPlayList className="ml-3 mt-3 " />
        <div className=" p-2 text-md">My Stuff</div>
      </div>
    </div>
  );
};

export default DropDownMenu;
