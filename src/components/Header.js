import React, { useEffect, useRef, useState } from "react";
import { LiaUser } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUserDetails, toggleSideBar } from "../store/userSlice";

import { IoMdArrowDropdown } from "react-icons/io";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const dispatch = useDispatch();
  const profileDropdownRef = useRef(null);

  const userDetails = useSelector((store) => store.user.userDetails);
  const firstName = userDetails?.displayName.split(" ")[0];

  const [showProfileDropDown, setShowProfileDropDown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        closeProfileDropDown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSideBarFun = () => {
    dispatch(toggleSideBar());
  };

  const closeProfileDropDown = () => {
    setShowProfileDropDown(false);
  };

  const toggleProfileDropDown = () => {
    setShowProfileDropDown(!showProfileDropDown);
  };

  return (
    <div className="w-screen p-2 bg-gray-950">
      {/* Desktop Header */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 "></div>
        <div className="col-span-3 ">
        <ul className="text-white hidden lg:flex justify-center">
            <li className="m-1 mx-3 p-2 text-2xl">primeVideo </li>
  <Link to={"/browse"}>
              <li className="m-1 mx-3 p-2 text-2xl">Home</li>
  </Link>
  <Link to={"/browse/development"}>
              <li className="m-1 mx-3 p-2 text-2xl">Store</li>
  </Link>
  <Link to={"/browse/development"}>
              <li className="m-1 mx-3 p-2 text-2xl">Live Tv</li>
  </Link>
  <Link to={"/browse/development"}>
              <li className="m-1 mx-3 p-2 text-2xl">Categories</li>
  </Link>
  <Link to={"/browse/recommendation"}>
              <li className="m-1 mx-3 p-2 text-2xl">Movies Recommendation</li>
  </Link>
            <li></li>
</ul>
        </div>

        {userDetails && (
          <div className="flex-row">
            <div className="col-span-1 flex p-1 hover:cursor-pointer relative">
              <h1 className="text-white ml-auto mr-4 text-3xl font-light mt-auto">
                Hi, {firstName}
              </h1>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU"
                className="h-12 w-12  mt-1"
                onClick={toggleProfileDropDown}
              />
              <IoMdArrowDropdown
                className="text-white text-4xl"
                onClick={toggleProfileDropDown}
              />
            </div>
            {/* {showProfileDropDown ? <ProfileDropdown /> : null } */}
            {showProfileDropDown && (
              <div ref={profileDropdownRef}>
                <ProfileDropdown />
              </div>
            )}
          </div>
        )}
      </div>

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
