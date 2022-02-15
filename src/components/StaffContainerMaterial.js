import React, { useState, useEffect } from 'react'
import StaffCard from './StaffCard'
import StaffEditor from './StaffEditor'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();



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
        <StaffCard key={staffPerson.id} staffPerson={staffPerson} />
    </Grid>

  )
}
)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
    <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
        Such a Beautiful Staff
        </Typography>
    </Toolbar>
    </AppBar>
    <main>
    {/* Hero unit */}
    <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
            {staffCardRender}
        </Grid>
    </Container>
    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
        Footer
    </Typography>
    <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
    >
        Something here to give the footer a purpose!
    </Typography>
    <Copyright />
    </Box>
    {/* End footer */}
    </ThemeProvider>
);
}
  


export default StaffContainerMaterial





