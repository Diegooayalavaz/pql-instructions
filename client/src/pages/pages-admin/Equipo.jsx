import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imageLayout from "../../assets/images/background-login.png";
import userDefault from "../../assets/images/user-default.webp";
import shieldImage from "../../assets/images/shield.webp";

const Equipo = () => {
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
            <div>
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
                <h4>4 / 11 jugadores</h4>
              </div>

              <div className="mt-4">
                <div class="table-responsive rounded">
                  <table class="table rounded">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Posición</th>
                        <th scope="col">Habilidad</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td scope="row">Diego Ayala</td>
                        <td>29</td>
                        <td>Delantero</td>
                        <td>Tiro mortal</td>
                        <td>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
                      <tr class="">
                        <td scope="row">Luna Lovegood</td>
                        <td>26</td>
                        <td>Guardiana</td>
                        <td>Visión mágica</td>
                        <td>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
                      <tr class="">
                        <td scope="row">Harry Potter</td>
                        <td>30</td>
                        <td>Buscador</td>
                        <td>Reflejos de relámpago</td>
                        <td>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
                      <tr class="">
                        <td scope="row">Hermione Granger</td>
                        <td>28</td>
                        <td>Cazadora</td>
                        <td>Tácticas maestras</td>
                        <td>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
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

export default Equipo;
