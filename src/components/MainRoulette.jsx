import React from "react";
import Roulette1 from "./Roulette1";
import Roulette2 from "./Roulette2";
import Roulette3 from "./Roulette3";
import Roulette4 from "./Roulette4";
import Roulette5 from "./Roulette5";
import Roulette6 from "./Roulette6";
import { Flex } from "@chakra-ui/react";

export default function MainRoulette() {
  return (
    <>
      <Flex gap="8">
        <Roulette1 />
        <Roulette2 />
        <Roulette3 />
      </Flex>
      <Flex gap="8">
        <Roulette4 />
        <Roulette5 />
        <Roulette6 />
      </Flex>
    </>
  );
}
