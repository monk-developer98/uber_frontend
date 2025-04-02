import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home2 from "./pages/Home2";
import UserProtected from "./pages/UserProtected";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtected>
              <Home2 />
            </UserProtected>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
             </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
