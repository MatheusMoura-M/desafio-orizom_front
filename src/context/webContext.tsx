import { createContext, useContext, useState } from "react";
import {
  iGetCityByName,
  iGetListOfWeatherCondition,
  iProviderProps,
  iSearchCity,
} from "../interface";
import axios from "axios";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface iAuthProviderData {
  getCityByName: (name: iSearchCity) => Promise<void>;
  cityCurrent: iGetCityByName;
  getListOfWeatherCondition: () => Promise<void>;
  listWeatherConditions: string[];
  navigate: NavigateFunction;
  weatherCondition: string;
  clearData: () => Promise<void>;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iProviderProps) => {
  const [cityCurrent, setCityCurrent] = useState({} as iGetCityByName);
  const [weatherCondition, setWeatherCondition] = useState<string>("");
  const [listWeatherConditions, setListWeatherConditions] = useState(
    [] as string[]
  );

  const navigate = useNavigate();

  const getCityByName = async ({ city }: iSearchCity) => {
    try {
      const resp = await api.get(`/city/${city}`);

      setCityCurrent(resp.data);
      setWeatherCondition(resp.data.current?.condition.text);
      navigate(`/${resp.data.location.name.replaceAll(" ", "-")}`);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        error.response?.data.error.message === "No matching location found."
          ? toast.error("Nenhum local correspondente encontrado", {
              autoClose: 1500,
            })
          : error.response?.data.error.message ===
            "API key is invalid or not provided."
          ? toast.error("A chave de API é inválida ou não foi fornecida", {
              autoClose: 1500,
            })
          : toast.error("Ops, ocorreu algum erro", {
              autoClose: 1000,
            });
      }
    }
  };

  const getListOfWeatherCondition = async () => {
    try {
      const resp = await api.get("/weatherConditions");

      const arrayOfAllWeatherConditions: string[] = resp.data.map(
        (elem: iGetListOfWeatherCondition) => {
          return elem.weather_condition_day;
        }
      );
      setListWeatherConditions(arrayOfAllWeatherConditions);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        error.response?.data.error && localStorage.removeItem("@token");
      }
    }
  };

  const clearData = async () => {
    setCityCurrent({} as iGetCityByName);
    setWeatherCondition("");
  };

  return (
    <AuthContext.Provider
      value={{
        getCityByName,
        cityCurrent,
        getListOfWeatherCondition,
        listWeatherConditions,
        navigate,
        weatherCondition,
        clearData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
