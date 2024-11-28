// MoodPop.js
import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import sadImage from "../assets/sad.jpg";
import angryImage from "../assets/angry.jpg";
import enthusiasmImage from "../assets/enthusiasm.jpg";
import happyImage from "../assets/happy.jpg";
import confused from "../assets/6922095.jpg";
import Worry from "../assets/worry.jpg";
import Love from "../assets/love.jpg";
import Surprise from "../assets/surprised.jpg";
import bored from "../assets/bored.jpg";
const MoodPop = ({ mood, onClose }) => {
  // Map mood values to images
  // const moodImages = {
  //   sad: sadImage,
  //   angry: angryImage,
  //   enthusiasm: enthusiasmImage,
  //   happy: happyImage,
  //   none: confused,
  // };
  const moodValues = {
    neutral: confused,
    worry: Worry,
    happiness: happyImage,
    sadness: sadImage,
    love: Love,
    surprise: Surprise,
    fun: happyImage,
    relief: happyImage,
    hate: angryImage,
    empty: confused,
    enthusiasm: enthusiasmImage,
    boredom: bored,
    anger: angryImage,
    none: confused,
  };

  const navigate = useNavigate();
  const handleWatchVideos = () => {
    const encodedMood = encodeURIComponent(mood); // Encode mood value for URL
    navigate(`/Video?mood=${encodedMood}`); // Pass the mood as a prop to /video page
  };
  const titlemessage =
    mood === ""
      ? "We detected you are feeling neutral."
      : `We detected your mood to be ${mood.toUpperCase()}`;

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{titlemessage}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={moodValues[mood] || moodValues["none"]} // Fallback to sad if mood is not found
          alt={mood}
          style={{ width: "100%", height: "auto" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={handleWatchVideos}>
          Watch Recommended Videos
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoodPop;
