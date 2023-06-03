import { createContext, useContext, useState } from "react";
import { iGetCityByName, iProviderProps, iSearchCity } from "../interface";
import axios from "axios";
import { api } from "../services/api";

export interface iAuthProviderData {
  getCityByName: (name: iSearchCity) => Promise<void>;
  value: iGetCityByName;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iProviderProps) => {
  const [value, setValue] = useState({} as iGetCityByName);

  const getCityByName = async ({ city }: iSearchCity) => {
    try {
      console.log(city);
      const resp = await api.get(`/city/${city}`);

      setValue(resp.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        error.response?.data.error && localStorage.removeItem("@token");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        getCityByName,
        value,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
