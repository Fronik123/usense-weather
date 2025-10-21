import { useState } from "react";
import { getWeatherByCity } from "../api/weatherApi";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    if (!city) return;

    const cached = localStorage.getItem(city);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 10 * 60 * 1000) {
        setWeather(data);
        setError("");
        return;
      }
    }

    try {
      const data = await getWeatherByCity(city);

      localStorage.setItem(
        city,
        JSON.stringify({ data, timestamp: Date.now() })
      );

      setWeather(data);
      setError("");
    } catch {
      setError("City not found");
      setWeather(null);
    }
  };

  return { weather, error, fetchWeather };
}
