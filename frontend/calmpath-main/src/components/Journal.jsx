import React, { useState } from "react";
import "./journal.css";
import {
  faBook,
  faCog,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faUser,
  faBookJournalWhills,
} from "@fortawesome/free-solid-svg-icons";
import Update from "./Update";
import { CreateAuth } from "../Context/Authcontext";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const [isMorningExpanded, setMorningExpanded] = useState(false);
  const [isProgressExpanded, setProgressExpanded] = useState(false);
  const [auth, Setauth] = CreateAuth();
  const navigate = useNavigate();
  const toggleMorning = () => setMorningExpanded(!isMorningExpanded);
  const toggleProgress = () => setProgressExpanded(!isProgressExpanded);
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
          <span>CALM-PATH</span>
          <FontAwesomeIcon icon={faBookJournalWhills} />
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
        {auth.user ? (
          <button className="user-btn">
            {`Welcome ${auth.user.name.split(" ")[0]}`}
            {/* <FontAwesomeIcon icon={faUser} /> */}
          </button>
        ) : (
          <Button
            variant="dark"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            LOGIN
          </Button>
        )}
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
        {auth.user ? (
          <button
            className="menu-item"
            onClick={(e) => {
              navigate("/Journalpage");
            }}
          >
            <FontAwesomeIcon icon={faBook} />
            <span>Start Writing</span>
          </button>
        ) : (
          <button className="menu-item unselect">
            <FontAwesomeIcon icon={faBook} />
            <span>Start Writing</span>
          </button>
        )}

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
          {auth.user ? (
            <Update
              name={auth.user.name}
              date="1 day ago"
              reflection="Reflecting on yesterday's meditation"
            />
          ) : (
            <Card className="text-center">
              <Card.Header>NOT LOGGED IN!!</Card.Header>
              <Card.Body>
                <Card.Title>IT APPEARS YOU ARE NOT LOGGED IN</Card.Title>
                <Card.Text>
                  Login for free to continue writing journal
                </Card.Text>
                <Button
                  variant="dark"
                  onClick={(e) => {
                    navigate("/login");
                  }}
                >
                  LOGIN
                </Button>
              </Card.Body>
            </Card>
          )}

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
    </div>
  );
};

export default Journal;
