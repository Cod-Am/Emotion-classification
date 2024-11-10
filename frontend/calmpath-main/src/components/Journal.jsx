import React, {useState} from 'react'
import './journal.css'
import {
  faBook,
  faCog,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBackward, faUser} from '@fortawesome/free-solid-svg-icons'
import Update from './Update'

const Journal = () => {
  const [isMorningExpanded, setMorningExpanded] = useState(false)
  const [isProgressExpanded, setProgressExpanded] = useState(false)

  const toggleMorning = () => setMorningExpanded(!isMorningExpanded)
  const toggleProgress = () => setProgressExpanded(!isProgressExpanded)
  return (
    <div className="journalContainer">
      {/* <header className="header">
        <FontAwesomeIcon icon={faBackward} />
       

        <h1 className="title">Journal</h1>
        <div className="searchBar">
          <input type="text" placeholder="Search for guidance..." />
          <button>Explore</button>
        </div>
        <div className="userIcons">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </header> */}
      <header className="header">
        {/* Left Section: Back & Journal Button */}
        <button className="journal-btn">
          <FontAwesomeIcon icon={faBackward} />
          <span>Journal</span>
        </button>

        {/* Center Section: Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for guidance..."
            className="search-input"
          />
          <button className="explore-btn">Explore</button>
        </div>

        {/* Right Section: User Icon */}
        <button className="user-btn">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </header>

      {/* <aside className="sidebar">
        <button>Start writing</button>
        <h2>Morning</h2>
        <ul>
          <li>Daytime</li>
          <li>Evening Meditation</li>
          <li>Night Meditation</li>
          <li>Guided Meditation</li>
        </ul>
        <div className="progressOverview">
          <h2>Progress Overview</h2>
          <ul>
            <li>Happiness Stats</li>
            <li>Category Filter</li>
            <li>Time Filter</li>
          </ul>
        </div>
      </aside> */}
      <div className="sidebar">
        <button className="menu-item">
          <FontAwesomeIcon icon={faBook} />
          <span>Start Writing</span>
        </button>

        <div className="menu-section">
          <button className="menu-item" onClick={toggleMorning}>
            <FontAwesomeIcon icon={faCog} />
            <span>Morning</span>
            <FontAwesomeIcon
              icon={isMorningExpanded ? faChevronDown : faChevronRight}
              className="chevron"
            />
          </button>
          {isMorningExpanded && (
            <div className="submenu">
              <button className="submenu-item">Daytime</button>
              <button className="submenu-item">Evening Meditation</button>
              <button className="submenu-item">Night Meditation</button>
              <button className="submenu-item">Guided Meditation</button>
            </div>
          )}
        </div>

        <div className="menu-section">
          <button className="menu-item" onClick={toggleProgress}>
            <FontAwesomeIcon icon={faCog} />
            <span>Progress Overview</span>
            <FontAwesomeIcon
              icon={isProgressExpanded ? faChevronDown : faChevronRight}
              className="chevron"
            />
          </button>
          {isProgressExpanded && (
            <div className="submenu">
              <button className="submenu-item">Happiness Stats</button>
              <button className="submenu-item">Category Filter</button>
              <button className="submenu-item">Time Filter</button>
            </div>
          )}
        </div>
      </div>

      <main className="content">
        <h2>Mood Updates</h2>
        <section className="updates">
          <Update
            name="R.Zenith"
            date="1 day ago"
            reflection="Reflecting on yesterday's meditation"
          />
          {/* <div className="update">
            <div>
              <FontAwesomeIcon icon={faUser} />
              <h3>S.Harmony</h3>
              <p>1 day ago</p>
              <p>Preparing for today's meditation</p>
            </div>
          </div> */}
        </section>
      </main>

      <aside className="filterUpdates">
        <h2>Filter Updates</h2>
        <ul>
          <li>Community Feedback</li>
          <li>Positive Reactions</li>
          <li>User Reviews</li>
          <li>Personal Mentions</li>
          <li>Recent Purchases</li>
          <li>Direct Messages</li>
        </ul>
        <div className="filterButtons">
          <button>Filter All</button>
          <button>Clear Filters</button>
        </div>
      </aside>
    </div>
  )
}

export default Journal
