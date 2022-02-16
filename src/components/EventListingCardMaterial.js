import React, { useEffect, useState } from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbTwoToneIcon from '@mui/icons-material/DoNotDisturbTwoTone';
import CssBaseline from '@mui/material/CssBaseline';




function EventListingCardMaterial( { event } ) {

const { id, name, date, duration, location, directions, notes } = {...event}

console.log(event)

const directionsCheck = directions ? <CheckCircleIcon /> : <DoNotDisturbTwoToneIcon />

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
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirecton: 'column', textAlign: 'left'}}>
            <CardContent sx={{ flex: '1 0 auto'}}>
              <Typography gutterBottom variant="h5" component="div">
              {name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              <strong>Date:</strong> {date}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Time:</strong> {duration}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              <strong>Loc:</strong> {location}
              </Typography>
            </CardContent>
          </Box>
          <CardContent sx={{ flex: '1 0 auto'}}>
            <Box sx={{
                backgroundColor: 'primary.light',
                my: 1,
                p: 1,
                maxWidth: 400
            }}>
                <Typography variant="strong">Notes:</Typography>
                <Typography variant="body2" color="text.secondary">
                {notes}
                </Typography>
            </Box>
            
            <Box sx={{
                alignContent: 'center',
            }}>
                <CardActions >
                <Button component={RouterLink} to={`/events/${id}/editor`} size="small"> <EditIcon /> </Button>
                <Button size="small"> <DeleteIcon /> </Button>
                </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
    
  )
}

export default EventListingCardMaterial