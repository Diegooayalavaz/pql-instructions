import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import imageLayout from "../../assets/images/background-quidditch.png";
import userDefault from "../../assets/images/user-default.webp";

// Importing player position images
import ChaserPicture from "../../assets/images/chaser.webp";
import KeeperPicture from "../../assets/images/keeper.webp";
import SeekerPicture from "../../assets/images/seeker.webp";
import BeaterPicture from "../../assets/images/beater.webp";

// Importing team logos
import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";
import shieldImage from "../../assets/images/shield.webp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AbilityImage from "../../components/AbilityImage";

const Team = () => {
  const { id } = useParams(); // Getting team ID from URL parameters
  const [show, setShow] = useState(false); // State to manage modal visibility
  const [team, setTeam] = useState({});
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  console.log(players);

  // Fetching team data when the component mounts or when the team ID changes
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const res = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}api/teams/${id}`
        );
        if (res) {
          setTeam(res.data);
          const resPlayers = await Axios.get(
            `${process.env.REACT_APP_API_BASE_URL}api/teams/${id}/players`
          );
          if (resPlayers) {
            setPlayers(resPlayers.data);
          }
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        Swal.fire("Error", "Failed to fetch team data.", "error");
      }
    };

    fetchTeamData();
  }, [id]);

  // Handlers for modal visibility
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to get player image based on their position
  const getPicturePlayer = (position) => {
    switch (position) {
      case "Chaser":
        return ChaserPicture;
      case "Keeper":
        return KeeperPicture;
      case "Seeker":
        return SeekerPicture;
      case "Beater":
        return BeaterPicture;
      default:
        return userDefault;
    }
  };

  // Function to get team logo based on the team name
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

  // Function to handle input changes for the team object
  const handleChange = (event, name) => {
    const { value } = event.target;
    setTeam({ ...team, [name]: value });
  };

  // Function to handle deleting a player from the team
  const handleDeletePlayer = async (player) => {
    const result = await Swal.fire({
      title: "Are you sure you want to remove this player?",
      text: "You won't be able to revert this.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    });

    if (result.isConfirmed) {
      try {
        await Axios.put(
          `${process.env.REACT_APP_API_BASE_URL}api/players/${player.id}`,
          { ...player, team_id: null }
        );
        Swal.fire(
          "Removed player!",
          "The player has been removed from the team.",
          "success"
        );
        setPlayers((prev) => prev.filter((p) => p.id !== player.id));
      } catch (error) {
        console.error("Error removing player:", error);
      }
    }
  };

  // Function to handle deleting the team
  const handleDeleteTeam = async () => {
    if (players.length === 0) {
      const result = await Swal.fire({
        title: "Are you sure you want to delete this team?",
        text: "You won't be able to revert this.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      });

      if (result.isConfirmed) {
        try {
          await Axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}api/teams/${team.id}`
          );
          Swal.fire(
            "Deleted team",
            "The team was deleted successfully.",
            "success"
          );
          navigate("../");
        } catch (error) {
          console.error("Error deleting team:", error);
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "You are not allowed to delete this team",
        text: "Please remove all players before deleting this team.",
      });
    }
  };

  // Function to handle submitting team updates
  const handleSubmit = async () => {
    try {
      await Axios.put(
        `${process.env.REACT_APP_API_BASE_URL}api/teams/${team.id}`,
        team
      );
      Swal.fire("Success!", "The team was updated successfully.", "success");
      handleClose();
    } catch (error) {
      console.error("Error updating the team:", error);
      Swal.fire("Error", "Error updating the team.", "error");
    }
  };

  // Team modal component for editing team details
  const TeamModal = ({
    show,
    handleClose,
    handleChange,
    team,
    handleSubmit,
  }) => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 mb-0 pb-0">
          <Modal.Title>Edit the team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mb-3">
            <label htmlFor="" className="form-label">
              Default Houses:
            </label>
            <div className="row">
              {["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"].map(
                (house) => (
                  <div className="col text-center mb-2 mb-md-0" key={house}>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleChange({ target: { value: house } }, "name")
                      }
                    >
                      {house}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Name of the House:</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Name of the House"
              value={team.name}
              onChange={(e) =>
                handleChange({ target: { value: e.target.value } }, "name")
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="">Slogan:</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Slogan of the House"
              value={team.slogan}
              onChange={(e) =>
                handleChange({ target: { value: e.target.value } }, "slogan")
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-0 pt-0 border-0">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const PlayerRow = ({ player, index, handleDeletePlayer }) => {
    return (
      <tr>
        <td className="">
          <p className="text-center mt-3 mb-0">{index + 1}</p>
        </td>
        <td>
          <img
            src={getPicturePlayer(player.position)} // Assuming you have a `picture` field
            alt="Player"
            className="rounded-circle"
            height={50}
            width={50}
          />
        </td>
        <td>
          <h4 className="mb-0">{player.name}</h4>
          <p className="mb-0 text-warning">{player.position}</p>
        </td>
        <td className="my-auto">
          <p className="mt-3 mb-3">{player.age} years</p>
        </td>
        <td className="align-middle text-center">
          <AbilityImage ability={player.ability} />
        </td>
        <td className="text-center">
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => handleDeletePlayer(player)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start min-vh-100 pt-1 pb-5  border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
          }}
        >
          <div className="container mt-5">
            <div>
              <div className="card card-details">
                <div className="card-body">
                  <div className="row">
                    <div className="col col-12 col-md-3 text-center my-auto">
                      <img
                        src={getTeamLogo(team.name)}
                        className="rounded-circle"
                        alt=""
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="col col-12 col-md-9">
                      <div
                        className=""
                        style={{ position: "absolute", right: "20px" }}
                      >
                        <i
                          className="fa-solid fa-gear me-3"
                          onClick={() => handleShow(true)}
                          style={{ cursor: "pointer" }}
                        ></i>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => handleDeleteTeam()}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                      <h1 className="text-center text-md-start">{team.name}</h1>
                      <p className="mb-2 text-center text-md-start">
                        {team.slogan}
                      </p>
                      <p className="text-center text-md-start">
                        <i className="fa fa-users me-2 "></i>{" "}
                        {players ? players.length : 0} players
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-details mt-4 pb-4">
                <div className="card-body">
                  <div className="mt-4">
                    {players.length > 0 ? (
                      <>
                        <div className="table-responsive rounded  p-2">
                          <table className="table rounded table-striped table-hover table-dark mb-0">
                            <tbody>
                              {players.map((player, index) => (
                                <PlayerRow
                                  key={index}
                                  player={player}
                                  index={index}
                                  handleDeletePlayer={handleDeletePlayer}
                                />
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="text-center mt-4">
                          <Link to={`../edit-team/${team.id}`}>
                            <button className="btn btn-primary text-uppercase">
                              Recluit players
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <h1>No players in this team.</h1>
                        <Link to={`../edit-team/${team.id}`}>
                          <button className="btn btn-primary text-uppercase">
                            Recluit players
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <TeamModal
              show={show}
              handleClose={handleClose}
              handleChange={(event, name) => handleChange(event, name)}
              team={team}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Team;
