import React from "react";
import { Link } from "react-router-dom";
import imageLayout from "../../assets/images/background-login.png";

const Home = () => {
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
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <h4>Crea tu casa y compite</h4>
                <div class="mb-3">
                  <label for="" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="Nombre"
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  <small id="helpId" class="text-muted">
                    Help text
                  </small>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                    Descripcion
                  </label>
                  <textarea
                    type="text"
                    name="Nombre"
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  ></textarea>
                  <small id="helpId" class="text-muted">
                    Help text
                  </small>
                </div>
                <Link to="/seleccion">
                  <button className="btn btn-primary">Iniciar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
