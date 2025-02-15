import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {LuLogOut} from "react-icons/lu"
import {FiHelpCircle} from "react-icons/fi"
import { useDispatch } from "react-redux";
import { removeUserDetails } from "../store/userSlice";

const ProfileDropdown = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeUserDetails());
      };

  return (
    <div className="bg-black shadow-sm shadow-gray-800 text-white w-[9%] h-auto absolute mt-2  right-6  z-50  w-[15%] ">
      <div className="flex mt-4 ml-4">
        <AiOutlineUser className="text-2xl mt-2" />
        <div className=" ml-1 p-2 text-md text-xl   ">Profile </div>
      </div>

      <div className="flex ml-4">
        <FiHelpCircle className="text-2xl mt-2 " />
        <div className=" ml-1 p-2 text-md text-xl    ">Help </div>
      </div>

      <hr className="w-[90%] border-sm border-gray-500 my-2 ml-1 mr-1" />
      <div className="flex ml-4">
      <LuLogOut className="text-2xl mt-4 mr-2"/>
      <button className="bg-red-600 p-2 rounded-lg font-thin text-xl mt-2 mb-4 w-3/4 hover:cursor-pointer"
      onClick={handleLogout}
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
