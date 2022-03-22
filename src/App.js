import  { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=f3ba45e0ed1b439b970172657221103&q=Siuri&aqi=no"
      )
      .then((data) => {
        setWeather(data.data);
      });
  }, []);
  //event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const searchWeather = (e) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f3ba45e0ed1b439b970172657221103&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      });
  };

  return (
    <div className="App">
      {weather && (
        <div className="box">
          <div className="search">
            <input placeholder="Enter City" onChange={weatherInput} type="text" name="" id="" />
            <button onClick={searchWeather}>Search</button>
          </div>

          <div className="weather-info">
            <h4>
              {weather.location.name}, {weather.location.region},{" "}
              {weather.location.country}
            </h4>

            <img src={weather.current.condition.icon} alt="" />
            <h3>{weather.current.temp_c} ° C</h3>
            <h3>{weather.current.condition.text}</h3>
           

            <h4>{weather.location.localtime}</h4>
            <div className="condition"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
