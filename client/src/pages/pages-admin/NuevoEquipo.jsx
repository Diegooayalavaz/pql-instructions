import React, { useState } from "react";
import imageLayout from "../../assets/images/school-background.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetallesEquipo from "./DetallesEquipo";
import Seleccion from "./Seleccion";
import Swal from "sweetalert2";
import Axios from "axios";
import { Link, Navigate } from "react-router-dom";

const NuevoEquipo = () => {
  const [team, setTeam] = useState({
    name: "",
    slogan: "",
    players: [],
  });
  const [show, setShow] = useState(true);

  const handleSubmit = async () => {
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}api/teams/`,
        team
      );
      Swal.fire(
        "!Éxito!",
        "El equipo se ha registrado correctamente",
        "success"
      );
      Navigate("/equipo");
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "Ha ocurrido un error al registrar el equipo",
        "error"
      );
    }
  };

  const handleChange = (event, name) => {
    const { value } = event.target;
    setTeam({ ...team, [name]: value });
  };

  const handleStart = (event, name) => {
    setShow(false);
  };

  const handleAddingPlayer = (selectedPlayer) => {
    if (selectedPlayer) {
      const updatedTeam = {
        ...team,
        players: [...team.players, selectedPlayer.id],
      };

      // Update the state using the new team object
      setTeam(updatedTeam);
      console.log(team);
    }
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start pt-5 pb-0 border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="page-header align-items-start min-vh-100 pt-5 pb-5  border-radius-lg"
            style={{
              backgroundImage: `url(${imageLayout})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="container mt-5">
              {show ? (
                <DetallesEquipo
                  handleChange={handleChange}
                  team={team}
                  handleStart={handleStart}
                />
              ) : (
                <Seleccion
                  team={team}
                  handleAddingPlayer={handleAddingPlayer}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default NuevoEquipo;
