import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchToCurl from "fetch-to-curl";
import api from "../../services/api";
import TopContainer from "../../components/TopContainer";
import CentralContainer from "../../components/CentralContainer";
import Button from "../../components/Button";
import TextBox from "../../components/Input";
import SelectContainer from "../../components/SelectContainer";

function App() {
  const [getLicense, setGetLicense] = useState([]);
  const ref = React.createRef();

  // A função abaixo é responsável por verificar se a placa é válida para rodar nesta aplicação.
  function plateVerifier(license) {
    if (license.length < 7) {
      alert("Por favor, insira o valor completo da placa!");
      return false;
    } else {
      return true;
    }
  }

  function addNewLicense() {
    let license = ref.current.value; //Essa linha armazena o valor digitado pelo cliente, após apertar o botão.

    let check = plateVerifier(license); //Essa linha rodará a função responsável por verificar se todos os caracteres da placa foram digitados.

    function toFormatThePlate() {
      let formatedLicense =
        license[0] +
        license[1] +
        license[2] +
        "-" +
        license[3] +
        license[4] +
        license[5] +
        license[6];
      console.log(formatedLicense);

      const formatedPlate = '"' + formatedLicense + '"';

      return {
        plate: formatedPlate,
      };
    }

    let requestPlate = toFormatThePlate();
    async function newLicense() {
      const reservation = await axios
        .post("https://parking-lot-to-pfz.herokuapp.com/parking", requestPlate)
        .then((response) => {
          console.log(
            response.data
          ); /* Esta linha será responsável por retornar a resposta da API. O padrão de resposta é :
          entered_at: "ano-mês-diaThora:minuto:segundo.milésimo+horaDoFusoHorário:MinutosdoFusoHorário"
          plate: "\"trêsPrimeirosDigitosDaPlaca-quatroÚltimosDigitosDaPlaca\""
          reservation: "númeroDaReserva" */
        })
        .catch((error) => {
          console.log(error);
        });
    }

    newLicense();
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
