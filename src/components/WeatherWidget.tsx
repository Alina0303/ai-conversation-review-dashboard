import axios from "axios";
import { useEffect, useState } from "react";
interface WeatherValue {
  value: string;
}

interface RowWeatherCondition {
  temp_C: string;
  weatherDesc: WeatherValue[];
  weatherIconUrl: WeatherValue[];
}

interface WeatherState {
  temp_C: string;
  weatherDesc: string;
  weatherIconUrl: string;
}
interface WttrResponse {
  current_condition: RowWeatherCondition[];
}

interface WeatherProps {
  city?: string;
}

const WeatherWidget = ({ city }: WeatherProps) => {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const fetchWeather = async () => {
    try {
      const { data } = await axios.get<WttrResponse>(
        `https://wttr.in/${city}?format=j1`,
      );
      const current = data.current_condition[0];
      const weatherInfo: WeatherState = {
        temp_C: current.temp_C,
        weatherDesc: current.weatherDesc[0].value,
        weatherIconUrl: current.weatherIconUrl[0].value,
      };
      setWeather(weatherInfo);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [city]);
  if (error) {
    return (
      <div className="bg-base-100 p-4 rounded-2xl flex items-center justify-center">
        <h3>something went wrong...</h3>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="bg-base-100 p-4 rounded-2xl flex items-center justify-center">
        <span className="loading loading-ring loading-md"></span>
      </div>
    );
  }
  return (
    <div className="bg-base-100 p-4 rounded-2xl flex gap-4">
      <div className="rounded-full">
        <img
          src={weather?.weatherIconUrl}
          alt="weather icon"
          className="rounded-full"
        />
      </div>
      <div>
        <h3>
          {city}: {weather?.temp_C} °C
        </h3>
        <p>{weather?.weatherDesc}</p>
      </div>
    </div>
  );
};
export default WeatherWidget;
