import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

export default function AddNames({ myName, setMyName }) {
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

  const removeName = () => {
    if (myName.length === 1) {
      alert("한번 더는 삭제할 수 없습니다.");
    } else {
      setMyName(myName.slice(0, myName.length - 1));
    }
  };

  return (
    <>
      <form onSubmit={onAddNames}>
        <Input
          mt={"10px"}
          ml={"20px"}
          htmlSize={20}
          width="auto"
          placeholder="이름을 입력하세요."
          isInvalid
          errorBorderColor="black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></Input>
        <Button mb={"5px"} ml={"20px"} type="submit">
          추가
        </Button>
        <Button mb={"5px"} ml={"20px"} onClick={removeName}>
          삭제
        </Button>
      </form>
    </>
  );
}
