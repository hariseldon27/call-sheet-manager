import React, { useEffect, useState, useRef } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useParams} from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function EventsCardMaterial() {

  const [ eventInView, setEventInView ] = useState(null)
  const { name, date, duration, location, directions, notes }  = {...eventInView}
 

  const {id} = useParams()

  useEffect(() => {
      fetch(`http://localhost:3006/events/${id}`)
      .then(r => r.json())
      .then(setEventInView)
  },[id])

console.log(id)


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
              <Typography variant="body2" color="text.secondary">
              <strong>Date:</strong> {date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Time:</strong> {duration}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <strong>Loc:</strong> {location}
              </Typography>
            </CardContent>
          </Box>
          <CardContent sx={{ flex: '1 0 auto'}}>
            <Box sx={{
                backgroundColor: 'primary.light',
                my: 1,
                p: 1,
                width: 'md'
            }}>
                <Typography variant="strong">MAP?</Typography>
                <Typography variant="body2" color="text.secondary">
                MAP
                </Typography>
                <Wrapper apiKey={"AIzaSyCUAtRjjf2JSZt5_UD3OEOYlD_O_hnXYZs"}>
                  {/* <MapContainer /> */}
                </Wrapper>


            </Box>
            <Box sx={{
                backgroundColor: 'primary.light',
                my: 1,
                p: 1,
                width: 'md'
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

export default EventsCardMaterial