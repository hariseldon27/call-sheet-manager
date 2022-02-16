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
import StaffListingCard from './StaffListingCard'




function StaffContainerMaterial() {

    const [staffList, setStaffList ] = useState([])
  

    useEffect(() => {
    fetch('http://localhost:3000/staff')
    .then(r => r.json())
    .then(setStaffList)
    }, [])

    const staffCardRender = staffList.map((staffPerson) => {
    return (
        <Grid item key={staffPerson} xs={6} sm={6} md={4}>
            <StaffListingCard key={staffPerson.id} staffPerson={staffPerson} />
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
                {staffCardRender}
            </Grid>
        </Container>
    </Container>
);
}
  


export default StaffContainerMaterial





