import React from "react";
import Roulette from "./atoms/Roulette";
import nameData from "../nameData.json";
import { Grid } from "@chakra-ui/react";

const colors = [
  "red.200",
  "purple.200",
  "orange.200",
  "green.200",
  "blue.200",
  "yellow.200",
];

export default function MainRoulette() {
  return (
    <>
      <Grid
        gap="8"
        mt={"20px"}
        templateColumns="repeat(3, 1fr)"
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        {nameData.map((v, i) => {
          return <Roulette key={i} colors={v.colors} info={v.info}/>;
        })}
      </Grid>
    </>
  );
}
