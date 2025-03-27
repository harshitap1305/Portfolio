import React from 'react'
import './Cards.css'
const Cards = ({name,description,icon}) => {
  return (
    <>
    <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <h4>{name}</h4>
    <p>{description}</p>
    </div>
  </>
  )
}

export default Cards