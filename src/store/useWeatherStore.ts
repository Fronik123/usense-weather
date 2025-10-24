import { create } from "zustand";
import type { WeatherStore } from "../types/weather";

export const useWeatherStore = create<WeatherStore>((set) => ({
  city: "",
  setCity: (city) => set({ city }),
}));
