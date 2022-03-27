import React, { useEffect, useState } from "react";
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

  function licenseVerifying(license) {
    if (license.length < 7) {
      alert("Por favor, insira o valor completo da placa!");
      return false;
    } else {
      console.log("Placa verificada.");
      return true;
    }
  }

  function addNewLicense() {
    let license = ref.current.value;
    console.log(license);
    let check = licenseVerifying(license);
    let araylicense = [
      license[0],
      license[1],
      license[2],
      license[3],
      license[4],
      license[5],
      license[6],
    ];
    console.log(araylicense);
    let newArayLicense =
      araylicense[0] +
      araylicense[1] +
      araylicense[2] +
      "-" +
      araylicense[3] +
      araylicense[4] +
      araylicense[5] +
      araylicense[6];
    console.log(newArayLicense);

    const url = "https://parking-lot-to-pfz.herokuapp.com/parking";
    const options = {
      method: "Post",
      data: {
        plate: `${newArayLicense}`,
      },
      headers: { "content-type": "application/json" },
      url: url,
    };

    
    // O código abaixo envia registro de entrada realacionada a placa.
    fetch(options)

    let urlhistory = url + `/${newArayLicense}`;
    
    /* "curl https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444" */
    
    //O código abaixo solicita o histórico relacionado a placa.
    fetch(urlhistory);

    /* useEffect(() => {
      api.post("https://parking-lot-to-pfz.herokuapp.com/parking",{
              plate: license,
   })
        .then((response) => setGetLicense(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []); */
    /* 
    if (check === true) {
      async function newLicense() {
        const response = await api
          .post("https://parking-lot-to-pfz.herokuapp.com/parking", {
           'method': "POST",
           'data': {plate: `${license}`},
           'content-type': "application/json",
           'url':"https://parking-lot-to-pfz.herokuapp.com/parking",
          })
          .then((response) => setGetLicense(response.data))
          .catch((err) => {
            console.log(err);
          });
      }
      newLicense();
    }*/
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
