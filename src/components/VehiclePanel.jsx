import React from 'react'

const VehiclePanel = ({setVehicle ,setconfirmedRidePanel}) => {
  return (
    <div>
         <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
          <h5 onClick={() => setVehicle(false)} className="absolute right-5 top-8 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <div onClick={()=>setconfirmedRidePanel(true)} className="flex items-center border-2 active:border-black mb-2 rounded-xl w-full justify-between mx-auto p-3 ">
          <img className="h-10" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"/>
          <div className=" w-1/2">
            <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-gray-600 text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 200</h2>
        </div>
        <div onClick={()=>setconfirmedRidePanel(true)} className="flex items-center border-2 active:border-black mb-2 rounded-xl w-full justify-between mx-auto p-3 ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_965,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"/>
          <div className=" w-1/2">
            <h4 className="font-medium text-lg">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-gray-600 text-xs">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 65</h2>
        </div>
        <div onClick={()=>setconfirmedRidePanel(true)} className="flex items-center border-2 active:border-black mb-2 rounded-xl w-full justify-between mx-auto p-3 ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_965,h_638/v1649231091/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"/>
          <div className=" w-1/2">
            <h4 className="font-medium text-lg">Uber Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-gray-600 text-xs">Affordable, auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 110</h2>
        </div>
    </div>
  )
}

export default VehiclePanel