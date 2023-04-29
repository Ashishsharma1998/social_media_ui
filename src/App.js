import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext.js";
function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const loader = async () => {
  //   return redirect("/");
  // };
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={user ? navigate("/") : <Login />} />
        <Route path="/register" element={user ? navigate("/") : <Register />} />
      </Routes>
    </div>
  );
}

export default App;
