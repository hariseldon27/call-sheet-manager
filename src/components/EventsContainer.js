import React from 'react'
import EventsCard from './EventsCard'
import EventsEditor from './EventsEditor'

function EventsContainer() {
  return (
    <div>EventsContainer
        <EventsEditor />
        <EventsCard />
    </div>
  )
}

export default EventsContainer