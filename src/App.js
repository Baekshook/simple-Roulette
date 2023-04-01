import { ChakraProvider } from "@chakra-ui/react";
import MainRoulette from "@components/MainRoulette";

function App() {
  return (
    <>
      <ChakraProvider>
        <MainRoulette />
      </ChakraProvider>
    </>
  );
}

export default App;
