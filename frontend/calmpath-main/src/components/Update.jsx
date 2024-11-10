import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './journal.css'

function Update({name, date, reflection}) {
  return (
    <div className="update">
      <div>
        <FontAwesomeIcon icon={faUser} />
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{reflection}</p>
      </div>
    </div>
  )
}

export default Update
