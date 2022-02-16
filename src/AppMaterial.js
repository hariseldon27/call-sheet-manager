import './App.css';
import HomeMaterial from './components/HomeMaterial';
import { 
  Switch, 
  Route 
  } from 'react-router-dom'
import StaffContainerMaterial from './components/StaffContainerMaterial';
import EventsContainer from './components/EventsContainer';
import CallSheetList from './components/CallSheetList';
import StaffCard from './components/StaffCard';
import EventsCard from './components/EventsCard';
import FooterNavMaterial from './components/FooterNavMaterial';
import HeaderMaterial from './components/HeaderMaterial'
import { createStyles, makeStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { sizing } from '@mui/system';

const callSheetTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#546e7a', 
          light: '#819ca9',
          dark: '#29434e'

        },
        secondary: {
          main: '##ffab00',
          light: '#ffdd4b',
          dark: '#c67c00'
        },
        background: {
          default: '#fff',
          
        },
      },
      })
  


function AppMaterial() {
  return (
   
    <ThemeProvider theme={callSheetTheme}>
    <div className="AppMaterial">
        <HeaderMaterial />
        <Paper elevation={4}>
            <Box  sx={{
                height: '100%',
                alignContent: 'center',
                display: 'grid',
                textAlign: 'center',
                backgroundColor: '#444'
            }} >
            <Switch>
                <Route exact path='/'> 
                    <HomeMaterial />
                </Route>
                <Route path='/staff/:id'>
                    <StaffCard />
                </Route>
                <Route exact path="/staff">
                    <StaffContainerMaterial />
                </Route>
                <Route path="/events/:id">
                    <EventsCard />
                </Route>
                <Route exact path="/events" >
                    <EventsContainer />
                </Route>
                <Route path="/callsheets">
                    <CallSheetList /> 
                </Route>
            </Switch>
            <Paper elevation={6} >
                <FooterNavMaterial />
            </Paper>
            </Box>
        </Paper>
    </div>
      </ThemeProvider>
  
  );
}

export default AppMaterial;
