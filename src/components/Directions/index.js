/* eslint-disable prettier/prettier */
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => {
  return (
   <MapViewDirections 
    destination={{destination}}
    origin={origin}
    onReady={onReady}
    apikey={'YOUR KEY_API_GOOGLE'}
    strokeWidth={3}
    strokeColor={'#222'}
   />
  );
};

export default Directions;
