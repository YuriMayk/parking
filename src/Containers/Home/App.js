import React from "react";
import axios from "axios";
import TopContainer from "../../components/TopContainer";
import CentralContainer from "../../components/CentralContainer";
import Button from "../../components/Button";
import TextBox from "../../components/Input";
import SelectContainer from "../../components/SelectContainer";

function App() {
  //const [getLicense,setGetLicense] = useState([]);
  const ref = React.createRef();

  function licenseVerifying(license) {
    if (license.length < 7) {
      alert("Por favor, insira o valor completo da placa!");
      return false
    } else {
      console.log("Placa verificada.");
      return true
    }
  }

  function addNewLicense() {
    let license = ref.current.value;
    console.log(license);
    let check = licenseVerifying(license);
    if (check === true) {
      async function newLicense() {
        const response = await axios.post(
          "https://parking-lot-to-pfz.herokuapp.com/parking",
          {
            plate: license,
          }
        );
        console.log(response);
      }
      newLicense();
    }
  }

  return (
    <div className="App">
      <TopContainer></TopContainer>
      <div>
        <SelectContainer></SelectContainer>
        <CentralContainer>
          <TextBox ref={ref} type="text"></TextBox>
          <Button onClick={addNewLicense}>
            <p>CONFIRMAR ENTRADA</p>
          </Button>
        </CentralContainer>
      </div>
    </div>
  );
}

export default App;
