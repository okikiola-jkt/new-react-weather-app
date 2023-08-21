import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey); 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
    }
  }

  
  return (
    <div className="app">
      <div className="search">
        <input 
         value = {location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        placeholder="Enter Location"
        type="text" 
        />
      </div>
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
