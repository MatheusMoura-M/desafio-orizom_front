import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import Header from "../../components/NavBar";
import Chuva from "../../assets/movies/chovisco.mp4";
import IMG1 from "../../assets/movies/ceu-limpo.mp4";
import IMG2 from "../../assets/movies/granizo.mp4";
import IMG3 from "../../assets/movies/chuva_pesada.mp4";
import IMG4 from "../../assets/movies/nevoa.mp4";
import { useAuth } from "../../context/webContext";
import CardWeather from "../../components/Cards";

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
  const dateNumber = new Date(value.forecast?.forecastday[0].date).getDay();
  const day = weekDays[dateNumber];

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
        bg={"rgb(17,77,103)"}
        bgGradient={
          "linear-gradient(90deg, rgba(17,77,103,1) 18%, rgba(30,87,176,1) 58%, rgba(54,170,177,1) 98%)"
        }
      >
        <Flex minH={"90vh"} alignItems={"center"} justifyContent={"center"}>
          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            minH={"90vh"}
          >
            <Flex
              as={"video"}
              src={Chuva}
              // src={IMG1}
              // src={IMG2}
              // src={IMG3}
              // src={IMG4}
              minH={"90vh"}
              h={"100%"}
              autoPlay
              muted
              loop
              objectFit={"cover"}
              position={"absolute"}
              opacity={0.3}
              w={"100%"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            />
            <Flex
              w={"100%"}
              minH={"90vh"}
              flexDir={"column"}
              gap={"2rem"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* <HStack
                h={100}
                w={"80%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  align={"center"}
                  color={"white"}
                  fontSize={"32px"}
                  fontWeight={500}
                >
                  {value.location?.name} <br />
                  {value.location?.localtime.slice(11)}
                </Text>
              </HStack> */}
              <CardWeather
                heightBig={200}
                widthBig={400}
                heightSmall={180}
                widthSmall={380}
                opacity={0.9}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {value.forecast?.forecastday[0].day.avgtemp_c && (
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
                >
                  <Image
                    src={value.current?.condition.icon}
                    boxSize={value.current?.condition.icon && 100}
                  />
                  {value.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0.1}
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
                heightBig={200}
                widthBig={400}
                heightSmall={180}
                widthSmall={380}
                opacity={0.9}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {value.forecast?.forecastday[0].day.avgtemp_c && (
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
                >
                  <Image
                    src={value.current?.condition.icon}
                    boxSize={value.current?.condition.icon && 100}
                  />
                  {value.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0.1}
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
                heightBig={200}
                widthBig={400}
                heightSmall={180}
                widthSmall={380}
                opacity={0.9}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {value.forecast?.forecastday[0].day.avgtemp_c && (
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
                >
                  <Image
                    src={value.current?.condition.icon}
                    boxSize={value.current?.condition.icon && 100}
                  />
                  {value.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0.1}
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
                heightBig={200}
                widthBig={400}
                heightSmall={180}
                widthSmall={380}
                opacity={0.9}
              >
                <Flex flexDir={"column"} alignItems={"center"}>
                  {value.forecast?.forecastday[0].day.avgtemp_c && (
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
                >
                  <Image
                    src={value.current?.condition.icon}
                    boxSize={value.current?.condition.icon && 100}
                  />
                  {value.forecast?.forecastday[0].day.maxwind_kph && (
                    <Text
                      position={"absolute"}
                      bottom={0.1}
                      color={"white"}
                      fontSize={"16px"}
                      fontWeight={400}
                    >
                      {value.forecast?.forecastday[0].day.maxwind_kph + "kph"}
                    </Text>
                  )}
                </Flex>
              </CardWeather>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
