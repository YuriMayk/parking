import React from "react";

import { Container } from "./styles";


let firstButtonStatus = "selected";
let secondButtonStatus = "non-selected";

function toSelectFirst() {
 if (firstButtonStatus !== "selected") {
    firstButtonStatus = "selected";
    secondButtonStatus = "non-selected";
  }
  console.log(firstButtonStatus, secondButtonStatus);
}

function toSelectSecond() {
  if (secondButtonStatus !== "selected") {
    firstButtonStatus = "non-selected";
    secondButtonStatus = "selected";
  }
  console.log(firstButtonStatus, secondButtonStatus);
}

function SelectContainer() {
  return (
    <Container>
      <button id={firstButtonStatus} onClick={toSelectFirst}>
        Entrada
      </button>
      <button id={secondButtonStatus} onClick={toSelectSecond}>Saída</button>
      <button className="under"></button> <button className="under"></button>
    </Container>
  );
}

export default SelectContainer;
