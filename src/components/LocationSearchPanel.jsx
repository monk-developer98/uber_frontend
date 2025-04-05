import React from 'react'

const LocationSearchPanel = ({setPanelOpen, setVehicle}) => {
  const location = [
    '24B , Near is Kapoors Cafe , Bhopal' , 
    "22B , Near's School , Bhopal",
    "13B , Near's Station , Bhopal",
    "27B , Near's Fuel Pump , Bhopal",
  ]
  return (
    <div>
        {/* This is just sample Data */}
        {
          location.map((item , index) => {
            return (
              <div key={index} onClick={()=>{setVehicle(true); setPanelOpen(false);} } className='flex  border-2 p-2 rounded-xl border-gray-50 active:border-black  items-center justify-start gap-4 my-2'>
                <h2 className='bg-[#eee] h-8 p-2 rounded-full w-8 flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
                <h4 className='font-medium'>{item}</h4>
            </div>
            )
          })
        }
      
    </div>
  )
}

export default LocationSearchPanel