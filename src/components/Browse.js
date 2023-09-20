import React from "react";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";
import TrendingMovies from "./TrendingMovies";

const Browse = () => {
  const isSideBarEnabled = useSelector((store) => store.user.isSlideBarActive);

  // if(!isSideBarEnabled) return null

  return (
    <div className="bg-black">
      {isSideBarEnabled ? <DropDownMenu /> : null}
      <TrendingMovies />
    </div>
  );
};

export default Browse;
