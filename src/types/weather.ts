export interface WeatherData {
  name: string;
  main: WeatherMain;
  weather: WeatherCondition[];
  wind: WeatherWind;
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

export interface WeatherMain {
  temp: number;
  humidity: number;
}

export const WeatherType = {
  Clear: "Clear",
  Rain: "Rain",
  Snow: "Snow",
  Clouds: "Clouds",
} as const;

export type WeatherType = (typeof WeatherType)[keyof typeof WeatherType];
