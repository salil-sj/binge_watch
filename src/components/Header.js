import React from "react";
import {LiaUser} from "react-icons/lia"
import {RiArrowDropDownLine} from "react-icons/ri"

const Header = () => {
  return (
    <div className="bg-black">
      {/* Desktop Header */}

      <ul className="text-white hidden lg:flex justify-center ">
        <li className="m-3 p-2 text-xl">primeVideo</li>
        <li className="m-3 p-2 text-xl">Home</li>
        <li className="m-3 p-2 text-xl">Store</li>
        <li className="m-3 p-2 text-xl">Live Tv</li>
        <li className="m-3 p-2 text-xl">Categories</li>
        <li className="m-3 p-2 text-xl">My Stuff</li>
        <li><LiaUser className="text-white text-4xl m-4"/></li>
      </ul>

      {/* Mobile Header */}

      <ul className="lg:hidden flex ">
        <div className="flex">
        <li className="my-2 py-2 pl-2 text-white text-xl">Menu</li>
        <RiArrowDropDownLine className="text-white text-3xl mt-4"/>
        </div>
        
        <li className="my-2 p-2 text-xl text-white  mx-auto">primeVideo</li>
        <li> <LiaUser className="text-white text-4xl m-3"/></li>
      </ul>
    </div>
  );
};

export default Header;
