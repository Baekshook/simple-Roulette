import React from "react";
import Roulette from "./atoms/Roulette";

import { Grid } from "@chakra-ui/react";

export default function MainRoulette() {
  return (
    <>
      <Grid gap="8" mt={"20px"} templateColumns="repeat(3, 1fr)" marginTop={"20px"} marginBottom={"20px"}>
        <Roulette color="red.200" />
        <Roulette color="purple.200" />
        <Roulette color="orange.200" />
        <Roulette color="green.200" />
        <Roulette color="blue.200" />
        <Roulette color="yellow.200" />
      </Grid>
    </>
  );
}
