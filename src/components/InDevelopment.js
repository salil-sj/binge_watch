import React from "react";
import { useSelector } from "react-redux";

const InDevelopment = () => {
  const userName = useSelector((store) => store.user.userDetails)?.displayName;
  const firstName = userName?.split(" ")[0];

  return (
    <div className="bg-gray-950 h-screen  flex ">
      <div className="mx-auto mt-2 lg:mt-18 ">
        <h1 className="text-9xl font-bold text-yellow-500  pt-12 pb-6 ">
          Hi , {firstName}
        </h1>
        <h1 className="text-4xl font-bold text-yellow-500  pt-12 pb-6 ">
          This page is under Development
        </h1>
        <h1 className="text-4xl font-bold text-yellow-500 ">
          {" "}
          Please visit later!{" "}
        </h1>
        <div className="mt-6 font-light ">
          <p className="text-white p-2 break-after-right">
            Thank you for visiting our website. We're currently working hard to
            bring you an enhanced and optimized online experience.{" "}
          </p>
          <p className="text-white p-2 break-after-right">
            We appreciate your patience during this process and look forward to
            providing you with an even better user experience.{" "}
          </p>
          <p className="text-white p-2 break-after-right">
            {" "}
            Stay tuned for our upcoming updates!{" "}
          </p>
          <hr className=" mt-10"/>
        </div>
      </div>
      <img
        src="https://gallery.yopriceville.com/var/resizes/Backgrounds/Yellow_Under_Construction_Background.jpg?m=1441872127"
        className="mx-auto mt-10 h-3/4  my-auto"
      />
    </div>
  );
};

export default InDevelopment;
