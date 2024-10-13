import React, { useEffect, useState } from "react";
import imageLayout from "../../assets/images/school-background.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetallesEquipo from "./DetallesEquipo";
import Seleccion from "./Seleccion";
import Swal from "sweetalert2";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";
import shieldImage from "../../assets/images/shield.webp";

const EditarEquipo = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({
    name: "",
    slogan: "",
    players: [],
  });
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(async () => {
    if (id) {
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}api/teams/${id}`
        );
        setTeam(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

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

      navigate("../");
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "Ha ocurrido un error al registrar el equipo",
        "error"
      );
    }
  };
  const getTeamLogo = (teamName) => {
    switch (teamName) {
      case "Gryffindor":
        return GryffindorLogo;
      case "Hufflepuff":
        return HufflepuffLogo;
      case "Ravenclaw":
        return RavenclawLogo;
      case "Slytherin":
        return SlytherinLogo;
      default:
        return shieldImage; // Default logo if the team name doesn't match
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
      Swal.fire("AGREGADO", "El jugador se agregó al equipo", "success");
    }
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start pt-0 pb-0 border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="page-header align-items-start min-vh-100 pt-2 pb-0  border-radius-lg"
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
                  getTeamLogo={getTeamLogo}
                />
              ) : (
                <Seleccion
                  team={team}
                  handleAddingPlayer={handleAddingPlayer}
                  handleSubmit={handleSubmit}
                  getTeamLogo={getTeamLogo}
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

export default EditarEquipo;
