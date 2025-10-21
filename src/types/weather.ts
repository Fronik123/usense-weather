export interface WeatherData {
  name: string;
  main: WeatherMain;
  weather: WeatherCondition[];
  wind: WeatherWind;
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
