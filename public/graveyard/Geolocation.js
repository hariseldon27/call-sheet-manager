import React from 'react'
import Radar from 'radar-sdk-js';
import { FormControlUnstyledContext } from '@mui/base';
import { ConstructionOutlined } from '@mui/icons-material';

// import { events } from '../db.json';



function Geolocation({location}) {

    // Radar.geocode('20 jay st brooklyn ny', function(err, result) {
    //     if (!err) {
    //       // do something with result.addresses
    //     }
    //   });
    // Radar.initialize(publishableKey);



 const address = '1526 30th Ave, San Francisco, CA 94122'

// console.log(events.location)

        // console.log(location)
    // const location = []
    
    const stringLocation = location.split(' ')
    stringLocation.join('+')
    console.log(stringLocation)
 
    // const objLocation = JSON.parse(location)
    // console.log(objLocation)

   
    
    
async function theFetch () {
  }

    theFetch();



  return (
    <div>



    </div>
  )
}

export default Geolocation