import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import imageLayout from "../../assets/images/background-login.png";
import userDefault from "../../assets/images/user-default.webp";
import shieldImage from "../../assets/images/shield.webp";

const Seleccion = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickIniciar = () => {
    // Cambia la visibilidad al hacer clic
    setIsVisible(false);
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div
          className="page-header align-items-start min-vh-100 pt-5 pb-5  border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container mt-5">
            <div
              className={`text-center create-team-animation ${
                !isVisible ? "d-none" : ""
              }`}
            >
              <h1>Es hora de crear tu equipo</h1>
              <button className="btn btn-primary" onClick={handleClickIniciar}>
                Iniciar
              </button>
            </div>

            <div className={`${isVisible ? "d-none" : ""}`}>
              <div className="row">
                <div className="col col-3 text-center">
                  <img src={shieldImage} alt="" height={100} width={100} />
                </div>
                <div className="col col-9">
                  <p>Los Místicos</p>
                  <p>
                    Poderoso equipo de magia y hechicería que basa su fuerza en
                    lo chido que son sus alumnos.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4>0 / 11 jugadores</h4>
              </div>

              <div className="mt-4">
                <div className="row">
                  <div className="col my-auto">
                    <p>
                      <i class="fas fa-chevron-left "></i>
                    </p>
                  </div>
                  <div className="col">
                    <div className="card" onClick={handleShow}>
                      <div className="card-body text-center">
                        <img
                          src={userDefault}
                          alt=""
                          height={100}
                          width={100}
                        />
                        <p className="mb-0">Edgar Mirelles</p>
                        <p className="mb-0">29</p>
                        <p className="mb-0">Volante Derecho</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" onClick={handleShow}>
                      <div className="card-body text-center">
                        <img
                          src={userDefault}
                          alt=""
                          height={100}
                          width={100}
                        />
                        <p className="mb-0">Andrés Guardado</p>
                        <p className="mb-0">34</p>
                        <p className="mb-0">Contención</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" onClick={handleShow}>
                      <div className="card-body text-center">
                        <img
                          src={userDefault}
                          alt=""
                          height={100}
                          width={100}
                        />
                        <p className="mb-0">Javier Hernández</p>
                        <p className="mb-0">17</p>
                        <p className="mb-0">Delantero</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" onClick={handleShow}>
                      <div className="card-body text-center">
                        <img
                          src={userDefault}
                          alt=""
                          height={100}
                          width={100}
                        />
                        <p className="mb-0">Camilo Vargas</p>
                        <p className="mb-0">25</p>
                        <p className="mb-0">Portero</p>
                      </div>
                    </div>
                  </div>
                  <div className="col text-end my-auto">
                    <p>
                      <i class="fas fa-chevron-right"></i>
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link to="../equipo">
                    <button className="btn btn-primary">Ver mi equipo</button>
                  </Link>
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
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Body</p>
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
      </main>
    </>
  );
};

export default Seleccion;
