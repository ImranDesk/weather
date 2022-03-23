import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
            <input
              placeholder="Enter City"
              onChange={weatherInput}
              type="text"
              name=""
              id=""
            />
            <button onClick={searchWeather}>Search</button>
          </div>

          <div className="weather-info">
            <div className="card">
              <div className="cd">
              <h5>
                {weather.location.name}, {weather.location.region},{" "}
              </h5>

              <h5>{weather.location.country}</h5>
              </div>
            </div>
            <div className="temp">
              <div className="icon">
                <img src={weather.current.condition.icon} alt="" />
              </div>
              <div className="t-data">
                <h3>Temp : {weather.current.temp_c}°c</h3>
                <h5>Feels like : {weather.current.feelslike_c}°c</h5>
                <p>{weather.current.condition.text}</p>
                <p>{weather.location.localtime}</p>
              </div>
            </div>

            <div className="condition"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
