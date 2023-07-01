import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Autentification/Log/Login";
import { SignIn } from "./components/Autentification/Sign/SignIn";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>

    </div>
   
  );
}

export default App;
