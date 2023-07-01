import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import AddNames from "@components/molcules/AddNames";

export default function Roulette({ colors, info, n }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [myName, setMyName] = useState(info);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * myName.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    if (mustSpin === true) {
      console.log(prizeNumber);
    }
  }, [handleSpinClick]);

  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={colors}
      marginLeft={"11px"}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        {n === 4 ? (
          <Text
            mt={"10px"}
            fontSize={"xl"}
            fontFamily={"PyeongChangPeace-Bold"}
          >
            한달 전체
          </Text>
        ) : (
          <Text
            mt={"10px"}
            fontSize={"xl"}
            fontFamily={"PyeongChangPeace-Bold"}
          >
            {n + 1}주차
          </Text>
        )}
      </Flex>
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
        fontSize="20"
        backgroundColors={["#FFFF00", "#00FF7F", "#FF69B4", "#ADD8E6"]}
      />
      <Button
        bgColor={"purple.500"}
        textColor={"white"}
        _hover={{ bg: "purple.400" }}
        mb={"20px"}
        ml={"20px"}
        onClick={handleSpinClick}
      >
        SPIN
      </Button>
    </Box>
  );
}
