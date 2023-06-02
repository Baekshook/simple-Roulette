import React from "react";
import Roulette from "./atoms/Roulette";
import nameData from "../nameData.json";
import { Grid } from "@chakra-ui/react";

export default function MainRoulette() {
  return (
    <>
      <Grid
        gap="8"
        mt={"20px"}
        templateColumns="repeat(2, 1fr)"
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        {nameData.map((v, i) => {
          return <Roulette key={i} colors={v.colors} info={v.info} n={i}/>;
        })}
      </Grid>
    </>
  );
}
