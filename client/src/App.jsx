import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Error404 from "./pages/pages-common/Error404";
import Login from "./pages/pages-common/Login";

import Home from "./pages/pages-admin/Home";
import Seleccion from "./pages/pages-admin/Seleccion";
import Equipo from "./pages/pages-admin/Equipo";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/seleccion" element={<Seleccion />} />
      <Route path="/equipo" element={<Equipo />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
