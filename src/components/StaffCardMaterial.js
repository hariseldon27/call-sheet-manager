import React, { useEffect, useState } from 'react'
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
import { useParams, Link } from 'react-router-dom'


function StaffCardMaterial( {  } ) {

  const [ staffMemberRender, setStaffMemberRender ] = useState(null)
  // console.log(staffMember)
  const { name, phone, email, department, photo, notes} = {...staffMemberRender}
 



  const {id} = useParams()
  useEffect(() => {
      fetch(`http://localhost:3006/staff/${id}`)
      .then(r => r.json())
      .then(setStaffMemberRender)
  },[id])






  return (
    <Box sx={{
      alignContent: 'center',
      display: 'grid',
      textAlign: 'center',
      m: 3,
      p: 2,
      backgroundColor: '#003c6c'

  }}>
      <Box sx={{
        flexGrow: 1,
        backgroundColor: '#3378af',
        width: 300,
        alignContent: 'center',
        display: 'grid',
        mx: 'auto'
      }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={photo}
            alt="staff headshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {notes}
            </Typography>

            <CardActions >
              <Button size="small"> <SaveIcon /> </Button>
              <Button size="small"><DeleteIcon /></Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Box>
    
  )
}

export default StaffCardMaterial