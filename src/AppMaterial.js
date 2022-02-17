import './App.css';
import HomeMaterial from './components/HomeMaterial';
import { 
  Switch, 
  Route 
  } from 'react-router-dom'
import StaffContainerMaterial from './components/StaffContainerMaterial';
import EventsContainerMaterial from './components/EventsContainerMaterial';
import CallSheetList from './components/CallSheetList';
import StaffCardMaterial from './components/StaffCardMaterial';
import EventsCardMaterial from './components/EventsCardMaterial';
import FooterNavMaterial from './components/FooterNavMaterial';
import HeaderMaterial from './components/HeaderMaterial';
import StaffEditorMaterial from './components/StaffEditorMaterial';
import EventsEditorMaterial from './components/EventsEditorMaterial';
import NewStaffFormMaterial from './components/NewStaffFormMaterial';
import NewEventFormMaterial from './components/NewEventFormMaterial';
import { createStyles, makeStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { sizing } from '@mui/system';

// console.log(process.env.REACT_APP_GEOCODE_API_KEY)

const callSheetTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#546e7a', 
          light: '#819ca9',
          dark: '#29434e'

        },
        secondary: {
          main: '#ffab00',
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
    <CssBaseline />
    <Box className="AppMaterial" sx={{
        height: '100vh',
        p: '120',
        backgroundColor: 'primary.light'
    }}>
        <HeaderMaterial />
        <Paper elevation={2}>
            <Box  sx={{
                height: '100',
                alignContent: 'center',
                display: 'grid',
                textAlign: 'center',
                backgroundColor: '#444',
                pb: 5
            }} >
                <Switch>
                    <Route exact path='/'> 
                        <HomeMaterial />
                    </Route>
                    <Route path='/staff/:id/editor'>
          <             StaffEditorMaterial />
                    </Route>
                    <Route exact path="/staff/new">
                        <NewStaffFormMaterial />
                    </Route>
                    <Route exact path='/staff/:id'>
                        <StaffCardMaterial />
                    </Route>
                    <Route exact path="/staff">
                        <StaffContainerMaterial />
                    </Route>
                    <Route path="/events/:id/editor"> 
                        <EventsEditorMaterial />
                    </Route>
                    <Route exact path="/events/new">
                        <NewEventFormMaterial />
                    </Route>
                    <Route path="/events/:id">
                        <EventsCardMaterial />
                    </Route>
                    <Route exact path="/events" >
                        <EventsContainerMaterial />
                    </Route>
                    <Route path="/callsheets">
                        <CallSheetList /> 
                    </Route>
                    <Route path="*">
                        <h1>404 not found</h1>
                    </Route>
                </Switch>
                <Box sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                }}>
                    <FooterNavMaterial />
                </Box>
            </Box>
        </Paper>
    </Box>
      </ThemeProvider>
  
  );
}

export default AppMaterial;
