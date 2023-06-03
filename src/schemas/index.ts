import * as yup from "yup";
import { iSearchCity } from "../interface";

export const searchCitySchema: yup.SchemaOf<iSearchCity> = yup.object().shape({
  city: yup.string().required("Campo obrigatório"),
});
