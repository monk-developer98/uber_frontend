import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="w-screen ">
        <Link to={'/home'} className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"><i className="text-lg font-medium ri-home-5-line"></i></Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="gif"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          <img
            className="h-10"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl -mt-1 -mb-1 font-semibold">Uk06 AM 2323</h4>
            <p className="text-sm  text-gray-600 ">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full mt-2">
            <div className="flex gap-5 p-2 border-b-2 items-center ">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div className="">
                <h3 className="text-lg font-medium">546/11-A</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Kashipur , Uttrakhand
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-2 items-center ">
              <i className="text-lg ri-currency-line"></i>
              <div className="">
                <h3 className="text-lg font-medium">₹ 197.20</h3>
                <p className="text-sm text-gray-600 mt-1">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-1 bg-green-500 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
