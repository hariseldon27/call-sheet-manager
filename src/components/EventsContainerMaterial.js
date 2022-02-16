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
import Stack from '@mui/material/Stack';





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
        <Grid item key={event.id} xs={12} sm={12} md={12}>
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
            mx: 'auto',
            alignContent : 'center',
            display: 'grid',
            }} 
            maxWidth="md"
            >
            <Stack spacing={2}>
                {eventCardRender}
            </Stack>
        </Container>
    </Container>
);
}
  


export default EventsContainerMaterial





