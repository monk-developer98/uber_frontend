import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
  return (
    <div className="h-screen ">
      <div className="fixed w-screen p-6 top-0 flex items-center justify-between">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to={"/captain-login"}
          className=" h-10 w-10  bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="gif"
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between w-full relative bg-yellow-400">
        <h5
          onClick={''}
          className="p-1 text-center w-[87%] absolute top-0"
        >
          <i className="text-2xl text-gray-50 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl">4 Km away</h4>
        <buttom className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </buttom>
      </div>
    </div>
  );
};

export default CaptainRiding;
