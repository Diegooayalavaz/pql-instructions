import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick"; // Importing slider for displaying players

import userDefault from "../../assets/images/user-default.webp"; // Default image for players
import shieldImage from "../../assets/images/shield.webp"; // Default shield image

// Player position images
import ChaserPicture from "../../assets/images/chaser.webp";
import KeeperPicture from "../../assets/images/keeper.webp";
import SeekerPicture from "../../assets/images/seeker.webp";
import BeaterPicture from "../../assets/images/beater.webp";

// Import the images
import ChaserAccuracyPicture from "../../assets/images/chaser_accuracy.webp";
import ChaserAgilePicture from "../../assets/images/chaser_agile.webp";
import KeeperSavesPicture from "../../assets/images/keeper_saves.webp";
import KeeperEndurancePicture from "../../assets/images/keeper_endurance.webp";
import SeekerVisionPicture from "../../assets/images/seeker_vision.webp";
import SeekerSpeedPicture from "../../assets/images/seeker_speed.webp";
import BeaterPowerfulPicture from "../../assets/images/beater_powerful.webp";
import BeaterReflexesPicture from "../../assets/images/beater_reflexes.webp";

// Importing styles for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Selection = ({
  team,
  handleAddingPlayer,
  handleSubmit,
  getTeamLogo,
  action,
}) => {
  const [players, setPlayers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  // Function to add a player to the team
  const handleAdd = (selectedPlayer) => {
    setPlayers(players.filter((player) => player.id !== selectedPlayer.id));
    handleAddingPlayer(selectedPlayer);
    setShow(false);
  };

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal with player details
  const handleShow = (player) => {
    setSelectedPlayer(player);
    setShow(true);
  };

  // Fetch available players when component mounts
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_BASE_URL}api/players/available/`)
      .then((res) => {
        if (res) {
          setPlayers(res.data); // Set players from API response
          console.log(res.data);
        }
      })
      .catch(() => {});
  }, []);

  // Settings for the slider component
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Function to get the picture of a player based on their position
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

  const handleClickAbility = (ability) => {
    setSelectedPlayer({ ...selectedPlayer, ability: ability });
  };

  const ChooseAbility = (position) => {
    const isActive = (ability) => selectedPlayer.ability === ability;

    switch (position) {
      case "Chaser":
        return (
          <>
            <div className="row">
              <div className="col">
                <img
                  src={ChaserAccuracyPicture}
                  alt="Perfect Accuracy"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("chaser_accuracy") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("chaser_accuracy")}
                />
                <p style={{ fontSize: "12px" }}>Perfect Accuracy</p>
              </div>
              <div className="col">
                <img
                  src={ChaserAgilePicture}
                  alt="Agile Movement"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("chaser_agile") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("chaser_agile")}
                />
                <p style={{ fontSize: "12px" }}>Agile Movement</p>
              </div>
            </div>
          </>
        );
      case "Keeper":
        return (
          <>
            <div className="row">
              <div className="col">
                <img
                  src={KeeperSavesPicture}
                  alt="Impossible Saves"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("keeper_saves") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("keeper_saves")}
                />
                <p style={{ fontSize: "12px" }}>Impossible Saves</p>
              </div>
              <div className="col">
                <img
                  src={KeeperEndurancePicture}
                  alt="Physical Endurance"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("keeper_endurance") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("keeper_endurance")}
                />
                <p style={{ fontSize: "12px" }}>Physical Endurance</p>
              </div>
            </div>
          </>
        );
      case "Seeker":
        return (
          <>
            <div className="row">
              <div className="col">
                <img
                  src={SeekerVisionPicture}
                  alt="Enhanced Vision"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("seeker_vision") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("seeker_vision")}
                />
                <p style={{ fontSize: "12px" }}>Enhanced Vision</p>
              </div>
              <div className="col">
                <img
                  src={SeekerSpeedPicture}
                  alt="Superhuman Speed"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("seeker_speed") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("seeker_speed")}
                />
                <p style={{ fontSize: "12px" }}>Superhuman Speed</p>
              </div>
            </div>
          </>
        );
      case "Beater":
        return (
          <>
            <div className="row">
              <div className="col">
                <img
                  src={BeaterPowerfulPicture}
                  alt="Powerful Strike"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("beater_powerful") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("beater_powerful")}
                />
                <p style={{ fontSize: "12px" }}>Powerful Strike</p>
              </div>
              <div className="col">
                <img
                  src={BeaterReflexesPicture}
                  alt="Quick Reflexes"
                  className={`rounded cursor-pointer image-ability ${
                    isActive("beater_reflexes") ? "active" : ""
                  }`}
                  width={100}
                  height={100}
                  onClick={() => handleClickAbility("beater_reflexes")}
                />
                <p style={{ fontSize: "12px" }}>Quick Reflexes</p>
              </div>
            </div>
          </>
        );
      default:
        return null; // Return null if the ability doesn't match any case
    }
  };

  // Modal component to show player details
  const PlayerModal = ({
    show,
    handleClose,
    selectedPlayer,
    getPicturePlayer,
    handleAdd,
  }) => {
    return (
      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="pt-0">
          <div className="text-center">
            <img
              src={getPicturePlayer(selectedPlayer.position)}
              alt=""
              height={200}
              width={200}
              className="mx-auto rounded"
            />
            <h4 className="card-title">{selectedPlayer.name}</h4>
            <p className="card-text mb-0">{selectedPlayer.age} years</p>
            <p className="mb-0 fw-bold">{selectedPlayer.position}</p>
            <div className="text-center">
              <p className="mb-0 card-text mt-2">Select an ability:</p>
              {ChooseAbility(selectedPlayer.position)}
            </div>
          </div>
          <Modal.Footer className="border-0 mb-0 pb-0 text-center">
            <Button
              variant="primary"
              className="text-center mx-auto text-uppercase"
              onClick={() => handleAdd(selectedPlayer)}
            >
              Add player
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  };

  // Header component to display team information
  const TeamHeader = ({ team, getTeamLogo }) => {
    return (
      <div className="card card-details">
        <div className="card-body">
          <div className="row">
            <div className="col col-12 col-md-3 text-center my-auto">
              <img
                src={getTeamLogo(team.name)}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="col col-12 col-md-9">
              <h1 className="text-center text-md-start">{team.name}</h1>
              <p className="mb-2 text-center text-md-start">{team.slogan}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card component for displaying individual player information
  const PlayerCard = ({ player, handleShow, getPicturePlayer }) => {
    return (
      <div className="col">
        <div
          className="card me-0 express-card"
          onClick={() => handleShow(player)}
        >
          <div className="card-body text-center">
            <img
              src={getPicturePlayer(player.position)}
              alt=""
              height={100}
              width={100}
              className="mx-auto rounded"
            />
            <h4 className="mb-0">{player.name}</h4>
            <p className="mb-0">{player.age} years</p>
            <p className="mb-0 fw-bold">{player.position}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container mt-0">
          <div className={``}>
            <TeamHeader team={team} getTeamLogo={getTeamLogo} />
            <div className="card card-details mt-4 pb-4">
              <div className="card-body">
                <div className="mt-4">
                  <div className="row slider-container">
                    <Slider {...settings}>
                      {players.map((player) => (
                        <PlayerCard
                          key={player.id}
                          player={player}
                          handleShow={handleShow}
                          getPicturePlayer={getPicturePlayer}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-4">
              <button
                className="btn btn-primary text-uppercase"
                onClick={handleSubmit}
              >
                {action === "update" ? "Update team" : "Create team"}
              </button>
            </div>
          </div>

          <PlayerModal
            show={show}
            handleClose={handleClose}
            selectedPlayer={selectedPlayer}
            getPicturePlayer={getPicturePlayer}
            handleAdd={handleAdd}
          />
        </div>
      </main>
    </>
  );
};

export default Selection;
