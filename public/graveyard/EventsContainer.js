import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EventsCard from './EventsCard'
import EventsEditor from './EventsEditor'


function EventsContainer() {
  const [ eventList, setEventList ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/events')
    .then(r => r.json())
    .then(setEventList)
  })


  const eventCardRender = eventList.map((event) => {
    return <EventsCard 
    key={event.id} 
    name={event.name}
    date={event.date}
    duration={event.duration}
    location={event.location}
    directions={event.directions} />
  })



  return (
    <div>EventsContainer

      <Link to="/events/newEventForm">
      <button> New Event Form </button>
      </Link>
        <EventsEditor />
        {eventCardRender}
    </div>
  )
}

export default EventsContainer