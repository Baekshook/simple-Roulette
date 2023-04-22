import { ChakraProvider } from "@chakra-ui/react";
import MainRoulette from "@components/MainRoulette";
import Fonts from "./font";

function App() {
  return (
    <>
      <ChakraProvider>
        <Fonts />
        <MainRoulette />
      </ChakraProvider>
    </>
  );
}

export default App;
