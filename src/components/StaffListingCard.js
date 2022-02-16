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
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';



function StaffCard( { staffPerson } ) {

const { id, name, phone, email, department, photo, calltime, notes } = {...staffPerson}

if (!staffPerson) return <h2>Loading...</h2>

return (
    <Box sx={{
      alignContent: 'center',
      display: 'grid',
      textAlign: 'center',
      p: 2,
      backgroundColor: 'secondary.dark'

  }}>
      <Box sx={{
        flexGrow: 1,
        width: 'auto',
        alignContent: 'center',
        display: 'grid',
        mx: 'auto'
      }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="auto"
            image={photo}
            alt="staff headshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {phone}
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {email}
            </Typography>
            <Box sx={{
                backgroundColor: 'primary.light',
            }}>
                <Typography variant="strong" >Department: </Typography>
                <Typography variant="body2" color="text.secondary">
                {department}
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: 'primary.light',
                my: 1,
                py: 1,
            }}>
                <Typography variant="strong">Notes: </Typography>
                <Typography variant="body2" color="text.secondary">
                {notes}
                </Typography>
            </Box>
            <Box sx={{
                alignContent: 'center',
            }}>
                <CardActions >
                <Button component={RouterLink} to={`/staff/${id}/editor`} size="small"> <EditIcon /> </Button>
                <Button size="small"> <DeleteIcon /> </Button>
                </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
    
  )
}

export default StaffCard