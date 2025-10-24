const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getWeatherByCity(city: string, signal?: AbortSignal) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ua`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("Unable to get weather");
  }

  return await response.json();
}
