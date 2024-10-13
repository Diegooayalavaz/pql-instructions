import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imageLayout from "../../assets/images/background-quidditch.png";
import userDefault from "../../assets/images/user-default.webp";
import shieldImage from "../../assets/images/shield.webp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Equipo = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState({});
  const [players, setPlayers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickIniciar = () => {
    setIsVisible(false);
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
              <div className="row">
                <div className="col col-3 text-center">
                  <img src={shieldImage} alt="" height={100} width={100} />
                </div>
                <div className="col col-9">
                  <h1 className="mb-0 mt-3">{team.name}</h1>
                  <p>{team.slogan}</p>
                </div>
              </div>

              <div className="text-start mt-2">
                <p className="mb-0">
                  <i className="fa fa-users me-2"></i>
                  {players.length} / 7 jugadores
                </p>
              </div>

              <div className="mt-2">
                <div className="table-responsive rounded bg-dark p-2">
                  <table className="table rounded table-dark mb-0">
                    <tbody>
                      {players.map((player) => (
                        <tr className="">
                          <td scope="row">{player.id}</td>
                          <td>
                            <img
                              src={userDefault}
                              alt=""
                              height={50}
                              width={50}
                            />
                          </td>
                          <td scope="row">
                            <h4>{player.name}</h4>
                          </td>
                          <td>{player.age}</td>
                          <td>{player.position}</td>
                          <td></td>
                          <td>
                            <button className="btn btn-danger">Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
