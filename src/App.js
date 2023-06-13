import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext.js";
import Messenger from "./pages/messenger/Messenger.jsx";
function App() {
  const { user } = useContext(AuthContext);

  // const loaderLogin = (user) => {
  //   if (user) {
  //     return redirect("/");
  //   }
  //   return <Login />;
  // };

  // const loaderRegister = (user) => {
  //   if (user) {
  //     return redirect("/");
  //   }
  //   return <Register />;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" replace /> : <Messenger />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
