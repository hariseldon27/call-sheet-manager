import React from 'react'

function EventsCard({ name, date, duration, location, directions }) {

 

  return (
    <div>EventsCard
      <h3>Name: {name}</h3>
      <p>Date: {date}</p>
      <p>Duration: {duration}</p>
      <p>Lostation: {location}</p>
      <p>Directions: {directions}</p>
    </div>
  )
  }

export default EventsCard