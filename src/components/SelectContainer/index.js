import React, { useState } from "react";

import { Container } from "./styles";

function SelectContainer() {
  const [condition, setCondition] = useState([
    "selected",
    "non-selected",
    "under-selected",
    "under-non-selected",
  ]);
  let counterOne = 0;
  let counterTwo = 1;
  let counterThree = 2;
  let counterfour = 3;

  function toSelectFirst() {
    if (condition[0] !== "selected") {
      setCondition([
        "selected",
        "non-selected",
        "under-selected",
        "under-non-selected",
      ]);
      --counterOne;
      ++counterTwo;
      --counterThree;
      ++counterfour;
    }
  }
  function toSelectSecond() {
    if (condition[1] !== "selected") {
      setCondition([
        "non-selected",
        "selected",
        "under-non-selected",
        "under-selected",
      ]);

      ++counterOne;
      --counterTwo;
      ++counterThree;
      --counterfour;
    }
  }

  return (
    <Container>
      <button id={condition[counterOne]} onClick={toSelectFirst}>
        Entrada
      </button>
      <button id={condition[counterTwo]} onClick={toSelectSecond}>
        Saída
      </button>
      <button id={condition[counterThree]} className="under"></button>
      <button id={condition[counterfour]} className="under"></button>
    </Container>
  );
}

export default SelectContainer;
