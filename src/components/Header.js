import React from "react";
import { LiaUser } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSideBar } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();


  const toggleSideBarFun  = ()=>{
    dispatch(toggleSideBar())
  }

  return (
    <div className="w-screen p-2">
      {/* Desktop Header */}

      <ul className="text-white hidden lg:flex justify-center  ">
        <li className="m-1 mx-3 p-2 text-2xl">primeVideo </li>
        <li className="m-1 mx-3 p-2 text-2xl">Home</li>
        <li className="m-1 mx-3 p-2 text-2xl">Store</li>
        <li className="m-1 mx-3 p-2 text-2xl">Live Tv</li>
        <li className="m-1 mx-3 p-2 text-2xl">Categories</li>
        <li className="m-1 mx-3 p-2 text-2xl">My Stuff</li>
        <li>
          <LiaUser className="text-white text-3xl my-3 mx-5" />
        </li>
      </ul>

      {/* Mobile Header */}

      <ul className="lg:hidden flex ">
        <div className="flex" onClick={toggleSideBarFun}>
          <li className="my-2 py-2 pl-2 text-white text-xl">Menu</li>
          <RiArrowDropDownLine className="text-white text-3xl mt-4" />
        </div>

        <li className="my-2 p-2 text-xl text-white  mx-auto">primeVideo</li>
        <li>
          {" "}
          <LiaUser className="text-white text-4xl m-3" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
