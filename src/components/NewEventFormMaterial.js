import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewEventFormMaterial() {
    const history= useHistory();

    const [ newEvent, setNewEvent ] = useState({
        name: '',
        date: '',
        duration: '',
        location: '',
        directions: ''
        })

 function handleEventSubmit(e) {
     e.preventDefault();
    fetch( 'http://localhost:3006/events', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
       },
     body: JSON.stringify(newEvent)
            })
      .then(r => r.json())
      .then(data => setNewEvent((currentEvent) => [...currentEvent, data]))
      .then(history.push('/events'))
    
          }
          
          function handleEventChange(e){
            setNewEvent((newEvent) => ({...newEvent, [e.target.name]: e.target.value}))
          } 


  return (
<Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleEventSubmit}
    >
      <Box sx={{
          maxWidth: 'md',
          mx: 'auto',
          alignContent: 'center',
          mt: 2
          
      }}>
          <Typography variant="h4" component="h2">New Event Creator</Typography>
            
           

                <TextField id="outlined-basic"
                label="Name..." 
                variant="outlined" 
                name="name"
                value={newEvent.name} 
                onChange={handleEventChange}
                />


                <TextField
                label="Location..." 
                variant="outlined" 
                name="location"
                value={newEvent.location} 
                onChange={handleEventChange}
                />


                <TextField
                label="Directions..." 
                variant="outlined" 
                name="directions"
                value={newEvent.directions} 
                onChange={handleEventChange}
                />

                <TextField 
                variant="outlined" 
                name="date"
                type="date"
                value={newEvent.date} 
                onChange={handleEventChange}
                />

                <TextField
                variant="outlined" 
                type="time"
                name="time"
                value={newEvent.time} 
                onChange={handleEventChange}
                />
                
                <TextField
                label="Duration..." 
                variant="outlined" 
                name="duration"
                value={newEvent.duration} 
                onChange={handleEventChange}
                />
            
                <TextField
                label="Notes..." 
                name="notes"
                value={newEvent.notes} 
                onChange={handleEventChange}
                variant="outlined" 
                multiline
                maxRows={4}
                />
                <Box>
                    <Button size="large" color="secondary" type="submit" label="Submit" variant="outlined" >Submit</Button>
                </Box>

           
        </Box>
    </Box>
  
  )
}

export default NewEventFormMaterial