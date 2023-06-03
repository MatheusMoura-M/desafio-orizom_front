import { Flex, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface iCardProps {
  children: ReactNode;
  heightBig?: string | number;
  heightSmall?: string | number;
  widthBig?: string | number;
  widthSmall?: string | number;
  opacity?: string | number;
  flexDir?: string;
  rowSpan: number;
  colSpan: number;
}

const CardWeather = ({
  children,
  heightBig,
  heightSmall,
  widthBig,
  widthSmall,
  opacity,
  flexDir,
  rowSpan,
  colSpan,
}: iCardProps) => {
  return (
    <GridItem
      display={"flex"}
      rowSpan={rowSpan}
      colSpan={colSpan}
      h={heightBig}
      w={widthBig}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"rgb(17,62,103)"}
      bgGradient={
        "linear-gradient(90deg, rgba(17,62,103,1) 20%, rgba(30,75,176,1) 65%, rgba(41 104 135) 98%)"
      }
      zIndex={1}
      opacity={opacity}
      borderRadius={"1.5rem"}
    >
      <Flex
        h={heightSmall}
        w={widthSmall}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"3rem"}
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
