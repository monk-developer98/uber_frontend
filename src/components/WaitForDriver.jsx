import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setwaitingForDriver(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
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
        <div className="w-full mt-5">
          <div className="flex gap-5 p-2 border-b-2 items-center ">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">546/11-A</h3>
              <p className="text-sm text-gray-600 mt-1">
                Kashipur , Uttrakhand
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default WaitForDriver;
