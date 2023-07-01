import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Log/Login";
import { SignIn } from "./components/Sign/SignIn";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signIn" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
