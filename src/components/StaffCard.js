import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';



function StaffCard( { id } ) {

  const [ staffMember, setStaffMember ] = useState(null)
 
  const { name, phone, email, department, photo, calltime, notes } = {...staffMember}

 const {id} = useParams()

  useEffect(() => {
      fetch(`http://localhost:3000/staff/${id}`)
      .then(r => r.json())
      .then(setStaffMember)
  },[id])

  if (!staffMember) return <h2>Loading...</h2>

  return (
    
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={photo}
          alt="staff headshot"
        />
        <CardContent>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
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
        <CardActions>
          <Button size="small"> <EditIcon /> </Button>
          <Button size="small"><DeleteIcon /></Button>
        </CardActions>
        </CardContent>
    </Card>
    
  )
}

export default StaffCard