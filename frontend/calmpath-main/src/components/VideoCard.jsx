// VideoCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const VideoCard = ({ video }) => {
  const videoUrl = video?.videos?.large?.url || "";
  return (
    <Card
      style={{
        width: "20rem",
        minHeight: "20rem", // Minimum height for the image
      }}
    >
      {/* <Card.Img
        variant="top"
        src={thumbnailUrl}
        alt="Video thumbnail"
        height="180"
        style={{
          minHeight: "180px", // Minimum height for the image
          maxHeight: "250px", // Maximum height for the image
          objectFit: "cover", // Ensures the image covers the defined area without distorting
        }}
      /> */}
      {videoUrl ? (
        <Card.Img
          as="video" // Use <video> instead of <img> to embed the video
          variant="top"
          // Allows the user to control the video (play/pause)
          src={videoUrl} // Video source URL
          alt="Video"
          style={{
            minHeight: "180px", // Minimum height for the video
            maxHeight: "250px", // Maximum height for the video
            objectFit: "cover", // Ensures the video covers the defined area without distortion
            width: "100%", // Make sure video is responsive
            display: "block", // Ensure the video is displayed as a block element
          }}
        />
      ) : (
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/150"
          alt="Video thumbnail"
          style={{
            minHeight: "180px",
            maxHeight: "250px",
            objectFit: "cover",
            width: "100%",
            display: "block",
          }}
        />
      )}
      <Card.Body>
        <Card.Title>{video.tags}</Card.Title>
        <Card.Text>
          {video.user} - {video.duration} seconds
        </Card.Text>
        <Button variant="dark" href={video.videos.large.url} target="_blank">
          Watch Video
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
