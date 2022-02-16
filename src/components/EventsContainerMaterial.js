import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import EventListingCardMaterial from './EventListingCardMaterial'
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';





function EventsContainerMaterial() {

    const [eventList, setEventList ] = useState([])
  

    useEffect(() => {
    fetch('http://localhost:3000/events')
    .then(r => r.json())
    .then(setEventList)
    }, [])

    const eventCardRender = eventList.map((event) => {
        return (
            <Grid item key={event.id} xs={12} sm={12} md={12}>
                <EventListingCardMaterial key={event.id} event={event} />
            </Grid>
        )
    })

    function newEventButton() {
        return (
        <Box sx={{
            alignContent: 'center',
            display: 'grid',
            textAlign: 'center',
            p: 1,
            backgroundColor: 'secondary.main',
        }}>
            <Box sx={{
        flexGrow: 1,
        alignContent: 'center',
        display: 'grid',
        mx: 'auto',
            }}>
              <Card sx={{ maxWidth: 150 }}>
                <CardMedia
                  component="img"
                  image="https://variety.com/wp-content/uploads/2020/09/film-placeholder-film-set.jpg"
                  alt="staff headshot placeholder"
                />
                <CardActions>
                    <Button size="large" color="secondary" component={RouterLink} to={`/events/new`} size="small"> Click to Add New Shoot<AddCircleIcon /> </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
           
         ) }



  return (
    <Container>
    <CssBaseline />
        <Container sx={{ 
            py: 2,
            mx: 'auto',
            alignContent : 'center',
            display: 'grid',
        }} 
            maxWidth="md"
            >
        <Typography variant='h4' component='h2'>Events</Typography>
            <Stack spacing={2}>
            <Grid item>
                {newEventButton()}
            </Grid>
                {eventCardRender}
            </Stack>
        </Container>
    </Container>
);
}
  


export default EventsContainerMaterial





