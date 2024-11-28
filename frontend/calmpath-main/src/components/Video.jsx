import React, { useState, useEffect } from "react";
import "./VideoRecommendationApp.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Placeholder,
} from "react-bootstrap";
import VideoCard from "./VideoCard";
import { useLocation, useNavigate } from "react-router-dom";

function Video() {
  const location = useLocation();

  // Get the `mood` parameter from the query string
  const urlParams = new URLSearchParams(location.search);
  const moods = urlParams.get("mood");
  const navigate = useNavigate();
  // const [moods, setMoods] = useState(location.state); // Example initial mood
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const API_KEY = "47255172-9d59095e4356065a4961a831a";
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  useEffect(() => {
    const fetchVideos = async () => {
      // const encodedMood = encodeURIComponent(moods);
      const url = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${moods}&per_page=${visibleCount}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching videos: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(moods);
        setVideos(data.hits || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [moods, visibleCount]);

  return (
    <div className="videoContainer">
      {/* Header */}
      <header className="header">
        <div className="title">Video Recommendations</div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search videos..."
          />
          <button className="explore-btn">Explore</button>
        </div>
        <Button
          className="explore-btn"
          variant="dark"
          onClick={(e) => {
            navigate("/Journalpage");
          }}
        >
          JOURNAL
        </Button>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li className="menu-item">Trending</li>
          <li className="menu-item">Categories</li>
          <li className="menu-item">Watch Later</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="content">
        <h2>Recommended Videos</h2>
        <Container className="my-4">
          {/* <Row>
              {videoCards.map((video) => (
                <Col key={video.id} xs={12} sm={6} md={4} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={video.thumbnail}
                      alt={video.title}
                    />
                    <Card.Body>
                      <Card.Title>{video.title}</Card.Title>
                      <Card.Text>{video.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row> */}
          <Row>
            {/* {videos.slice(0, visibleCount).map((video) => (
              <Col key={video.id} xs={12} md={6} className="mb-4">
                <video controls width="100%">
                  <source src={video.videos.tiny.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center mt-2">{video.tags}</p>
              </Col>
            ))} */}
            {videos.length > 0 ? (
              videos.map((video) => (
                <Col key={video.id} xs={12} md={6} lg={4} className="mb-4">
                  <VideoCard video={video} />
                </Col>
              ))
            ) : (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} />
                      <Placeholder xs={4} />
                      <Placeholder xs={4} /> <Placeholder xs={6} />
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Button variant="dark" onClick={handleShowMore}>
                SHOW MORE
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Video;
