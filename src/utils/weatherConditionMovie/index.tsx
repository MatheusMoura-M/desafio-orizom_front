import Chovisco from "../../assets/movies/chovisco.mp4";
import Chuva_Fraca from "../../assets/movies/chuva_fraca.mp4";
import Chuva_Pesada from "../../assets/movies/chuva_pesada.mp4";
import Chuva_Neblina from "../../assets/movies/chuva-neblina.mp4";
import Chuva_Trovão from "../../assets/movies/chuva_trovão.mp4";
import Neve_Fraca from "../../assets/movies/neve.mp4";
import Neve_Pesada from "../../assets/movies/neve_pesada.mp4";
import Nevasca from "../../assets/movies/nevasca.mp4";
import Nevoa from "../../assets/movies/nevoa.mp4";
import Nublado from "../../assets/movies/nublado.mp4";
import Trovoada from "../../assets/movies/trovoada.mp4";
import Granizo from "../../assets/movies/granizo.mp4";
import Ceu_Limpo from "../../assets/movies/ceu-limpo.mp4";
import Ceu_Limpo_Noite from "../../assets/movies/ceu-limpo_noite.mp4";
import { useAuth } from "../../context/webContext";

export const handleMovieCurrent = () => {
  const { listWeatherConditions, weatherCondition } = useAuth();

  const movieCurrent = !weatherCondition
    ? ""
    : weatherCondition === "Céu limpo"
    ? Ceu_Limpo_Noite
    : weatherCondition === listWeatherConditions[0]
    ? Ceu_Limpo
    : weatherCondition === listWeatherConditions[44]
    ? Chuva_Trovão
    : weatherCondition === listWeatherConditions[9] ||
      weatherCondition === listWeatherConditions[45]
    ? Trovoada
    : weatherCondition === listWeatherConditions[18] ||
      weatherCondition === listWeatherConditions[19] ||
      weatherCondition === listWeatherConditions[24] ||
      weatherCondition === listWeatherConditions[5] ||
      weatherCondition === listWeatherConditions[35]
    ? Chuva_Fraca
    : weatherCondition === listWeatherConditions[21] ||
      weatherCondition === listWeatherConditions[25] ||
      weatherCondition === listWeatherConditions[36] ||
      weatherCondition === listWeatherConditions[37] ||
      weatherCondition === listWeatherConditions[23] ||
      weatherCondition === listWeatherConditions[22] ||
      weatherCondition === listWeatherConditions[20]
    ? Chuva_Pesada
    : weatherCondition === listWeatherConditions[13] ||
      weatherCondition === listWeatherConditions[17]
    ? Chuva_Neblina
    : weatherCondition === listWeatherConditions[8] ||
      weatherCondition === listWeatherConditions[14] ||
      weatherCondition === listWeatherConditions[15] ||
      weatherCondition === listWeatherConditions[16]
    ? Chovisco
    : weatherCondition === listWeatherConditions[4] ||
      weatherCondition === listWeatherConditions[12]
    ? Nevoa
    : weatherCondition === listWeatherConditions[28] ||
      weatherCondition === listWeatherConditions[29] ||
      weatherCondition === listWeatherConditions[30] ||
      weatherCondition === listWeatherConditions[31] ||
      weatherCondition === listWeatherConditions[26] ||
      weatherCondition === listWeatherConditions[6] ||
      weatherCondition === listWeatherConditions[38] ||
      weatherCondition === listWeatherConditions[40] ||
      weatherCondition === listWeatherConditions[46]
    ? Neve_Fraca
    : weatherCondition === listWeatherConditions[27] ||
      weatherCondition === listWeatherConditions[41] ||
      weatherCondition === listWeatherConditions[39] ||
      weatherCondition === listWeatherConditions[32] ||
      weatherCondition === listWeatherConditions[33] ||
      weatherCondition === listWeatherConditions[47]
    ? Neve_Pesada
    : weatherCondition === listWeatherConditions[42] ||
      weatherCondition === listWeatherConditions[43] ||
      weatherCondition === listWeatherConditions[34] ||
      weatherCondition === listWeatherConditions[7]
    ? Granizo
    : weatherCondition === listWeatherConditions[10] ||
      weatherCondition === listWeatherConditions[11]
    ? Nevasca
    : weatherCondition === listWeatherConditions[1] ||
      weatherCondition === listWeatherConditions[2] ||
      weatherCondition === listWeatherConditions[3]
    ? Nublado
    : "";

  return movieCurrent;
};
