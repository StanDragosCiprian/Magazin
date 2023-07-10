import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Autentification/Log/Login";
import { SignIn } from "./components/Autentification/Sign/SignIn";
import { Home } from "./components/Home";
import { AdminWorkBench } from "./components/Admin/AdminWorkBench";
import { ClothesPage } from "./components/Product/ClothesPage";
import { TvPage } from "./components/Product/TvPage";
import { isAdmin } from "./components/Admin/verifyAdmin";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signIn" element={<SignIn />} />
          {isAdmin() && <Route path="admin" element={<AdminWorkBench />} />}
          <Route path="/clothes/:id" Component={ClothesPage} />
          <Route path="/tv/:id" Component={TvPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
