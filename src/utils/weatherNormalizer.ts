import type { WeatherData } from "../types/weather";

export function normalizeWeatherData(data: WeatherData) {
  return {
    name: data.name ?? "",
    temp: data.temp ?? 0,
    weather:
      data.weather && data.weather.length > 0
        ? data.weather
        : [{ main: "", description: "", icon: "" }],
    humidity: data.humidity ?? 0,
    wind: { speed: data.wind.speed ?? 0 },
  };
}
