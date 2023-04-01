import React from "react";
import Roulette1 from "./atoms/Roulette1";
import Roulette2 from "./atoms/Roulette2";
import Roulette3 from "./atoms/Roulette3";
import Roulette4 from "./atoms/Roulette4";
import Roulette5 from "./atoms/Roulette5";
import Roulette6 from "./atoms/Roulette6";
import { Flex } from "@chakra-ui/react";

export default function MainRoulette() {
  return (
    <>
      <Flex gap="8" mt={"20px"}>
        <Roulette1 />
        <Roulette2 />
        <Roulette3 />
      </Flex>
      <Flex gap="8" mt={"10px"} mb={"30px"}>
        <Roulette4 />
        <Roulette5 />
        <Roulette6 />
      </Flex>
    </>
  );
}
