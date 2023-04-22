import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Box, Button } from "@chakra-ui/react";
import AddNames from "@components/molcules/AddNames";

export default function Roulette({ colors, info }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [myName, setMyName] = useState(info);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * myName.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={colors}
      marginLeft={"11px"}
    >
      <AddNames myName={myName} setMyName={setMyName} />
      <Wheel
        mustStartSpinning={mustSpin}
        outerBorderWidth="3"
        radiusLineWidth="3"
        spinDuration="1"
        prizeNumber={prizeNumber}
        data={myName}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        fontSize="25"
        fontFamily="Single Day"
        backgroundColors={["#64FE2E", "#F781F3", "#FAAC58", "#00FFFF"]}
      />
      <Button mb={"20px"} ml={"20px"} onClick={handleSpinClick}>
        SPIN
      </Button>
    </Box>
  );
}
