import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

export default function AddNames({myName, setMyName}) {
  const [name, setName] = useState("");

  const onAddNames = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("값을 입력해 주세요!");
    } else {
      setMyName([...myName, { option: name }]);
      setName("");
    }
  };

  return (
    <>
      <form onSubmit={onAddNames}> 
        <Input
          mt={"20px"}
          ml={"20px"}
          htmlSize={20}
          width="auto"
          placeholder="이름을 입력하세요."
          isInvalid
          errorBorderColor="black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></Input>
        <Button ml={"20px"} type="submit">
          추가
        </Button>
      </form>
    </>
  );
}
