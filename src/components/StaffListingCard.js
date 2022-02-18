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



function StaffCard( { staffPerson } ) {

const { id, name, phone, email, department, photo, calltime, notes } = {...staffPerson}

if (!staffPerson) return <h2>Loading...</h2>

return (
  // wrapper box with the orange/yellow border 
    <Box sx={{
      alignContent: 'center',
      display: 'grid',
      borderRadius: '4%',
      gridColumnGap: '10px;',
      textAlign: 'center',
      width: 'auto',
      p: 2,
      backgroundColor: 'secondary.dark'

  }}>
    {/* holding the grid within the card */}
      <Box sx={{
        borderRadius: '4%',
        width: 'auto',
        alignContent: 'center',
        display: 'grid',
        
        gridColumnGap: '0px;',
        mx: 'auto'
      }}>
        {/* wraps the entire card comp -  */}
        <Card sx={{ maxWidth: 345, borderRadius: '4%'}}>
          <CardMedia
            component="img"
            height="auto"
            image={photo}
            alt="staff headshot"
          />
          <CardContent sx={{ }}>
            {/* wraps each text component */}
            <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
            {name}
            </Typography>
            <Typography variant="body1" color="text.secondary" fontWeight='bold'>
            {phone}
            </Typography>
            <Typography variant="body1" color="text.secondary" fontWeight='bold'>
            {email}
            </Typography>
            <Box sx={{
              // text box inside the card
                backgroundColor: 'primary.light',
                my: 1,
                py: 1
            }}>
                <Typography variant="strong" fontWeight='bold' color='black'>Department: </Typography>
                <Typography variant="body2" color='black'>
                {department}
                </Typography>
            </Box>
            <Box sx={{
              // text box inside the card
                backgroundColor: 'primary.light',
                my: 1,
                py: 1,
            }}>
                <Typography variant="strong" fontWeight='bold'color='black'>Notes: </Typography>
                <Typography variant="body2" color="text.secondary"color='black'>
                {notes}
                </Typography>
            </Box>
            <Box sx={{
                alignContent: 'center',
            }}>
                <CardActions sx={{display:'inline'}} >
                
                <Button component={RouterLink} to={`/staff/${id}/editor`} size="small" > <EditIcon /> </Button>
                {/* <Button size="small"> <DeleteIcon /> </Button> */}
                </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
    
  )
}

export default StaffCard