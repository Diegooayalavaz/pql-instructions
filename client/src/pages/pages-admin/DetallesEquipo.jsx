import React, { useState } from "react";
import Axios from "axios";
import { Link, Navigate } from "react-router-dom";
import imageLayout from "../../assets/images/school-background.png";
import shieldImage from "../../assets/images/shield.webp";

const DetallesEquipo = ({ handleChange, handleStart, team, getTeamLogo }) => {
  const handleHouseButton = (nameHouse) => {
    handleChange({ target: { value: nameHouse } }, "name");
  };
  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container">
          <div className="row">
            <div className="col col-3 text-center my-auto">
              <img
                src={getTeamLogo(team.name)}
                alt=""
                height={200}
                width={200}
              />
            </div>

            <div className="col col-9">
              <h1 className="text-shadow">Crea tu casa y compite</h1>
              <div className="form-group mb-3">
                <label for="" className="form-label text-shadow">
                  Casas seleccionables
                </label>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleHouseButton("Gryffindor")}
                    >
                      Gryffindor
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleHouseButton("Ravenclaw")}
                    >
                      Ravenclaw
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleHouseButton("Slytherin")}
                    >
                      Slytherin
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleHouseButton("Hufflepuff")}
                    >
                      Hufflepuff
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="" className="form-label text-shadow">
                  Nombre de la casa
                </label>
                <input
                  type="text"
                  name="Nombre"
                  value={team.name}
                  id=""
                  className="form-control"
                  placeholder="Nombre de la casa"
                  aria-describedby="helpId"
                  onChange={(e) =>
                    handleChange({ target: { value: e.target.value } }, "name")
                  }
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label text-shadow">
                  Slogan
                </label>
                <textarea
                  type="text"
                  name="slogan"
                  value={team.slogan}
                  id=""
                  rows={3}
                  className="form-control"
                  placeholder="Tu slogan debe ser una frase inspiradora que defina la identidad y los ideales de tu casa. ¡Deja tu huella!"
                  aria-describedby="helpId"
                  onChange={(e) =>
                    handleChange(
                      { target: { value: e.target.value } },
                      "slogan"
                    )
                  }
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary button-shadow  text-uppercase"
                  style={{ borderColor: "rgb(81, 78, 55)" }}
                  onClick={handleStart}
                >
                  Iniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetallesEquipo;
