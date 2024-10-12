import React from "react";
import imageLayout from "../../assets/images/background-login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main className="main-content mt-0 ps body-fade">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundPosition: "center",
          }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5"></h1>
                <p className="text-lead text-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-2 mb-5">
          <div className="row mt-lg-n11 mt-md-n11 mt-n11 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4 pb-0">
                  <h5>Iniciar sesión </h5>
                </div>

                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                      />
                    </div>
                    <div className="">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        aria-label="Password"
                      />
                    </div>
                    <div className="mt-3 mb-0">
                      <Link
                        to="../ForgotPassword"
                        className="text-dark font-weight-bolder my-5 mb-0 text-sm"
                      >
                        Olvidé mi contraseña
                      </Link>
                    </div>
                    <div className="text-center mt-2">
                      <Link to="../">
                        <button
                          type="button"
                          className="btn btn-primary bg-gradient-primary w-100 my-2 mb-2"
                        >
                          Iniciar sesión
                        </button>
                      </Link>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      ¿No tienes una cuenta?{" "}
                      <Link
                        to="../Form"
                        className="text-dark font-weight-bolder"
                      >
                        Registrate
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
