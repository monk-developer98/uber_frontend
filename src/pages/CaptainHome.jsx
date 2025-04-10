import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Captaindetails from "../components/Captaindetails";
import RidePopup from "../components/RidePopup";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopRef = useRef(null);
  const confirmRidePopRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen ">
      <div className="fixed w-full p-3 top-0 flex items-center justify-between">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
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
        <Captaindetails />
      </div>
      <div ref={ridePopRef} className="fixed bottom-0 w-full z-10 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopup setRidePopupPanel={setRidePopupPanel}  setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopRef} className="fixed bottom-0 h-screen w-full z-10 translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel}  setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
