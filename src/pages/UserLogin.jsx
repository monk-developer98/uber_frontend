import React, { useState  } from "react";
import { Link , useNavigate} from "react-router-dom";
import {UserDataContext} from "../context/UserContext";
import Axios from "axios";
import { getAPI } from '../Constant';


const UserLogin = () => {
  const navigate = useNavigate()
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault()
     
    const userData = {
      email: email,
      password: password
    }

    const response = await Axios.post(`${getAPI}users/login`, userData)

    if(response.status === 200) {
      const data  = response.data
      setUser(data.user)
      localStorage.setItem('token', (data.token))
      navigate('/home')
    }
    
    // setEmail('')
    // setPassword('')
    
  }
  console.log('user' , user);

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
            onChange={(e)=>{setEmail(e.target.value)}}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="password"
          />

          <button className="bg-[#111] text-[#fff] font-semibold w-full mb-3 rounded px-4 py-2 text-lg">
            Login
          </button>
        </form>
        <p className="text-center mb-3">
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link to={'/captain-login'} className="bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold w-full mb-7 rounded px-4 py-2 text-lg">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
