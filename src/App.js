
import './App.css';
import Home from './components/Home';
import { 
  BrowserRouter as Router,
  Switch, 
  Route 
  } from 'react-router-dom'
import StaffContainer from './components/StaffContainer';
import EventsContainer from './components/EventsContainer';
import CallSheetList from './components/CallSheetList';
import StaffCard from './components/StaffCard';
import EventsCard from './components/EventsCard';

function App() {
  return (
  <Router> 
    <div className="App">
      <Switch>
        <Route exact path='/'> 
            <Home />
        </Route>
        <Route exact path='/staff/:id'>
              <StaffCard />
        </Route>
        <Route path="/staff">
              <StaffContainer />
        </Route>
        <Route exact path="/events/:id">
            <EventsCard />
        </Route>
        <Route path="/events" >
              <EventsContainer />
        </Route>
        <Route path="/callsheets">
              <CallSheetList /> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
