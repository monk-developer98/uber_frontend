import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5  className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirmed your Ride</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img className="h-20" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" />
        <div className="w-full mt-5">
            <div className="flex gap-5 p-2 border-b-2 items-center ">
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div className="">
                    <h3 className="text-lg font-medium">546/11-A</h3>
                    <p className="text-sm text-gray-600 mt-1">Kashipur , Uttrakhand</p>
                </div>
            </div>
            <div className="flex gap-5 p-2 border-b-2 items-center ">
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div className="">
                    <h3 className="text-lg font-medium">546/11-A</h3>
                    <p className="text-sm text-gray-600 mt-1">Kashipur , Uttrakhand</p>
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
        <button onClick={()=>{props.setVehicleFound(true); props.setconfirmedRidePanel(false)}} className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg ">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
