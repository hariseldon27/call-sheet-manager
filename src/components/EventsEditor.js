import React from 'react'

function EventsEditor() {




  return (
    <div>EventsEditor
      <form>
     <input 
        type="text"
        name="date"
         placeholder="Date here.."/>         
    <input 
      type="text"
      name="duration"
      placeholder="Duration here.."/>
    <input 
      type="text"
      name="location"
      placeholder="Location here.."/>
      
    <input 
       type="text"
       name="directions"
       placeholder="Directions here.."/> 
    </form>
    </div>
  );
}

export default EventsEditor;