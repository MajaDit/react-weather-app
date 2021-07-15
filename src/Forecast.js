import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <DailyForecast forecastData={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=db470402812f5661f73e8a78f5ce0f76&units=metric`;
    axios(apiUrl).then(handleResponse);
    return null;
  }
}