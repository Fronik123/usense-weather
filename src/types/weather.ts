export interface WeatherData {
  name: string;
  weather: WeatherCondition[];
  wind: WeatherWind;
  temp: number;
  humidity: number;
}

export interface WeatherStore {
  city: string;
  setCity: (city: string) => void;
}

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherWind {
  speed: number;
}

export const WeatherType = {
  Clear: "Clear",
  Rain: "Rain",
  Snow: "Snow",
  Clouds: "Clouds",
} as const;

export type WeatherType = (typeof WeatherType)[keyof typeof WeatherType];
