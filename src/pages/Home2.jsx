import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitForDriver from "../components/WaitForDriver";
import LookingforDriver from "../components/LookingforDriver";

const Home2 = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const confirmRideRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [vehicle, setVehicle] = useState(false);
  const [confirmedRidePanel, setconfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false);

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

  useGSAP(function () {
   if(vehicle) {
      gsap.to(vehicleRef.current, {
        transform: "translateY(0%)",
      });
    }else{
      gsap.to(vehicleRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[vehicle])

  useGSAP(function () {
   if(confirmedRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0%)",
      });
    }else{
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[confirmedRidePanel])

  useGSAP(function () {
   if(vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[vehicleFound])

  useGSAP(function () {
   if(waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0%)",
      });
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
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
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehicle={setVehicle} />
        </div>
      </div>
      <div ref={vehicleRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"> 
        <VehiclePanel setVehicle={setVehicle} setconfirmedRidePanel={setconfirmedRidePanel} />
      </div>
      <div ref={confirmRideRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"> 
        <ConfirmedRide setconfirmedRidePanel={setconfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"> 
          <LookingforDriver  setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"> 
          <WaitForDriver setwaitingForDriver={setwaitingForDriver} />
      </div>
    </div>
  );
};

export default Home2;
