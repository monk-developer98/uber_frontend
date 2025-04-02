import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import Axios from 'axios';
import { getAPI } from '../Constant';


const CaptainSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const [ vehicleColor, setVehicleColor] = useState("");
    const [ vehiclePlate, setVehiclePlate] = useState("");
    const [ vehicleCapacity, setVehicleCapacity] = useState("");
    const [ vehicleType, setVehicleType] = useState("");

  
    const submitHandler = async (e) => {
      e.preventDefault();
      
      const newCaptain = {
        fullname: {
          firstname: firstname,
          lastname: lastname, 
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await Axios.post(`${getAPI}captains/register`, newCaptain);
      if(response.status === 201) {
        const data  = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', (data.token))
        navigate('/captain-home')
      }
      
  
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    };
    console.log('captain' , captain);
    
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-16 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">What's our Captain's name ?</h3>
        <div className="flex gap-3 mb-5">
          <input
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="bg-[#eeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="first name"
          />
          <input
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            className="bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
            type="text"
            placeholder="last name"
          />
        </div>

        <h3 className="text-lg font-medium mb-2">What's our Captain's email ?</h3>
        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <h3 className="text-lg font-medium mb-2
        ">Vehicle Information</h3>
        <div className="flex gap-3 mb-5">
          <input
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            className="bg-[#eeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="vehicle color"
          />
          <input
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value);
            }}
            className="bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
            type="text"
            placeholder="vehicle plate"
          />
        </div>
        <div className="flex gap-3 mb-5">
          <input
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            className="bg-[#eeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base"
            type="number"
            placeholder="vehicle capacity"
          />
          <select
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            className="bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base" >

            <option value="car">Car</option>
            <option value="motorcycle">Bike</option>
            <option value="auto">Auto</option>
            </select>
        </div>

        <button className="bg-[#111] text-[#fff] font-semibold w-full mb-3 rounded px-4 py-2 text-lg">
          Create new Captain
        </button>
      </form>
      <p className="text-center mb-3">
        Already have an account?{" "}
        <Link to={"/captain-login"} className="text-blue-600">
          Login Here
        </Link>
      </p>
    </div>
    {/* <div>
      <Link
        to={"/login"}
        className="bg-[#d56222] flex items-center justify-center text-[#fff] font-semibold w-full mb-7 rounded px-4 py-2 text-lg"
      >
        Sign in as user
      </Link>
    </div> */}
  </div>
  )
}

export default CaptainSignup