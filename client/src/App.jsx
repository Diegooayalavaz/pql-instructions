import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Error404 from "./pages/pages-common/Error404";
import Login from "./pages/pages-common/Login";

import Home from "./pages/pages-admin/Home";
import Seleccion from "./pages/pages-admin/Seleccion";
import Equipo from "./pages/pages-admin/Equipo";

import "./App.css";
import NuevoEquipo from "./pages/pages-admin/NuevoEquipo";
import ForgotPassword from "./pages/pages-common/ForgotPassword";
import SignUp from "./pages/pages-common/SignUp";
import EditarEquipo from "./pages/pages-admin/EditarEquipo";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/seleccion" element={<Seleccion />} />
      <Route path="/equipo/:id" element={<Equipo />} />
      <Route path="/nuevo-equipo" element={<NuevoEquipo />} />
      <Route path="/editar-equipo/:id" element={<EditarEquipo />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
