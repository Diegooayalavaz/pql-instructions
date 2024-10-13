import React from "react";
import Logo from "../assets/images/pql_logo.png";
import userDefault from "../assets/images/user-default.webp";

const Header = () => {
  return (
    <header>
      <nav className="navbar  navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="PQL Logo" className="logo" width={75} />{" "}
          </a>
          <button
            className="navbar-toggler d-flex border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ fontSize: "12px" }}
          >
            <img
              src={userDefault}
              alt=""
              height={35}
              width={35}
              className="mx-auto rounded-circle"
            />{" "}
            <p className="my-auto ms-2 text-white">Diego Ayala</p>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teams">
                  Teams
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
