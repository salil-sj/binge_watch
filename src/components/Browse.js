import React from "react";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";
import TrendingMovies from "./TrendingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";


const Browse = () => {
  
  const isSideBarEnabled = useSelector((store) => store.user.isSlideBarActive);
  
  useTrendingMovies();

  return (
    <div className="bg-gray-950 w-screen h-screen">
      {isSideBarEnabled ? <DropDownMenu /> : null}
      
      <TrendingMovies/>
    </div>
  );
};

export default Browse;
