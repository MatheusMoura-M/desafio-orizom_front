import { ReactNode } from "react";

export interface iProviderProps {
  children: ReactNode;
}

export interface iSearchCity {
  city: string;
}
export interface iHourForecastDay {
  time: string;
  temp_c: string;
  temp_f: string;
  condition: {
    text: string;
    icon: string;
    code: string;
  };
  wind_kph: string;
  humidity: string;
  windchill_c: string;
  windchill_f: string;
  will_it_rain: string;
  chance_of_rain: string;
  will_it_snow: string;
  chance_of_snow: string;
}
export interface iForecastDays {
  date: string;
  day: {
    maxtemp_c: string;
    maxtemp_f: string;
    mintemp_c: string;
    mintemp_f: string;
    avgtemp_c: string;
    avgtemp_f: string;
    maxwind_kph: string;
    avghumidity: string;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: string;
    };
  };
  astro: {
    sunrise: string;
    sunset: string;
    moon_phase: string;
  };
  hour: iHourForecastDay[];
}
export interface iGetCityByName {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: string;
    temp_f: string;
    is_day: string;
    condition: {
      text: string;
      icon: string;
      code: string;
    };
    humidity: string;
  };
  forecast: {
    forecastday: iForecastDays[];
  };
}
