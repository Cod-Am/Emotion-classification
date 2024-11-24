// MoodPop.js
import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import sadImage from "../assets/sad.jpg";
import angryImage from "../assets/angry.jpg";
import enthusiasmImage from "../assets/enthusiasm.jpg";
import happyImage from "../assets/happy.jpg";
import confused from "../assets/6922095.jpg";
const MoodPop = ({ mood, onClose }) => {
  // Map mood values to images
  const moodImages = {
    sad: sadImage,
    angry: angryImage,
    enthusiasm: enthusiasmImage,
    happy: happyImage,
    none: confused,
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
          src={moodImages[mood] || moodImages["none"]} // Fallback to sad if mood is not found
          alt={mood}
          style={{ width: "100%", height: "auto" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoodPop;
