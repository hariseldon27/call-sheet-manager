import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import EventListingCard from './EventListingCard'





function EventsContainerMaterial() {

    const [eventList, setEventList ] = useState([])
  

    useEffect(() => {
    fetch('http://localhost:3000/events')
    .then(r => r.json())
    .then(setEventList)
    }, [])

    console.log(eventList)
    const eventCardRender = eventList.map((event) => {
    return (
        <Grid item key={event.id} xs={6} sm={6} md={4}>
            <EventListingCard key={event.id} event={event} />
        </Grid>

    )
    }
    )

  return (
    <Container>
    <CssBaseline />
        <Container sx={{ 
            py: 4,
            }} 
            maxWidth="md"
            >
            <Grid container spacing={2}>
                {eventCardRender}
            </Grid>
        </Container>
    </Container>
);
}
  


export default EventsContainerMaterial





