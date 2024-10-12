import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Error404 from "./pages/pages-common/Error404";
import Home from "./pages/pages-admin/Home";
import Login from "./pages/pages-common/Login";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" index element={<Login />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
