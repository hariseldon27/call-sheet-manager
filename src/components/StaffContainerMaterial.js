import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import StaffListingCard from './StaffListingCard'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';




function StaffContainerMaterial() {

    const [staffList, setStaffList ] = useState([])
  

    useEffect(() => {
    fetch('http://localhost:3006/staff')
    .then(r => r.json())
    .then(setStaffList)
    }, [])

    const staffCardRender = staffList.map((staffPerson) => {
        return (
            <Grid item key={staffPerson.id} xs={6} sm={6} md={4}>
                <StaffListingCard key={staffPerson.id} staffPerson={staffPerson} />
            </Grid>
        )
    })

    function newStaffButton() {
        return (
            <Grid item >
                <Box sx={{
                    p: 2,
                    backgroundColor: 'secondary.dark',
                    display: 'flex',
                    alignContent: 'center',
                    borderRadius: '4%'
            
                }}>
                    <Box sx={{
                    }}>
                    <Card sx={{ maxWidth: 250,borderRadius: '4%' }}>
                        <CardMedia
                        component="img"
                        image="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351964-stock-illustration-default-placeholder-woman.jpg"
                        alt="staff headshot placeholder"
                        />
                        <CardActions>
                            <Button size="large" color="secondary" component={RouterLink} to={`/staff/new`} size="small"> Click to Add New Staff Here  <AddCircleIcon  /> </Button>
                        </CardActions>
                    </Card>
                    </Box>
                </Box>
           </Grid>
         ) }

  return (
    <Container>
    <CssBaseline />
    <Typography variant="h4" component="h2">- Staff -
    
    </Typography>
        <Container sx={{ 
            display: 'flex',
            flexWrap: 'nowrap',
            p: 1,
            m: 1,
         
            }} 
            maxWidth="md"
            
            >

            <Grid container spacing={2} >
                
                {staffCardRender}
                {newStaffButton()}
            </Grid>
        </Container>
    </Container>
);
}
  


export default StaffContainerMaterial





