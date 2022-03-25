import React from "react";
import TopContainer from "../../components/TopContainer";
import CentralContainer from "../../components/CentralContainer";
import Button from "../../components/Button";
import TextBox from "../../components/Input";
import SelectButton from "../../components/Selectors";
import SelectContainer from "../../components/SelectContainer";

function App() {
  return (
    <div className="App">
      <TopContainer></TopContainer>
      <div>
        <div>
          {/* <SelectButton>
            <p>Entrada</p>
          </SelectButton>
          <SelectButton>
            <p>Saída</p>
          </SelectButton> */}
        </div>
        <SelectContainer></SelectContainer>
        <CentralContainer>
          <TextBox type="text"> </TextBox>
          <Button>
            <p>CONFIRMAR ENTRADA</p>
          </Button>
        </CentralContainer>
      </div>
    </div>
  );
}

export default App;
