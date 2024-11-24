import React, { useState, useEffect } from "react";
import "./JournalApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import MoodPop from "./MoodPop";
function JournalApp() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [isLoading, SetisLoading] = useState(false);
  const [mood, Setmood] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch entries from backend on initial load
  useEffect(() => {
    const fetchEntries = async () => {
      SetisLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:5000/api/entries", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          setEntries(data.data); // Assuming the backend sends entries under 'data'
        } else {
          console.error("Failed to fetch entries");
        }
      } catch (error) {
        console.log("Error fetching entries:", error);
      } finally {
        SetisLoading(false);
      }
    };
    fetchEntries();
  }, []);

  // Handle new entry submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    SetisLoading(true);
    try {
      const entry = {
        userName: "User",
        text: newEntry,
        date: new Date().toLocaleDateString(),
      };

      const response = await fetch("http://127.0.0.1:5000/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([entry]), // Send as an array to match backend handling
      });

      if (response.ok) {
        const data = await response.json();
        setEntries((prevEntries) => [entry, ...prevEntries]); // Add the new entry locally
        console.log("received from backend");
        console.log(data.data);
        Setmood(data.result);

        setNewEntry(""); // Clear the input field
      } else {
        console.error("Failed to submit entry");
      }
    } catch (error) {
      console.log("Error submitting entry:", error);
    } finally {
      SetisLoading(false);
    }
  };

  return (
    <div className="journalContainer">
      {/* Header */}
      <header className="header">
        <div className="title">Journal</div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search entries..."
          />
          <button className="explore-btn">Explore</button>
        </div>
        <button className="user-btn">User</button>
      </header>

      <aside className="sidebar">
        <ul>
          <li className="menu-item">
            <div className="d-grid gap-2 mb-2">
              <Button
                variant="dark"
                size="lg"
                disabled={isLoading}
                onClick={!isLoading ? handleShow : null}
              >
                {isLoading ? "Loading…" : "MOOD DETECT"}
              </Button>
            </div>

            {show && <MoodPop mood={mood} onClose={handleClose} />}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="content">
        <h2>My Journal Entries</h2>

        {/* Entry Form */}
        <form className="update-form" onSubmit={handleSubmit}>
          <textarea
            className="entry-textarea"
            placeholder="Write your entry..."
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
          <button type="submit" className="entry-submit-btn">
            Add Entry
          </button>
        </form>

        {/* Journal Entries */}
        {entries.map((entry, index) => (
          <div key={index} className="update">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <div>
              <div className="user-info">
                <span className="user-name">{entry.userName}</span>
                <span className="date">{entry.date}</span>
              </div>
              <p className="reflection">{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JournalApp;
