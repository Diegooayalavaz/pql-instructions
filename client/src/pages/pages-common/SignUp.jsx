import React from "react";

import imageLayout from "../../assets/images/school-background.png";
import Logo from "../../assets/images/pql_logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <main className="main-content mt-0 ps body-fade">
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
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="container mt-2 mb-5">
              <div className="row mt-lg-n11 mt-md-n11 mt-n11 justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                  <div className="text-center">
                    <img src={Logo} alt="Logo" className="img-fluid mb-3" />
                  </div>
                  <div
                    className="card z-index-0 text-white "
                    style={{
                      borderColor: "#514e37",
                      backgroundColor: `#ffffff00`,
                      backgroundSize: "cover", // Cover the entire div
                      backgroundPosition: "center", // Center the image
                    }}
                  >
                    <div
                      className="card-header text-center 0 pb-0 text-white text-uppercase"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(27,36,35,0) 0%, rgba(27,36,35,1) 33%, rgba(27,36,35,1) 66%, rgba(27,36,35,0) 100%)",
                      }}
                    >
                      <h5>Sign up</h5>
                    </div>

                    <div className="card-body">
                      <p>¡Welcome! Please, complete the form</p>
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat Password"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <Link to="../">
                            <button
                              type="button"
                              className="btn btn-primary w-100 my-2 mb-2 text-uppercase"
                              style={{ borderColor: "#514e37" }}
                            >
                              Create account
                            </button>
                          </Link>
                        </div>
                        <p className="text-sm mt-3 mb-0">
                          <Link
                            to="../login"
                            className="text-white font-weight-bolder"
                          >
                            Back to Login
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
