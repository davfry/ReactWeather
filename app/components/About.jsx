import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Built with the following tools:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
