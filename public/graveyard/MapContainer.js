import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';



function MapContainer() {
  
  const mapStyles = {
    width: '50%',
    height: '50%'
  };


    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDhDP8VXD53LIXijQv2E07XWzYbf1HHniE'
})(MapContainer);

