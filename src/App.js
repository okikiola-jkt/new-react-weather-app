import React from "react";
import axios from "axios";

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=los%20angeles&units=imperial&cnt=3&appid=03052ad0cbc1cf2c60c3d79961c72fd3`
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>los-angeles</p>
          </div>
          <div className="temp">
            <h1>30°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">34°c</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">12%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
