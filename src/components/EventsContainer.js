import React from 'react'
import { Link } from 'react-router-dom'
import EventsCard from './EventsCard'
import EventsEditor from './EventsEditor'


function EventsContainer() {
  return (
    <div>EventsContainer

      <Link to="/events/newEventForm">
      <button> New Event Form </button>
      </Link>
        <EventsEditor />
        <EventsCard />

    </div>
  )
}

export default EventsContainer