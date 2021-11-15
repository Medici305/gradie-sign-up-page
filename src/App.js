import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;
