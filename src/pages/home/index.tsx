import {
  Center,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/NavBar";
import { useAuth } from "../../context/webContext";
import CardWeather from "../../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { handleMovieCurrent } from "../../utils/weatherConditionMovie";

export const Home = () => {
  const { cityCurrent, getListOfWeatherCondition, weatherCondition } =
    useAuth();

  const weekDays = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabádo",
    "Domingo",
  ];

  const newDate = new Date(cityCurrent.forecast?.forecastday[0].date);
  const lastUpdateTime = parseInt(
    cityCurrent.current?.last_updated.slice(11, 13)
  );
  let count = 0;

  useEffect(() => {
    getListOfWeatherCondition();
  }, []);

  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        flexDir="column"
        maxW={1520}
        margin={"0 auto"}
        h={"100%"}
        minH={"90vh"}
        maxH={{ base: "unset", lg2: "100vh" }}
        bg={"rgb(17,77,103)"}
        bgGradient={
          "linear-gradient(90deg, rgba(17,77,103,1) 18%, rgba(30,87,176,1) 58%, rgba(54,170,177,1) 98%)"
        }
      >
        <Flex
          minH={"90vh"}
          maxH={{ base: "unset", lg2: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            w={"100%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            position={"relative"}
            minH={"90vh"}
            maxH={{ base: "unset", lg2: "100vh" }}
            flexDir={"column"}
          >
            <Flex
              as={"video"}
              src={handleMovieCurrent()}
              minH={"90vh"}
              maxH={{ base: "unset", lg2: "100vh" }}
              h={"100%"}
              autoPlay
              muted
              loop
              objectFit={"cover"}
              position={"absolute"}
              opacity={0.6}
              w={"100%"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            />
            <HStack
              h={100}
              w={{ base: "90%", lg: "99%" }}
              m={"0 auto"}
              pl={5}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              {cityCurrent.location?.name && (
                <Text
                  w={"100%"}
                  align={"start"}
                  color={"white"}
                  fontSize={"24px"}
                  fontWeight={500}
                  zIndex={1}
                >
                  Previsão de hoje (
                  {cityCurrent.forecast?.forecastday[0].date.slice(8)}/
                  {newDate.getMonth() + 1 < 10
                    ? 0 + (newDate.getMonth() + 1).toString()
                    : newDate.getMonth() + 1 + " "}
                  ) {cityCurrent.location?.name + " "}
                  <FontAwesomeIcon icon={faLocationDot} size="1x" />
                </Text>
              )}
            </HStack>
            <Grid
              templateRows={{
                base: "repeat(5, 240px)",
                sm4: "repeat(4, 240px)",
                lg: "repeat(3, 240px)",
                lg2: "repeat(2, 240px)",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm4: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                lg2: "repeat(5, 1fr)",
              }}
              w={{ base: "85%", lg: "97%", lg2: "97%" }}
              minW={{ base: "83%", lg: "95%", lg2: "95%" }}
              m={"0 auto"}
              mb={{ base: 50, sm4: 0 }}
              minH={"74vh"}
              maxH={{ base: "unset", lg2: 479 }}
              flexDir={"row"}
              gap={"1rem"}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <CardWeather
                rowSpan={2}
                colSpan={1}
                hBig={460}
                wBig={{
                  base: "100%",
                  sm: "92%",
                  sm1: "80%",
                  sm2: "70%",
                  sm4: 320,
                }}
                hSmall={430}
                wSmall={"90%"}
                opacity={0.9}
                order={1}
                margin={"0 auto"}
              >
                <VStack
                  spacing={4}
                  w={"100%"}
                  h={"100%"}
                  justifyContent={"center"}
                >
                  {cityCurrent.forecast?.forecastday.map((elem) => {
                    const newDate = new Date(elem.date);
                    const day = weekDays[newDate.getDay()];

                    return (
                      <Flex
                        key={elem.date}
                        w={"100%"}
                        h={"16%"}
                        maxH={"19%"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Text
                          color={"white"}
                          w={"35px"}
                          fontWeight={500}
                          fontFamily={"lexend"}
                        >
                          {day.slice(0, 3)}
                        </Text>
                        <Image src={elem.day.condition.icon} boxSize={45} />
                        <Text
                          color={"white"}
                          w={100}
                          fontWeight={500}
                          fontFamily={"lexend"}
                        >
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
                colSpan={{ base: 1, lg2: 2 }}
                hBig={200}
                hSmall={170}
                wSmall={{ base: "92%", sm4: "90%", md1: "92%", lg2: "94%" }}
                minW={{ sm4: "100%", md: "unset" }}
                opacity={0.9}
                order={2}
                gap={{
                  base: "1rem",
                  sm4: 0,
                  md: "1rem",
                  lg1: "2rem",
                  lg2: "4rem",
                }}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {cityCurrent.forecast && (
                    <Text
                      color={"white"}
                      fontSize={"32px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      {cityCurrent.forecast?.forecastday[0].day.avgtemp_c + "°"}
                    </Text>
                  )}
                  <Text color={"white"} fontSize={"32px"} fontWeight={500}>
                    {weekDays[newDate.getDay()]}
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
                    src={cityCurrent.current?.condition.icon}
                    boxSize={cityCurrent.current?.condition.icon && 100}
                  />
                  {cityCurrent.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0}
                      color={"white"}
                      fontSize={"14px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      {cityCurrent.forecast?.forecastday[0].day.maxwind_kph +
                        "kph"}
                    </Text>
                  )}
                </Flex>
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={{ base: 1, sm4: 2 }}
                hBig={200}
                hSmall={170}
                wSmall={"95%"}
                opacity={0.9}
                order={{ base: 4, lg2: 3 }}
              >
                {cityCurrent.forecast && (
                  <VStack
                    spacing={{
                      base: 1,
                      lg2: weatherCondition.length > 18 ? 0 : 1.5,
                    }}
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    h={"100%"}
                    w={"97%"}
                  >
                    <Text
                      color={"white"}
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      Condição climática:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {weatherCondition}
                      </Text>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      Umidade:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {cityCurrent.current?.humidity + "%"}
                      </Text>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      Chance de chover:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {cityCurrent.forecast?.forecastday[0].day
                          .daily_chance_of_rain + "%"}
                      </Text>
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={"lexend"}
                    >
                      Chance de nevar:{" "}
                      <Text
                        as={"span"}
                        color={"#62b5ff"}
                        display={"inline-block"}
                        fontSize={"20px"}
                      >
                        {cityCurrent.forecast?.forecastday[0].day
                          .daily_chance_of_snow + "%"}
                      </Text>
                    </Text>
                  </VStack>
                )}
              </CardWeather>

              <CardWeather
                rowSpan={1}
                colSpan={{ base: 1, sm4: 2, lg: 3 }}
                hBig={200}
                hSmall={170}
                wSmall={"95%"}
                minW={{ base: "100%", sm4: "unset" }}
                maxW={{ base: 601, sm4: "unset" }}
                opacity={0.9}
                order={{ base: 5, lg2: 4 }}
              >
                <HStack
                  as={"ul"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  w={"99%"}
                  h={"100%"}
                  gap={0}
                  overflowX={"auto"}
                  sx={{
                    "::-webkit-scrollbar": {
                      w: "10px",
                      h: "9px",
                    },
                    "::-webkit-scrollbar-track": {
                      bg: "#4a91b3",
                      borderBottomRadius: "24px",
                      w: "10px",
                      transition: "2.3s",
                    },
                    "::-webkit-scrollbar-thumb": {
                      bg: "#204e64",
                      borderBottomRadius: "24px",
                    },
                  }}
                >
                  {cityCurrent.forecast?.forecastday[0].hour.map((elem, i) => {
                    if (i >= lastUpdateTime && i <= lastUpdateTime + 8) {
                      count += 1;
                      return (
                        <VStack
                          as={"li"}
                          key={elem.time}
                          alignItems={"center"}
                          justifyContent={"center"}
                          minW={{
                            base: "25.5%",
                            sm: "20.5%",
                            sm2: "17.5%",
                            sm4: "14.5%",
                            md2: "13.5%",
                            lg: "12.5%",
                            lg2: "15%",
                            xl: "14%",
                            xl1: "12.5%",
                            xl2: "11%",
                          }}
                          h={"100%"}
                          borderRight={
                            lastUpdateTime + 8 !== i ? "1px solid grey" : 0
                          }
                        >
                          {i === lastUpdateTime ? (
                            <Text
                              display={"flex"}
                              alignItems={"center"}
                              h={"33%"}
                              color={"white"}
                              fontWeight={400}
                              fontFamily={"lexend"}
                            >
                              Agora
                            </Text>
                          ) : (
                            <Text
                              display={"flex"}
                              alignItems={"center"}
                              h={"33%"}
                              color={"white"}
                              fontWeight={400}
                              fontFamily={"lexend"}
                            >
                              {elem.time.slice(11, 13) + "hrs"}
                            </Text>
                          )}
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontSize={"20px"}
                            fontWeight={400}
                            fontFamily={"lexend"}
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
                  {cityCurrent.forecast?.forecastday[0].hour.map((elem, i) => {
                    if (
                      (count === 1 && i < 8) ||
                      (count === 2 && i < 7) ||
                      (count === 3 && i < 6) ||
                      (count === 4 && i < 5) ||
                      (count === 5 && i < 4) ||
                      (count === 6 && i < 3) ||
                      (count === 7 && i < 2) ||
                      (count === 8 && i < 1)
                    ) {
                      return (
                        <VStack
                          as={"li"}
                          key={elem.time}
                          alignItems={"center"}
                          justifyContent={"center"}
                          minW={{
                            base: "25.5%",
                            sm: "20.5%",
                            sm2: "17.5%",
                            sm4: "14.5%",
                            md2: "13.5%",
                            lg: "12.5%",
                            lg2: "15%",
                            xl: "14%",
                            xl1: "12.5%",
                            xl2: "11%",
                          }}
                          h={"100%"}
                          borderRight={
                            (count === 1 && i < 7) ||
                            (count === 2 && i < 6) ||
                            (count === 3 && i < 5) ||
                            (count === 4 && i < 4) ||
                            (count === 5 && i < 3) ||
                            (count === 6 && i < 2) ||
                            (count === 7 && i < 1)
                              ? "1px solid grey"
                              : 0
                          }
                        >
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontWeight={400}
                            fontFamily={"lexend"}
                          >
                            {elem.time.slice(11, 13) + "hrs"}
                          </Text>
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            h={"33%"}
                            color={"white"}
                            fontSize={"20px"}
                            fontWeight={400}
                            fontFamily={"lexend"}
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
                hBig={200}
                hSmall={170}
                wSmall={{ base: "92%", sm4: "90%", md1: "92%", lg2: "90%" }}
                minW={240}
                opacity={0.9}
                order={{ base: 3, lg2: 5 }}
              >
                {cityCurrent.forecast && (
                  <Flex
                    w={"100%"}
                    h={"90%"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    flexDir={"column"}
                    gap={"1rem"}
                  >
                    <Text
                      color={"white"}
                      fontWeight={500}
                      fontFamily={"lexend"}
                      fontSize={{ base: "22px", lg2: "20px", xl: "21px" }}
                    >
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

                      <Text
                        color={"white"}
                        minW={"70px"}
                        fontWeight={400}
                        fontFamily={"lexend"}
                      >
                        {cityCurrent.forecast?.forecastday[0].astro.sunrise}
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
                      <Text
                        color={"white"}
                        minW={"70px"}
                        fontWeight={400}
                        fontFamily={"lexend"}
                      >
                        {cityCurrent.forecast?.forecastday[0].astro.sunset}
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
