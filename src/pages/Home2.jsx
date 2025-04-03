import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home2 = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  useGSAP(function () {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
        padding:24,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
       
      })

    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
        padding:0,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
      
    }
  },[panelOpen])
  return (
    <div className="h-screen relative">
      <img
        className="w-16 ml-5 mt-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="gif"
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className="absolute right-5 top-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find A trip</h4>
          <form onSubmit={(e)=>submitHandler(e)}> 
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-500 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-5 mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full "
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              onClick={() => setPanelOpen(true)}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] bg-white ">
            <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home2;
