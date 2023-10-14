import React, { useEffect } from "react";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";


const Browse = () => {


  const userDetails = useSelector(store=>store.user.userDetails)
  const isSideBarEnabled = useSelector((store) => store.user.isSlideBarActive);
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(userDetails==null)
    {
      navigate("/")
    }
  },[userDetails])

  return (
    <div className=" w-screen ">
      <Header/>
      {isSideBarEnabled ? <DropDownMenu /> : null}
      <Outlet/>
    </div>
  );
};

export default Browse;
