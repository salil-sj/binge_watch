import React, { useState } from "react";
import { POSTER_URL } from "../utils/TMDBConstants";

const Poster = ({ title, poster, average, details }) => {
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
   // setShowDetails(!showDetails);
  };

  return (
    <div className=" sm:p-12 ">
      <div className="ml-2 p-2 relative ">
        <div>
          <img
            className="w-screen h-52  sm:h-96  object-cover rounded-xl"
            src={POSTER_URL + poster}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent  to-black"></div>
          <div className="absolute top-8 sm:top-12 left-3 sm:left-24">
            <h1 className="text-2xl sm:text-5xl font-bold text-white">
              {title}
            </h1>
            <h1 className="text-yellow-600 font-bold ml-1 mt-1 text-xs sm:text-sm">
              {average}/10
            </h1>
            <button
              className="bg-white p-1 sm:p-2 mt-4 sm:mt-10 rounded-md font-bold hover:opacity-20 "
              onMouseEnter={toggleDetails}
              onMouseLeave={toggleDetails}
            >
              More Details
            </button>
            {showDetails ? (
              <h1 className=" text-white sm:w-1/2 text-xs sm:text-lg mt-0 sm:mt-2 p-3">
                {details}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
