import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

import userDefault from "../../assets/images/user-default.webp";
import shieldImage from "../../assets/images/shield.webp";

import ChaserPicture from "../../assets/images/chaser.webp";
import KeeperPicture from "../../assets/images/keeper.webp";
import SeekerPicture from "../../assets/images/seeker.webp";
import BeaterPicture from "../../assets/images/beater.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Seleccion = ({ team, handleAddingPlayer, handleSubmit, getTeamLogo }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState("");
  const [show, setShow] = useState(false);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    name: "",
    age: "",
    position: "",
  });

  const handleClose = (selectedPlayer) => {
    handleAddingPlayer(selectedPlayer);
    setShow(false);
  };

  const handleShow = (player) => {
    setSelectedPlayer(player);
    setShow(true);
  };

  const handleClickIniciar = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  useEffect(() => {
    setAnimationClass("fade-in");
    Axios.get(`${process.env.REACT_APP_API_BASE_URL}api/players/available/`)
      .then((res) => {
        if (res) {
          setPlayers(res.data);
          console.log(res.data);
        }
      })
      .catch(() => {});
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container mt-0">
          <div className={``}>
            <div className="card card-details">
              <div className="card-body">
                <div className="row">
                  <div className="col col-3 text-center my-auto">
                    <img
                      src={getTeamLogo(team.name)}
                      alt=""
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="col col-9">
                    <h1>{team.name}</h1>
                    <p>{team.slogan}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5>
                    <i className="fa fa-users me-2"></i>{" "}
                    {team && team.players ? team.players.length : 0} / 7
                    jugadores{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card card-details mt-4 pb-4">
              <div className="card-body">
                <div className="mt-4">
                  <div className="row slider-container">
                    <Slider {...settings}>
                      {players.map((player) => (
                        <div className="col" key={player.id}>
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
                Crear equipo
              </button>
            </div>
          </div>

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
                <h4 class="card-title">{selectedPlayer.name}</h4>
                <p class="card-text mb-0">{selectedPlayer.age} años</p>
                <p className="mb-0 fw-bold">{selectedPlayer.position}</p>
              </div>
              <Modal.Footer className=" border-0 mb-0 pb-0 text-center">
                <Button
                  variant="primary"
                  className="text-center mx-auto text-uppercase"
                  onClick={() => handleClose(selectedPlayer)}
                >
                  Agregar jugador
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default Seleccion;
