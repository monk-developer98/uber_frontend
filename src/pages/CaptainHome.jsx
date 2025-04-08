import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen ">
      <div className="fixed w-full p-3 top-0 flex items-center justify-between" >
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
        <Link
          to={"/captain-login"}
          className=" h-10 w-10  bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="gif"
        />
      </div>
      <div className="h-2/5 p-6 ">
        <div className="flex items-center  justify-between ">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" alt="" />
            <h4 className="text-lg font-medium">Kapil Kumar</h4>
          </div>
          <div >
            <h4 className="text-xl font-semibold">₹295.20</h4>
            <p className="text-sm text-gray-600 text-center" >Earned</p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 p-3 bg-gray-100 rounded-xl justify-center items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
