
import Topbar from "./components/topbar/Topbar";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { useContext } from "react";
function App() {


  const { user } = useContext(AuthContext);
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />



        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/register"
          element={user ? <Navigate to="/" /> : <Register />} />

        <Route exact path="/profile/:username" element={<Profile />} />







      </Routes>
    </BrowserRouter >
  );
}

export default App;
