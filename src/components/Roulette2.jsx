import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Box, Button } from "@chakra-ui/react";
import AddNames from "../atoms/AddNames";

export default function Roulette2() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [myName, setMyName] = useState([{ option: "꽝" }]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * myName.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  function handleAddName(option) {
    //이름을 받아서 추가를 앞에 해줍니다.
    setMyName([{ option }, ...myName]);
  }

  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="purple.200"
      marginLeft={"11px"}
    >
      <AddNames onAddNames={handleAddName} />
      <Wheel
        mustStartSpinning={mustSpin}
        outerBorderWidth="3"
        radiusLineWidth="3"
        spinDuration="0.8"
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
