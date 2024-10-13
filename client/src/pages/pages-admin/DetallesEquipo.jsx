import React, { useState } from "react";
import Axios from "axios";
import { Link, Navigate } from "react-router-dom";
import imageLayout from "../../assets/images/school-background.png";
import shieldImage from "../../assets/images/shield.webp";

const DetallesEquipo = ({ handleChange, handleStart, team }) => {
  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container">
          <div className="row">
            <div className="col col-3 text-center my-auto">
              <img src={shieldImage} alt="" height={200} width={200} />
            </div>

            <div className="col col-9">
              <h1>Crea tu casa y compite</h1>
              <div className="mb-3">
                <label for="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="Nombre"
                  value={team.name}
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  onChange={(e) =>
                    handleChange({ target: { value: e.target.value } }, "name")
                  }
                />
                <small id="helpId" className="text-muted">
                  Help text
                </small>
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Descripcion
                </label>
                <textarea
                  type="text"
                  name="slogan"
                  value={team.slogan}
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  onChange={(e) =>
                    handleChange(
                      { target: { value: e.target.value } },
                      "slogan"
                    )
                  }
                ></textarea>
                <small id="helpId" className="text-muted">
                  Help text
                </small>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleStart}
              >
                Iniciar
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetallesEquipo;
