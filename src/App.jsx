import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { ForgotPass } from "./components/ForgotPass/ForgotPass";
import { ForgotPassConfirm } from "./components/ForgotPass/ForgotPassConfirm";
import {Register} from "./components/Register/Register";
import "../src/components/Login/Login.css";
import { auth } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const App = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  {usuario ? <Profile correoUsuario={usuario.email} /> : <Login />}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/App/Home " element={< Home/>} />
        <Route path="/App/" element={<Login />} />
        <Route path="/App/Profile" element={<Profile />} />
        <Route path="/App/Register" element={<Register />} />
        <Route path="/App/ForgotPass" element={<ForgotPass />} />
        <Route path="/App/ForgotPassConfirm" element={<ForgotPassConfirm/>} />
      </Routes>
    </BrowserRouter>
  );
};
