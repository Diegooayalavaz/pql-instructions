import React, { useEffect, useState } from "react";
import imageLayout from "../../assets/images/school-background.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Seleccion from "./Selection";
import Swal from "sweetalert2";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";
import shieldImage from "../../assets/images/shield.webp";

const EditTeam = () => {
  const { id } = useParams(); // Get team ID from URL parameters
  const [team, setTeam] = useState({
    name: "",
    slogan: "",
    players: [],
  });
  const navigate = useNavigate();
  const [tmpPlayers, setTmpPlayers] = useState([]); // Temporary array to hold players for batch update

  useEffect(() => {
    async function fetchTeam() {
      if (id) {
        try {
          const response = await Axios.get(
            `${process.env.REACT_APP_API_BASE_URL}api/teams/${id}`
          );
          console.log(response.data);
          setTeam(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchTeam();
  }, [id]);

  // Handle team submission for update
  const handleSubmit = async () => {
    try {
      const response = await Axios.put(
        `${process.env.REACT_APP_API_BASE_URL}api/teams/${team.id}`,
        team
      );

      console.log(response.data.players);
      tmpPlayers.forEach((player) => {
        player.team_id = response.data.id; // Assign updated team ID to each player
        Axios.put(
          `${process.env.REACT_APP_API_BASE_URL}api/players/${player.id}`,
          player // Update player data
        )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      });
      Swal.fire("!Success!", "Team successfully updated", "success");

      navigate("../");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error team no updated", "error");
    }
  };

  // Get the appropriate team logo based on the team name
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

  // Add a player to the team and temporary list
  const handleAddingPlayer = (selectedPlayer) => {
    if (selectedPlayer) {
      // Ensure team.players is an array (fallback to empty array)
      const updatedTeam = {
        ...team,
        players: [...(team.players || []), selectedPlayer.id], // Safely spread players
      };

      // Update the state with the new team object
      setTeam(updatedTeam);

      // Add new Player to temporary array for batch update later
      tmpPlayers.push(selectedPlayer);

      // Display success message
      Swal.fire("Added", "The player was added to the team", "success");
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
              <Seleccion
                team={team}
                handleAddingPlayer={handleAddingPlayer}
                handleSubmit={handleSubmit}
                getTeamLogo={getTeamLogo}
                action="update"
              />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default EditTeam;
