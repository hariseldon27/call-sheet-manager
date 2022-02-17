import React,{ useEffect, useState } from 'react'


function WeatherApi( {location} ) {
const [ apiData, setApiData ] = useState({});
// const [ getLocation, setGetLocation ] = useState('');


const weather_API_key = 


// console.log(stringLocation)

// parameters for API found here https://openweathermap.org/forecast16


//I want to connect the values in the event form to the interpolated data in the apiUrl
//this may require extra fields in our event form & then I access the data through a variable and interpolate that variable in the url -- wonder if there is a city aspect to the url or if I have to use Lat & lon 



// once we gather the data from the fetch object, single out the values we want and show them in the DOM ==== `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${weather_API_key}`


useEffect (() => 
{
    
    if (location)
    {
        const stringLocation = location.split(' ').join('+')
        const geocode_URL = `https://api.radar.io/v1/geocode/forward?query=${stringLocation}`
        
        fetch(geocode_URL, 
            
        {
            method: 'GET',
            headers: 
            {
                'Authorization': '
                'Content-type': 'application/json'
            }
        }
            )
        .then (r => r.json())
        .then (
            data => 
           
                {  console.log(data)
                    let city = data.addresses[0].city
                    let lat = data.addresses[0].latitude
                    let lon = data.addresses[0].longitude
                    const weather_URL = `https://thingproxy.freeboard.io/fetch/https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weather_API_key}`
                    console.log( lat, lon)
                    fetch( {weather_URL },
                    {
                        method: 'GET',
                        headers: 
                            {
                        'Content-type': 'application/json'
                             }
                    }
                        )
                    .then(r => console.log(r))
                    // .then(r => r.json())
                    // .then(weatherData => console.log(weatherData))
                    
                }
    )
    }
    }    , [location]);

  return (
    <div>WeatherApi


    </div>
  )
}

export default WeatherApi