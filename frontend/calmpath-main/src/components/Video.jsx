import React, {useState, useEffect} from 'react'
import './VideoRecommendationApp.css'

function Video() {
  const [videos, setVideos] = useState([])

  // Fetch videos from backend (placeholder)
  useEffect(() => {
    // Replace with API call to fetch video recommendations
    fetch('/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

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
        <button className="user-btn">User</button>
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

        {/* Video List */}
        <div className="video-list">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="video-thumbnail"
              />
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <p className="video-date">
                  Published on: {video.publishedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Video
