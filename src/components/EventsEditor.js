import React, { useState } from 'react'

function EventsEditor() {

const [ newEvent, setNewEvent ] = useState({
name: '',
date: '',
duration: '',
location: '',
directions: ''
})

function handleEventSubmit(e) {
  e.preventDefault();
  fetch( 'http://localhost:3000/events', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
  })
    .then(r => r.json())
    .then(data => setNewEvent((currentEvent) => [...currentEvent, data]))
    .reset();
}

function handleEventChange(e){
  setNewEvent((newEvent) => ({...newEvent, [e.target.name]: e.target.value}))
} 



  return (
    <div>EventsEditor
      <form onSubmit={handleEventSubmit}>
    <input 
        type="text"
        name="name"
         placeholder="Event name here.."
         value={newEvent.name}
         onChange={handleEventChange}
         />      
     <input 
        type="date"
        name="date"
        
         value={newEvent.date}
         onChange={handleEventChange}
         />         
    <input 
      type="text"
      name="duration"
      placeholder="Duration here.."
      value={newEvent.duration}
      onChange={handleEventChange}/>
    <input 
      type="text"
      name="location"
      placeholder="Location here.."
      value={newEvent.location}
      onChange={handleEventChange}/>
      
    <input 
       type="text"
       name="directions"
       placeholder="Directions here.."
       value={newEvent.directions}
       onChange={handleEventChange}/> 

    <input type="submit" value="submit" />
    </form>
    </div>
  );
}

export default EventsEditor;