import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthProvider } from "./context/webContext";
import custonTheme from "./styles/theme";
import RoutesMain from "./routes";

const App = () => {
  return (
    <ChakraProvider theme={custonTheme}>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
