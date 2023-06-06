import { Flex, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface iCardProps {
  children: ReactNode;
  hBig?: {} | string | number;
  hSmall?: {} | string | number;
  wBig?: {} | string | number;
  wSmall?: {} | string | number;
  minW?: {} | string | number;
  maxW?: {} | string | number;
  opacity?: {} | string | number;
  flexDir?: string;
  rowSpan?: {} | number;
  colSpan?: {} | number;
  order: {} | number;
  gap?: {} | string | number;
  margin?: {} | string | number;
}

const CardWeather = ({
  children,
  hBig,
  hSmall,
  wBig,
  wSmall,
  opacity,
  flexDir,
  rowSpan,
  colSpan,
  order,
  minW,
  maxW,
  gap,
  margin,
}: iCardProps) => {
  return (
    <GridItem
      display={"flex"}
      rowSpan={rowSpan}
      colSpan={colSpan}
      h={hBig}
      w={wBig}
      minW={minW}
      maxW={maxW}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"rgb(17,62,103)"}
      bgGradient={
        "linear-gradient(90deg, rgba(17,62,103,1) 20%, rgba(30,75,176,1) 65%, rgba(41 104 135) 98%)"
      }
      zIndex={1}
      opacity={opacity}
      borderRadius={"1.5rem"}
      order={order}
      m={margin}
    >
      <Flex
        h={hSmall}
        w={wSmall}
        alignItems={"center"}
        justifyContent={"center"}
        gap={gap}
        bg={"rgb(17,62,103)"}
        bgGradient={
          "linear-gradient(90deg, rgba(41 104 135)  20%, rgba(30,75,176,1) 65%,rgba(17,62,103,1) 98%)"
        }
        borderRadius={"1.5rem"}
        flexDir={flexDir == "column" ? "column" : "row"}
      >
        {children}
      </Flex>
    </GridItem>
  );
};

export default CardWeather;
