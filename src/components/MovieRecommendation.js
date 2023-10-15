import React, { useState } from "react";
import Loader from "./Loader";

const MovieRecommendation = () => {
  const [showLoader, setShowLoader] = useState(false);

  const toggleLoader = () => {
    setShowLoader(true);
  };

  return (
    <div className="bg-gray-950 h-screen">
      <div class="grid grid-cols-5">
        <div class="col-span-1 "></div>
        <div class="col-span-3 ">
          <h1 className="text-yellow-500 font-bold text-6xl mt-20 ">
            Looking for movie recommendations?
          </h1>

          <h1 className="text-white text-xl  mt-4 p-4 font-extralight">
            Simply type in your favorite genres or keywords (e.g., action,
            sci-fi) below -
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              className=" p-4 w-[80%]  my-4 mr-4 rounded-xl text-black font-bold text-xl"
              placeholder="eg- Romantic Hindi Comedy movies"
            ></input>
            <button
              className={`bg-yellow-500 rounded-xl p-4 text-xl font-bold ${
                showLoader ? "opacity-60" : ""
              } `}
              onClick={toggleLoader}
            >
              Search using GPT
            </button>
          </div>
          {showLoader && <Loader />}
        </div>
        <div class="col-span-1 "></div>
      </div>
    </div>
  );
};

export default MovieRecommendation;
