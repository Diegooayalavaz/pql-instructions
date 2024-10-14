import React, { useState } from "react";
import imageLayout from "../../assets/images/school-background.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailsTeam from "./DetailsTeam";
import Selection from "./Selection";
import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";
import shieldImage from "../../assets/images/shield.webp";

const NewTeam = () => {
  const [team, setTeam] = useState({
    name: "",
    slogan: "",
    players: [],
  });

  // State for controlling the visibility of team details and player selection
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  // Function to handle team registration
  const handleSubmit = async () => {
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}api/teams/`,
        team
      )
        .then((response) => {
          Swal.fire(
            "!Success!",
            "The team has been successfully registered",
            "success"
          );
          navigate("../");
        })
        .catch((error) => {
          var message = error.response.data.message;
          console.log(message);
          Swal.fire("Error", message, "error");
        });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to get the logo based on the team name
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

  // Function to handle input changes for team details
  const handleChange = (event, name) => {
    const { value } = event.target;
    setTeam({ ...team, [name]: value });
  };

  // Function to handle starting the player selection process
  const handleStart = (event, name) => {
    setShow(false);
  };

  // Function to add a selected player to the team
  const handleAddingPlayer = (selectedPlayer) => {
    if (selectedPlayer) {
      const updatedTeam = {
        ...team,
        players: [...team.players, selectedPlayer.id],
      };

      // Update the state using the new team object
      setTeam(updatedTeam);
      Swal.fire("Added", "The player was added successfully", "success");
    }
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start min-vh-100 pt-2 pb-0  border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
          }}
        >
          <div className="container mt-5">
            {show ? (
              <DetailsTeam
                handleChange={handleChange}
                team={team}
                handleStart={handleStart}
                getTeamLogo={getTeamLogo}
              />
            ) : (
              <Selection
                team={team}
                handleAddingPlayer={handleAddingPlayer}
                handleSubmit={handleSubmit}
                getTeamLogo={getTeamLogo}
              />
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default NewTeam;
