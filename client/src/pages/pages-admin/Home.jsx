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
  // State to hold the list of teams fetched from the server
  const [teams, setTeams] = useState([]);

  // Fetch the list of teams from the API on component mount
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

  // Function to get the appropriate logo for a team based on its name
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

  // Functional component for rendering a team card
  const TeamCard = ({ team, getTeamLogo }) => (
    <div className="col col-12 col-md-4">
      <Link to={`./team/${team.id}`}>
        <div
          className="card text-center p-3 text-white card-house m-3"
          style={{ height: "250px" }}
        >
          <img
            src={getTeamLogo(team.name)}
            alt=""
            width={150}
            className="text-center mx-auto"
          />
          <h3 className="text-shadow">{team.name}</h3>
        </div>
      </Link>
    </div>
  );

  // Functional component for the "Create a team" card
  const CreateTeamCard = () => (
    <div className="col col-12 col-md-4">
      <Link to="./new-team">
        <div
          className="card text-center p-3 text-white card-house m-3"
          style={{ height: "250px" }}
        >
          <p className="mt-5 mb-0" style={{ fontSize: "48px" }}>
            <i className="fas fa-plus text-center"></i>
          </p>
          <h3 className="mt-auto text-shadow">Create a team</h3>
        </div>
      </Link>
    </div>
  );

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
            <h1 className="text-center mb-4 text-shadow">Select a team</h1>

            <div className="row">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} getTeamLogo={getTeamLogo} />
              ))}
              <CreateTeamCard />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
