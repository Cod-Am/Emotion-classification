import React, { useState, useEffect } from "react";
import "./JournalApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function JournalApp() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [dash, setDash] = useState(false);

  // Fetch entries from backend on initial load
  useEffect(() => {
    const fetchEntries = async () => {
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
      }
    };
    fetchEntries();
  }, []);

  // Handle new entry submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const entry = {
        userName: "User", // Updated username to 'arnav' as per requirements
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

        setNewEntry(""); // Clear the input field
      } else {
        console.error("Failed to submit entry");
      }
    } catch (error) {
      console.log("Error submitting entry:", error);
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
        <h2>Menu</h2>
        <ul>
          <li className="menu-item">
            <button onClick={() => setDash(!dash)}>Dashboard</button>
            {dash && (
              <ul>
                <li>Entry1</li>
                <li>Entry2</li>
                <li>Entry3</li>
              </ul>
            )}
          </li>
          <li className="menu-item">My Entries</li>
          <li className="menu-item">Settings</li>
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
