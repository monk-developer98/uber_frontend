import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
  return (
    <div >
        <h5 onClick={()=>props.setConfirmRidePopupPanel(false)}  className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-5'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" />
            <h2 className='text-lg font-medium'>Kapil S</h2>
        </div>
        <h5 className='font-semibold text-lg'>2.2 KM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        {/* <img className="h-20" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" /> */}
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
        <Link to={'/captain-riding'} className="w-full mt-5 bg-green-500 text-center text-white font-semibold p-3 rounded-lg ">Confirm</Link>
        <button onClick={()=>props.setConfirmRidePopupPanel(false)} className="w-full mt-2 bg-red-500 text-white font-semibold p-3 rounded-lg ">Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmRidePopup