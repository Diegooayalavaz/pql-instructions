import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper.js

import Error404 from "./pages/pages-common/Error404";
import Login from "./pages/pages-common/Login";

import Home from "./pages/pages-admin/Home";
import Selection from "./pages/pages-admin/Selection";
import Team from "./pages/pages-admin/Team";

import "./App.css";
import NewTeam from "./pages/pages-admin/NewTeam";
import ForgotPassword from "./pages/pages-common/ForgotPassword";
import SignUp from "./pages/pages-common/SignUp";
import EditTeam from "./pages/pages-admin/EditTeam";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/team/:id" element={<Team />} />
      <Route path="/new-team" element={<NewTeam />} />
      <Route path="/edit-team/:id" element={<EditTeam />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
