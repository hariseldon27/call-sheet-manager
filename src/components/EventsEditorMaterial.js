import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function EventsEditorMaterial() {
  const history = useHistory();

const [ eventEdit , setEventEdit ] = useState({
name: '',
date: '',
duration: '',
location: '',
directions: '',
notes: '',
})

const {id} = useParams()
  
useEffect(() => {
      fetch(`http://localhost:3006/events/${id}`)
      .then(r => r.json())
      .then(setEventEdit)
  },[id])

  console.log(id)


function handleEventEditSubmit(e) {
  e.preventDefault();
  fetch( `http://localhost:3006/events/${id}`, {
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
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleEventEditSubmit}
    >
      <Box sx={{
          maxWidth: 'md',
          mx: 'auto',
          alignContent: 'center',
          mt: 2
          
      }}>
          <Typography variant="h4" component="h2">Event Editor</Typography>
            
           

                <TextField id="outlined-basic"
                label="Name..." 
                variant="outlined" 
                name="name"
                value={eventEdit.name} 
                onChange={handleEventEditChange}
                />


                <TextField
                label="Location..." 
                variant="outlined" 
                name="location"
                value={eventEdit.location} 
                onChange={handleEventEditChange}
                />


                <TextField
                label="Directions..." 
                variant="outlined" 
                name="directions"
                value={eventEdit.directions} 
                onChange={handleEventEditChange}
                />

                <TextField
                variant="outlined" 
                name="date"
                type="date"
                value={eventEdit.date} 
                onChange={handleEventEditChange}
                />

                <TextField
                variant="outlined" 
                type="time"
                name="time"
                value={eventEdit.time} 
                onChange={handleEventEditChange}
                />
                
                <TextField
                label="Duration..." 
                variant="outlined" 
                name="duration"
                value={eventEdit.duration} 
                onChange={handleEventEditChange}
                />
            
                <TextField
                label="Notes..." 
                name="notes"
                value={eventEdit.notes} 
                onChange={handleEventEditChange}
                variant="outlined" 
                multiline
                maxRows={4}
                />
                <Box>
                    <Button size="large" color="secondary" type="submit" label="Submit" variant="outlined" >Submit</Button>
                </Box>

           
        </Box>
    </Box>
  );
}

export default EventsEditorMaterial;