import React from "react";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";
import TrendingMovies from "./TrendingMovies";
import { Outlet } from "react-router-dom";


const Browse = () => {
  
  const isSideBarEnabled = useSelector((store) => store.user.isSlideBarActive);
  
  

  return (
    <div className=" w-screen ">
      {isSideBarEnabled ? <DropDownMenu /> : null}
      <Outlet/>
    </div>
  );
};

export default Browse;
