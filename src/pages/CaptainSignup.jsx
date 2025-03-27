import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(email, password);
  
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-16 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
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

        <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeee] mb-10 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <button className="bg-[#111] text-[#fff] font-semibold w-full mb-3 rounded px-4 py-2 text-lg">
          Create new
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