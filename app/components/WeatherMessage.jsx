import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>Is is {temp} in {location}</p>
    </div>
  );
};

module.exports = WeatherMessage;
