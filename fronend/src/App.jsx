import React from "react";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar";
import Forgetpassword from "./components/Forgetpassword";

import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;