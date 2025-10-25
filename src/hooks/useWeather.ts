import { useQuery } from "@tanstack/react-query";
import { getWeatherByCity } from "../api/weatherApi";
import { useRef } from "react";
import { normalizeWeatherData } from "../utils/weatherNormalizer";

export function useWeather(city: string) {
  const controllerRef = useRef<AbortController | null>(null);

  const query = useQuery({
    queryKey: ["weather", city],
    queryFn: async () => {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();
      return await getWeatherByCity(city, controllerRef.current.signal);
    },
    enabled: false,
    staleTime: 1000 * 60 * 10,
    retry: false,
    select: (data) => normalizeWeatherData(data),
  });

  return query;
}
