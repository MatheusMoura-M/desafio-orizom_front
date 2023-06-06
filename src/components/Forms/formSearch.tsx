import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, Button } from "@chakra-ui/react";
import { iSearchCity } from "../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchCitySchema } from "../../schemas";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";
import { useState } from "react";

export interface iFormSearchProps {
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  inputSearch: string;
}

export const FormSearch = ({
  inputSearch,
  setInputSearch,
}: iFormSearchProps) => {
  const { city: cityParams } = useParams();
  const { getCityByName, getListOfWeatherCondition, navigate, clearData } =
    useAuth();
  const { register, handleSubmit } = useForm<iSearchCity>({
    resolver: yupResolver(searchCitySchema),
  });

  const onFormSubmit = (formData: iSearchCity) => {
    getCityByName(formData);
    getListOfWeatherCondition();
  };

  return (
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
      w={{ base: "90%", sm: "unset" }}
      autoComplete="off"
    >
      <Input
        placeholder="Busque por uma cidade..."
        bg={"#3076bb00"}
        border={"none"}
        color={"black"}
        w={{ base: "100%", sm: 350 }}
        {...register("city")}
        _placeholder={{
          color: "grey.2",
        }}
        _focusVisible={{
          borderColor: "none",
        }}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
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
  );
};
