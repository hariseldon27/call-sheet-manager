
import './App.css';
import Home from './components/Home';
import { 
  Switch, 
  Route 
  } from 'react-router-dom'
import StaffContainerMaterial from './components/StaffContainerMaterial';
import EventsContainer from './components/EventsContainer';
import CallSheetList from './components/CallSheetList';
import StaffCard from './components/StaffCard';
import EventsCard from './components/EventsCard';

function App() {
  return (
   
    <div className="App">
      <Switch>
        <Route exact path='/'> 
            <Home />
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
    </div>
  
  );
}

export default App;
