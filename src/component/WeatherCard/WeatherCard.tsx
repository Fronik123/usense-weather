import React from "react";
import { WeatherType, type WeatherData } from "../../types/weather";
import styles from "./WeatherCard.module.css";

interface Props {
  weather: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ weather }) => {
  const { name, main, weather: info, wind } = weather;
  const { description, icon } = info[0];
  const weatherMain = info[0].main;

  let weatherClass = styles.default;
  switch (weatherMain) {
    case WeatherType.Rain:
      weatherClass = styles.rain;
      break;
    case WeatherType.Snow:
      weatherClass = styles.snow;
      break;
    case WeatherType.Clear:
      weatherClass = styles.sunny;
      break;
    case WeatherType.Clouds:
      weatherClass = styles.cloudy;
      break;
    default:
      weatherClass = styles.default;
  }

  return (
    <div className={`${styles.weatherCard} ${weatherClass}`}>
      <h2>{name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <p>{Math.round(main.temp)}°C</p>
      <p>Погода: {description}</p>
      <p>Вологість: {main.humidity}%</p>
      <p>Вітер: {wind.speed} м/с</p>
    </div>
  );
};

export default WeatherCard;
