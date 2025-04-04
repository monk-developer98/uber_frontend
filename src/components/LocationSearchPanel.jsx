import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
        {/* This is just sample Data */}
        <div className='flex  border-2 p-2 rounded-xl border-gray-50 active:border-black  items-center justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-8 p-2 rounded-full w-8 flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>24B , Near's Kapoors Cafe , Bhopal</h4>
        </div>
        <div className='flex border-2 p-2 rounded-xl border-gray-50 active:border-black  items-center justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-8 p-2 rounded-full w-8 flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>24B , Near's Kapoors Cafe , Bhopal</h4>
        </div>
        <div className='flex  border-2 p-2 rounded-xl border-gray-50 active:border-black items-center justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-8 p-2 rounded-full w-8 flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>24B , Near's Kapoors Cafe , Bhopal</h4>
        </div>
    </div>
  )
}

export default LocationSearchPanel