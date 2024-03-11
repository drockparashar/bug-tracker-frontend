import "./App.css";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHome from "./pages/UserHome";
import CreateBug from "./components/CreateBug";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import AdminHome from "./pages/AdminHome";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/userLogin" element={<UserLogin />}></Route>
          <Route path="/userSignup" element={<UserSignup />}></Route>
          <Route path="/userhome" element={<UserHome />}></Route>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/createBug" element={<CreateBug />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
