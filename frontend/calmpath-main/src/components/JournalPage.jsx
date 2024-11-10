import React, {useState, useEffect} from 'react'
import './JournalApp.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function JournalApp() {
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState('')
  const [dash, setDash] = useState(false)

  // Fetch entries from backend (placeholder)
  useEffect(() => {
    // Replace with API call to fetch entries
    fetch('/api/entries')
      .then(response => response.json())
      .then(data => setEntries(data))
  }, [])

  // Handle new entry submission
  const handleSubmit = async e => {
    e.preventDefault()
  
    const entry = {
      userName: 'User', // Placeholder
      text: newEntry,
      date: new Date().toLocaleDateString(),
    }
  
    // Send the entry to Flask backend
    await fetch('http://127.0.0.1:5000/api/entries', { // Use your Flask server URL
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(entry),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message) // Handle success message or errors
      })
  
    setEntries([entry, ...entries]) // Update state to show the new entry
    setNewEntry('') // Clear the input field
  }
  

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
            {' '}
            <button
              onClick={() => {
                setDash(true)
              }}>
              Dashboard
            </button>
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
            onChange={e => setNewEntry(e.target.value)}
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
  )
}

export default JournalApp
