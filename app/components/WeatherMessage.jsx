import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">Is is {temp} in {location}.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
