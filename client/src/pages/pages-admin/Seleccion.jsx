import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

import userDefault from "../../assets/images/user-default.webp";
import shieldImage from "../../assets/images/shield.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Seleccion = ({ team, handleAddingPlayer, handleSubmit }) => {
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

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container mt-5">
          {isVisible && (
            <div
              className={`text-center create-team-animation ${animationClass}`}
            >
              <h1>Es hora de crear tu equipo</h1>
              <button className="btn btn-primary" onClick={handleClickIniciar}>
                Iniciar
              </button>
            </div>
          )}

          <div className={`${isVisible ? "d-none" : ""}`}>
            <div className="row">
              <div className="col col-3 text-center">
                <img src={shieldImage} alt="" height={100} width={100} />
              </div>
              <div className="col col-9">
                <h2>{team.name}</h2>
                <p>{team.slogan}</p>
              </div>
            </div>

            <div className="text-center">
              <h4>{team.players.length} / 7 jugadores</h4>
            </div>

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
                            src={userDefault}
                            alt=""
                            height={100}
                            width={100}
                            className="mx-auto rounded"
                          />
                          <p className="mb-0">{player.name}</p>
                          <p className="mb-0">{player.age}</p>
                          <p className="mb-0">{player.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="text-center mt-5">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Crear equipo
                </button>
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="border-0"></Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col col-3">
                  <img
                    src={userDefault}
                    alt=""
                    height={100}
                    width={100}
                    className="mx-auto rounded"
                  />
                </div>
                <div className="col col-9">
                  <h4 class="card-title">{selectedPlayer.name}</h4>
                  <p class="card-text mb-0">{selectedPlayer.age} años</p>
                  <p class="card-text">{selectedPlayer.position}</p>
                </div>
              </div>
              <Modal.Footer className=" border-0 mb-0 pb-0">
                <Button
                  variant="primary"
                  onClick={() => handleAddingPlayer(selectedPlayer)}
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
