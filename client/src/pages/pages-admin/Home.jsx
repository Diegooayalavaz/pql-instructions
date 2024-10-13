import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import imageLayout from "../../assets/images/school-background.png";
import GryffindorLogo from "../../assets/images/Gryffindor.webp";
import HufflepuffLogo from "../../assets/images/Hufflepuff.webp";
import RavenclawLogo from "../../assets/images/Ravenclaw.webp";
import SlytherinLogo from "../../assets/images/Slytherin.webp";

import shieldImage from "../../assets/images/shield.webp";

import Logo from "../../assets/images/pql_logo.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  const [teams, setTeams] = useState([]);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_BASE_URL}api/teams`)
      .then((res) => {
        if (res) {
          console.log(res.data);
          setTeams(res.data);
        } else {
          console.log("No response from server");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <Header />
        <div
          className="page-header align-items-start min-vh-100 pt-5 pb-5  border-radius-lg"
          style={{
            backgroundImage: `url(${imageLayout})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mb-5">
            <div className="row mt-lg-n11 mt-md-n11 mt-n11 justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="text-center">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="img-fluid mb-3"
                    width={200}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-center mb-4 text-shadow">
              Selecciona el equipo
            </h1>
            <div className="row">
              {teams.map((team) => (
                <div key={team.id} className="col col-4">
                  <Link to={`./equipo/${team.id}`}>
                    <div
                      className="card text-center p-3 text-white card-house m-3"
                      style={{ height: "250px" }}
                    >
                      <img
                        src={getTeamLogo(team.name)} // Get the correct logo for the team
                        alt=""
                        width={150}
                        className="text-center mx-auto"
                      />
                      <h3 className="text-shadow">{team.name}</h3>
                    </div>
                  </Link>
                </div>
              ))}
              <div className="col col-4">
                <Link to="./nuevo-equipo">
                  <div
                    className="card text-center p-3 text-white card-house m-3"
                    style={{ height: "250px" }}
                  >
                    <p className="mt-5 mb-0" style={{ fontSize: "48px" }}>
                      <i className="fas fa-plus text-center"></i>
                    </p>
                    <h3 className="mt-auto text-shadow">Crear equipo</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
