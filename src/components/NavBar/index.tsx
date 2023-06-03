import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iSearchCity } from "../../interface";
import { searchCitySchema } from "../../schemas";
import { useAuth } from "../../context/webContext";

const Header = () => {
  const { getCityByName } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSearchCity>({
    resolver: yupResolver(searchCitySchema),
  });

  const onFormSubmit = (formData: iSearchCity) => {
    getCityByName(formData);
  };

  return (
    <Box
      id="header"
      bg={"#196db657"}
      pl={["20px", "40px"]}
      h={"10vh"}
      w={"100%"}
      borderBottom={"2px solid"}
      borderColor={"grey.6"}
    >
      <Flex h={"100%"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} justifyContent={"center"} minW={180}>
          <Text
            minW={150}
            h={40.1}
            color={"#1c36b7"}
            fontSize={"26px"}
            fontWeight={"bold"}
            textShadow={"#00000069 0.1em 0.1em 0.2em"}
            cursor={"pointer"}
          >
            Your Climate
          </Text>
        </Flex>
        <HStack
          display={"flex"}
          w={"60%"}
          minW={130}
          minH={"78px"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Flex
            as={"form"}
            color={"grey.3"}
            bg={"#3076bb94"}
            borderRadius={".5rem"}
            align={"center"}
            onSubmit={handleSubmit(onFormSubmit)}
            _focusWithin={{
              bg: "#3076bb94",
            }}
            // autoComplete="off"
          >
            <Input
              placeholder="Busque por uma cidade..."
              bg={"#3076bb00"}
              border={"none"}
              color={"black"}
              w={350}
              {...register("city")}
              _placeholder={{
                color: "grey.2",
              }}
              _focusVisible={{
                borderColor: "none",
              }}
            />
            <Button
              bg={"none"}
              p={0}
              type="submit"
              _hover={{
                bg: "none",
              }}
            >
              <Search2Icon cursor={"pointer"} />
            </Button>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
