import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

function EventsEditor() {
  const history = useHistory();

const [ eventEdit , setEventEdit ] = useState({
name: '',
date: '',
duration: '',
location: '',
directions: ''
})

const {id} = useParams()
  useEffect(() => {
      fetch(`http://localhost:3000/events/${id}`)
      .then(r => r.json())
      .then(setEventEdit)
  },[id])

  console.log(id)


  

function handleEventEditSubmit(e) {
  e.preventDefault();
  fetch( `http://localhost:3000/events/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventEdit)
  })
    .then(r => r.json())
    .then(history.push(`/events`))
}

function handleEventEditChange(e){
  setEventEdit((newEvent) => ({...newEvent, [e.target.name]: e.target.value}))
} 



  return (
    <div>EventsEditor
      <form onSubmit={handleEventEditSubmit}>
    <input 
        type="text"
        name="name"
         placeholder="Event name here.."
         value={eventEdit.name}
         onChange={handleEventEditChange}
         />      
     <input 
        type="date"
        name="date"
         value={eventEdit.date}
         onChange={handleEventEditChange}
         />         
    <input 
      type="text"
      name="duration"
      placeholder="Duration here.."
      value={eventEdit.duration}
      onChange={handleEventEditChange}/>
    <input 
      type="text"
      name="location"
      placeholder="Location here.."
      value={eventEdit.location}
      onChange={handleEventEditChange}/>
      
    <input 
       type="text"
       name="directions"
       placeholder="Directions here.."
       value={eventEdit.directions}
       onChange={handleEventEditChange}/> 

    <input type="submit" value="submit" />
    </form>
    </div>
  );
}

export default EventsEditor;