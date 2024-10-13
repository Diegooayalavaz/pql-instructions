import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import imageLayout from "../../assets/images/background-quidditch.png";
import userDefault from "../../assets/images/user-default.webp";

import ChaserPicture from "../../assets/images/chaser.webp";
import KeeperPicture from "../../assets/images/keeper.webp";
import SeekerPicture from "../../assets/images/seeker.webp";
import BeaterPicture from "../../assets/images/beater.webp";

import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";
import shieldImage from "../../assets/images/shield.webp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Equipo = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState({});
  const [players, setPlayers] = useState([]);
  const [playerSelected, setPlayerSelected] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickIniciar = () => {
    setIsVisible(false);
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

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_BASE_URL}api/teams/${id}`)
      .then((res) => {
        if (res) {
          console.log(res.data);
          setTeam(res.data);
          Axios.get(
            `${process.env.REACT_APP_API_BASE_URL}api/teams/${id}/players`
          )
            .then((resPlayers) => {
              if (resPlayers) {
                console.log(resPlayers.data);
                setPlayers(resPlayers.data);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getPlayers = () => {
    console.log("getPlayers");
  };

  const handleDelete = (player) => {
    Swal.fire({
      title: "¿Realmente quieres quitar al jugador del equipo?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const updatedPlayer = { ...player, team_id: null };
        Axios.put(
          `${process.env.REACT_APP_API_BASE_URL}api/players/${player.id}`,
          updatedPlayer
        ).then((response) => {
          Swal.fire("El jugador fue expulsado del equipo", "", "success");
          console.log(response);
          setPlayers(players.filter((p) => p.id !== player.id));
        });
      } else if (result.isDenied) {
        Swal.fire("Error al eliminar al jugador", "", "info");
      }
    });
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start min-vh-100 pt-5 pb-5  border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundSize: "cover",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mt-5">
            <div>
              <div className="card card-details">
                <div className="card-body">
                  <div className="row">
                    <div className="col col-3 text-center my-auto">
                      <img
                        src={getTeamLogo(team.name)}
                        className="rounded-circle"
                        alt=""
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="col col-9">
                      <h1>{team.name}</h1>
                      <p className="mb-2">{team.slogan}</p>
                      <p>
                        <i className="fa fa-users me-2"></i> {players.length} /
                        7 jugadores
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
                                <tr className="">
                                  <td scope="row" className="">
                                    <p className="text-center mt-3 mb-0">
                                      {index + 1}
                                    </p>
                                  </td>
                                  <td>
                                    <img
                                      src={getPicturePlayer(player.position)}
                                      alt=""
                                      className="rounded-circle"
                                      height={50}
                                      width={50}
                                    />
                                  </td>
                                  <td scope="row">
                                    <h4 className="">{player.name}</h4>
                                  </td>
                                  <td>{player.age}</td>
                                  <td>{player.position}</td>
                                  <td></td>
                                  <td className="text-center">
                                    <button
                                      className="btn btn-danger btn-sm mt-2"
                                      onClick={() => handleDelete(player)}
                                    >
                                      Eliminar
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <h1>No hay jugadores inscritos</h1>
                        <Link to={`../editar-equipo/${team.id}`}>
                          <button className="btn btn-primary text-uppercase">
                            Registrar jugadores
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col">Imagen</div>
                  <div className="col">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Agregar jugador
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Equipo;
