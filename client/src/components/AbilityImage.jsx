import React from "react";

// Import the images
import ChaserAccuracyPicture from "../assets/images/chaser_accuracy.webp";
import ChaserAgilePicture from "../assets/images/chaser_agile.webp";
import KeeperSavesPicture from "../assets/images/keeper_saves.webp";
import KeeperEndurancePicture from "../assets/images/keeper_endurance.webp";
import SeekerVisionPicture from "../assets/images/seeker_vision.webp";
import SeekerSpeedPicture from "../assets/images/seeker_speed.webp";
import BeaterPowerfulPicture from "../assets/images/beater_powerful.webp";
import BeaterReflexesPicture from "../assets/images/beater_reflexes.webp";

// Component to return the image based on player's ability
const AbilityImage = ({ ability }) => {
  const getImageForAbility = (ability) => {
    switch (ability) {
      case "chaser_accuracy":
        return ChaserAccuracyPicture;
      case "chaser_agile":
        return ChaserAgilePicture;
      case "keeper_saves":
        return KeeperSavesPicture;
      case "keeper_endurance":
        return KeeperEndurancePicture;
      case "seeker_vision":
        return SeekerVisionPicture;
      case "seeker_speed":
        return SeekerSpeedPicture;
      case "beater_powerful":
        return BeaterPowerfulPicture;
      case "beater_reflexes":
        return BeaterReflexesPicture;
      default:
        return null; // Return null if the ability doesn't match any case
    }
  };

  const getTextForAbility = (ability) => {
    switch (ability) {
      case "chaser_accuracy":
        return "Perfect accuracy";
      case "chaser_agile":
        return "Agile movement";
      case "keeper_saves":
        return "Impossible saves";
      case "keeper_endurance":
        return "Physical Endurance";
      case "seeker_vision":
        return "Enhanced Vision";
      case "seeker_speed":
        return "Superhuman Speed";
      case "beater_powerful":
        return "Powerful Strike";
      case "beater_reflexes":
        return "Quick Reflexes";
      default:
        return null; // Return null if the ability doesn't match any case
    }
  };

  const imageSrc = getImageForAbility(ability);
  const textAbility = getTextForAbility(ability);
  return (
    <>
      {imageSrc ? (
        <div className="text-center">
          <img
            src={imageSrc}
            alt={ability}
            title={ability}
            className="rounded-circle text-center mx-auto"
            height={40}
            width={40}
            style={{ filter: "brightness: .3" }}
          />
          <p className="mb-0 " style={{ fontSize: "12px" }}>
            {textAbility}
          </p>
        </div>
      ) : (
        <span className="">No Ability</span> // Fallback if no image is found
      )}
    </>
  );
};

export default AbilityImage;
