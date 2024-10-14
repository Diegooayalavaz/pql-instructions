import React, { useState } from "react";

const DetailsTeam = ({ handleChange, handleStart, team, getTeamLogo }) => {
  // Define the available houses
  const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

  // Handle button click for house selection
  const handleHouseButton = (nameHouse) => {
    handleChange({ target: { value: nameHouse } }, "name");
  };

  // Button component for selecting a house
  const HouseButton = ({ name, handleClick }) => {
    return (
      <div className="col text-center mb-2 mb-md-0">
        <button className="btn btn-primary" onClick={handleClick}>
          {name}
        </button>
      </div>
    );
  };

  return (
    <>
      <main className="main-content mt-0 ps body-fade text-white">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-3 text-center my-auto mx-auto">
              <img
                src={getTeamLogo(team.name)}
                alt=""
                height={200}
                width={200}
              />
            </div>

            <div className="col col-12 col-md-9">
              <h1 className="text-shadow">Create your own house</h1>
              <div className="form-group mb-3">
                <label for="" className="form-label text-shadow">
                  Default houses
                </label>
                <div className="row">
                  {houses.map((house) => (
                    <HouseButton
                      key={house}
                      name={house}
                      handleClick={() => handleHouseButton(house)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label for="" className="form-label text-shadow">
                  Name of the House
                </label>
                <input
                  type="text"
                  name="Nombre"
                  value={team.name}
                  className="form-control"
                  placeholder="Name of the house"
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
                  rows={3}
                  className="form-control"
                  placeholder="The slogan has to be an inspiring phrase that defines the house's identity and ideals."
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
                  className="btn btn-primary button-shadow  text-uppercase mb-3"
                  style={{ borderColor: "rgb(81, 78, 55)" }}
                  onClick={handleStart}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailsTeam;
