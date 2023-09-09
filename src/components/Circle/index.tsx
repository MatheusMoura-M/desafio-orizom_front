import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface iCardProps {
  children: ReactNode;
  hBig?: {} | string | number;
  hSmall?: {} | string | number;
  wBig?: {} | string | number;
  wSmall?: {} | string | number;
  minW?: {} | string | number;
  maxW?: {} | string | number;
  borderRadius?: {} | string | number;
  bgBig?: {} | string;
  bgSmall?: {} | string;
  color?: {} | string;
  opacity?: {} | string | number;
  flexDir?: {} | string;
  rowSpan?: {} | number;
  colSpan?: {} | number;
  order?: {} | number;
  gap?: {} | string | number;
  fontWeight?: {} | string | number;
  margin?: {} | string | number;
  zIndex?: {} | string | number;
  transition?: {} | string;
  onClick?: () => void;
  hover?: {};
  cursor?: {} | string;
  transform?: {} | string;
}

const CircleComponent = ({
  children,
  hBig,
  hSmall,
  wBig,
  wSmall,
  bgBig,
  bgSmall,
  opacity,
  borderRadius,
  flexDir,
  order,
  minW,
  maxW,
  gap,
  margin,
  zIndex,
  onClick,
  color,
  fontWeight,
  hover,
  transition,
  cursor,
  transform,
}: iCardProps) => {
  return (
    <Center
      bg={bgBig}
      w={wBig}
      h={hBig}
      borderRadius={borderRadius}
      zIndex={zIndex}
      onClick={onClick}
      position="relative"
      cursor={cursor}
      _hover={hover}
      transform={transform}
    >
      <Center
        bg={bgSmall}
        w={wSmall}
        h={hSmall}
        borderRadius={borderRadius}
        color={color}
        fontWeight={fontWeight}
        transition={transition}
        _hover={hover}
        transform={transform}
      >
        {children}
      </Center>
    </Center>
  );
};

export default CircleComponent;
