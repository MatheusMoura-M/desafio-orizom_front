import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormSearch } from "../Forms/formSearch";

const Header = () => {
  const { city: cityParams } = useParams();
  const { getCityByName, navigate, clearData } = useAuth();
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    cityParams && getCityByName({ city: cityParams });
  }, []);

  const handleLogoFunction = () => {
    navigate("/");
    clearData();
    setInputSearch("");
  };

  return (
    <Box
      id="header"
      bg={"#196db657"}
      pl={{ base: 0, sm3: "20px", lg: "40px" }}
      h={{ base: "20vh", sm3: "10vh" }}
      w={"100%"}
      maxW={1520}
      margin={"0 auto"}
      borderBottom={"2px solid"}
      borderColor={"grey.5"}
    >
      <Flex
        h={"100%"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm3: "row" }}
      >
        <Flex alignItems={"center"} justifyContent={"center"} minW={180}>
          <Text
            minW={150}
            h={40.1}
            color={"#1c36b7"}
            fontSize={"26px"}
            fontWeight={"bold"}
            textShadow={"#00000069 0.1em 0.1em 0.2em"}
            cursor={"pointer"}
            onClick={handleLogoFunction}
          >
            Your Climate
          </Text>
        </Flex>
        <HStack
          display={"flex"}
          w={{ base: "100%", sm3: "70%" }}
          minW={130}
          minH={"90%"}
          alignItems={"center"}
          justifyContent={{ base: "center", sm3: "flex-start" }}
        >
          <FormSearch
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
