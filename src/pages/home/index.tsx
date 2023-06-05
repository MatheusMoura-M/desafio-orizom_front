import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/NavBar";
import Chuva from "../../assets/movies/chovisco.mp4";
import Ensolarado from "../../assets/movies/ceu-limpo.mp4";
import Granizo from "../../assets/movies/granizo.mp4";
import Chuva_pesada from "../../assets/movies/chuva_pesada.mp4";
import Neve_pesada from "../../assets/movies/neve_pesada.mp4";
import Trovoada from "../../assets/movies/trovoada.mp4";
import Nevasca from "../../assets/movies/nevasca.mp4";
import Nublado from "../../assets/movies/nublado.mp4";
import Nevoa from "../../assets/movies/nevoa.mp4";
import { useAuth } from "../../context/webContext";
import CardWeather from "../../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

export const Home = () => {
  const { value } = useAuth();

  const weekDays = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabádo",
    "Domingo",
  ];
  const newDate = new Date(value.forecast?.forecastday[0].date);
  const dayNumber = newDate.getDay();
  const monthNumber = newDate.getMonth() + 1;
  const lastUpdateTime = parseInt(value.current?.last_updated.slice(11, 13));
  const day = weekDays[dayNumber];
  let count = 0;

  const weatherCondition = value.current?.condition.text;
  const weatherConditionFormated =
    weatherCondition?.split(" ")[0] === "Possibilidade" &&
    weatherCondition?.replace("Possibilidade", "Possib.");

  const MovieCurrent =
    weatherCondition == "Céu limpo"
      ? Ensolarado
      : weatherCondition == "Parcialmente nublado"
      ? Nublado
      : weatherCondition == "Neblina"
      ? Nevoa
      : Trovoada;

  console.log(value);
  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        flexDir="column"
        maxW="1520px"
        margin={"0 auto"}
        h={"100%"}
        minH={"90vh"}
        maxH={"100vh"}
        bg={"rgb(17,77,103)"}
        bgGradient={
          "linear-gradient(90deg, rgba(17,77,103,1) 18%, rgba(30,87,176,1) 58%, rgba(54,170,177,1) 98%)"
        }
      >
        <Flex
          minH={"90vh"}
          maxH={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            w={"100%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            position={"relative"}
            minH={"90vh"}
            maxH={"100vh"}
            flexDir={"column"}
          >
            <Flex
              as={"video"}
              src={MovieCurrent}
              minH={"90vh"}
              maxH={"100vh"}
              h={"100%"}
              autoPlay
              muted
              loop
              objectFit={"cover"}
              position={"absolute"}
              opacity={0.5}
              w={"100%"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            />
            <HStack
              h={100}
              w={"60%"}
              pl={5}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {value.location?.name && (
                <Text
                  align={"center"}
                  color={"white"}
                  fontSize={"24px"}
                  fontWeight={500}
                >
                  Previsão de hoje (
                  {value.forecast?.forecastday[0].date.slice(8)}/
                  {monthNumber < 10 ? 0 + monthNumber.toString() : monthNumber})
                  &nbsp;
                  {value.location?.name}
                  &nbsp;
                  <FontAwesomeIcon icon={faLocationDot} size="1x" />
                </Text>
              )}
            </HStack>
            <Grid
              templateRows="repeat(2, 240px)"
              templateColumns="repeat(5, 1fr)"
              w={"97%"}
              minW={"95%"}
              m={"0 auto"}
              minH={"76vh"}
              maxH={"650px"}
              flexDir={"row"}
              gap={"1rem"}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <CardWeather
                rowSpan={2}
                colSpan={1}
                heightBig={460}
                widthBig={320}
                heightSmall={430}
                widthSmall={290}
                opacity={0.9}
              >
                <VStack
                  spacing={4}
                  w={"100%"}
                  h={"100%"}
                  justifyContent={"center"}
                >
                  {value.forecast?.forecastday.map((elem) => {
                    const newDate = new Date(elem.date);
                    const dayNumber = newDate.getDay();
                    const day = weekDays[dayNumber];

                    return (
                      <Flex
                        key={elem.date}
                        w={"100%"}
                        h={"16%"}
                        maxH={"19%"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Text color={"white"} w={"35px"}>
                          {day.slice(0, 3)}
                        </Text>
                        <Image src={elem.day.condition.icon} boxSize={45} />
                        <Text color={"white"} w={90}>
                          {elem.day.maxtemp_c + "°"} /{" "}
                          {elem.day.mintemp_c + "°"}
                        </Text>
                      </Flex>
                    );
                  })}
                </VStack>
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={2}
                heightBig={200}
                heightSmall={170}
                widthSmall={"95%"}
                opacity={0.9}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {value.forecast && (
                    <Text color={"white"} fontSize={"32px"} fontWeight={500}>
                      {value.forecast?.forecastday[0].day.avgtemp_c + "°"}
                    </Text>
                  )}
                  <Text color={"white"} fontSize={"32px"} fontWeight={500}>
                    {day}
                  </Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  alignItems={"center"}
                  position={"relative"}
                  mb={5}
                  h={115}
                >
                  <Image
                    src={value.current?.condition.icon}
                    boxSize={value.current?.condition.icon && 100}
                  />
                  {value.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0}
                      color={"white"}
                      fontSize={"16px"}
                      fontWeight={400}
                    >
                      {value.forecast?.forecastday[0].day.maxwind_kph + "kph"}
                    </Text>
                  )}
                </Flex>
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={2}
                heightBig={200}
                heightSmall={170}
                widthSmall={"95%"}
                opacity={0.9}
              >
                {value.forecast && (
                  <VStack
                    spacing={1.5}
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    h={"100%"}
                    w={"97%"}
                  >
                    <Text color={"white"} fontSize={"22px"} fontWeight={500}>
                      Condição climática:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                        letterSpacing={"-0.5px"}
                      >
                        {weatherConditionFormated}
                      </Text>
                    </Text>
                    <Text color={"white"} fontSize={"22px"} fontWeight={500}>
                      Umidade:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {value.current?.humidity + "%"}
                      </Text>
                    </Text>
                    <Text color={"white"} fontSize={"22px"} fontWeight={500}>
                      Chance de chover:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {value.forecast?.forecastday[0].day
                          .daily_chance_of_rain + "%"}
                      </Text>
                    </Text>
                    <Text color={"white"} fontSize={"22px"} fontWeight={500}>
                      Chance de nevar:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {value.forecast?.forecastday[0].day
                          .daily_chance_of_snow + "%"}
                      </Text>
                    </Text>
                  </VStack>
                )}
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={3}
                heightBig={200}
                heightSmall={170}
                widthSmall={"95%"}
                opacity={0.9}
              >
                <HStack
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  {value.forecast?.forecastday[0].hour.map((elem, i) => {
                    if (i >= lastUpdateTime && i <= lastUpdateTime + 5) {
                      count += 1;
                      return (
                        <VStack
                          key={elem.time}
                          alignItems={"center"}
                          justifyContent={"center"}
                          w={"18%"}
                          h={"100%"}
                        >
                          {i === lastUpdateTime ? (
                            <Text
                              display={"flex"}
                              alignItems={"center"}
                              h={"33%"}
                              color={"white"}
                              fontWeight={500}
                            >
                              Agora
                            </Text>
                          ) : (
                            <Text
                              display={"flex"}
                              alignItems={"center"}
                              h={"33%"}
                              color={"white"}
                              fontWeight={500}
                            >
                              {elem.time.slice(11, 13) + "hrs"}
                            </Text>
                          )}
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontWeight={500}
                            fontSize={"22px"}
                          >
                            {elem.temp_c + "°"}
                          </Text>
                          <Image
                            h={"33%"}
                            src={elem.condition.icon}
                            boxSize={elem.condition.icon && 61}
                          />
                        </VStack>
                      );
                    }
                  })}
                  {value.forecast?.forecastday[0].hour.map((elem, i) => {
                    if (
                      (count === 1 && i < 5) ||
                      (count === 2 && i < 4) ||
                      (count === 3 && i < 3) ||
                      (count === 4 && i < 2) ||
                      (count === 5 && i < 1)
                    ) {
                      return (
                        <VStack
                          key={elem.time}
                          alignItems={"center"}
                          justifyContent={"center"}
                          w={"18%"}
                          h={"100%"}
                        >
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontWeight={500}
                          >
                            {elem.time.slice(11, 13) + "hrs"}
                          </Text>
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontWeight={500}
                            fontSize={"22px"}
                          >
                            {elem.temp_c + "°"}
                          </Text>
                          <Image
                            h={"33%"}
                            src={elem.condition.icon}
                            boxSize={elem.condition.icon && 61}
                          />
                        </VStack>
                      );
                    }
                  })}
                </HStack>
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={1}
                heightBig={200}
                widthBig={300}
                heightSmall={170}
                widthSmall={270}
                opacity={0.9}
              >
                {value.forecast && (
                  <Flex
                    w={"100%"}
                    h={"90%"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    flexDir={"column"}
                    gap={"1rem"}
                  >
                    <Text color={"white"} fontWeight={500} fontSize={"22px"}>
                      Nascer e pôr do sol
                    </Text>
                    <HStack spacing={5}>
                      <Center
                        bg={"#d95a00"}
                        w={"41px"}
                        h={"41px"}
                        borderRadius={"full"}
                      >
                        <Center
                          bg={"#f5a20b"}
                          w={"35px"}
                          h={"35px"}
                          borderRadius={"full"}
                        >
                          <ArrowUpIcon boxSize={"20px"} color={"white"} />
                        </Center>
                      </Center>
                      <Text color={"white"} fontWeight={500}>
                        {value.forecast?.forecastday[0].astro.sunrise}
                      </Text>
                    </HStack>
                    <HStack spacing={5}>
                      <Center
                        bg={"#d95a00"}
                        w={"41px"}
                        h={"41px"}
                        borderRadius={"full"}
                      >
                        <Center
                          bg={"#f5a20b"}
                          w={"35px"}
                          h={"35px"}
                          borderRadius={"full"}
                        >
                          <ArrowDownIcon boxSize={"20px"} color={"white"} />
                        </Center>
                      </Center>
                      <Text color={"white"} fontWeight={500}>
                        {value.forecast?.forecastday[0].astro.sunset}
                      </Text>
                    </HStack>
                  </Flex>
                )}
              </CardWeather>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
