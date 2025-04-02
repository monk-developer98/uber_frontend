import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { getAPI } from '../Constant';

const CaptainLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  

  const submitHandler = async (e) => {
    e.preventDefault();
   
    const captainData = {
      email: email,
      password: password,
    }

    const response = await Axios.post(`${getAPI}captains/login`, captainData);
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");
  };
  console.log("captain", captain);
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />

          <button className="bg-[#111] text-[#fff] font-semibold w-full mb-3 rounded px-4 py-2 text-lg">
            Login As Captain
          </button>
        </form>
        <p className="text-center mb-3">
          Join a fleet?{" "}
          <Link to={"/captain-signup"} className="text-blue-600">
          Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-[#d56222] flex items-center justify-center text-[#fff] font-semibold w-full mb-7 rounded px-4 py-2 text-lg"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
