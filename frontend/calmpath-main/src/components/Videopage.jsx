import React from 'react'
import './video.css'

const Videopage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="./assets/image-5.svg" alt="Logo" />
          <span className="logoText">CalmPath</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Profile</a>
        </nav>
      </header>

      <main>
        <section className="videoSection">
          <div className="videoWrapper">
            <img
              src="./assets/image-4.svg"
              alt="Video Content"
              className="videoContent"
            />
            <div className="controls">
              <button>Play</button>
              <button>Pause</button>
              <button>Fullscreen</button>
            </div>
          </div>
          <div className="videoDescription">
            <h1>Mindful Breathing Exercise</h1>
            <p>
              Join our instructor, Emily Johnson, as she guides you through a
              calming breathing exercise designed to help you relax and find
              peace.
            </p>
          </div>
        </section>

        <aside className="relatedVideos">
          <h2>Related Videos</h2>
          <div className="relatedVideoItem">
            <img src="./assets/image-3.svg" alt="Beach Meditation" />
            <p>Beach Meditation</p>
          </div>
          <div className="relatedVideoItem">
            <img src="./assets/image-2.svg" alt="Forest Relaxation" />
            <p>Forest Relaxation</p>
          </div>
          <div className="relatedVideoItem">
            <img src="./assets/image.svg" alt="Waterfall Stress Relief" />
            <p>Waterfall Stress Relief</p>
          </div>
        </aside>

        <section className="commentsSection">
          <h2>Comments</h2>
          <div className="comment">
            <p>
              Emily R.: This video helped me center myself before a busy day.
              Thank you!
            </p>
          </div>
          <div className="comment">
            <p>Michael T.: I love the calming music in the background.</p>
          </div>
          <button className="addCommentBtn">Add a Comment</button>
        </section>
      </main>
    </div>
  )
}

export default Videopage
