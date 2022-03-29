import React from "react";
import LoadImage from "../../assets/loading.png";
import FinishImage from "../../assets/round-done-button.png";
import ErrorSymbol from "../../assets/error-alert.png";

import {
  Container,
  ImageLoading,
  Paragraph,
  ImageFinish,
  ContainerError,
  ErrorImage,
  P,
} from "./styles";

function CentralContainer({ children }, ...props) {
  let paragraph = "Número da placa:";
  let infoVisibility = children[1].props.visible;
  let error = children[1].props.error;
  let finishRegister = children[1].props.finishRegister;
  let asd = props.selected
  console.log(asd)
  if (infoVisibility === true) {
    paragraph = "Registrando...";
  }
  if (finishRegister === true) {
    paragraph = "REGISTRADO!";
  }
  return (
    <Container>
      <ImageFinish
        finishRegister={finishRegister}
        error={error}
        src={FinishImage}
      />
      <ImageLoading
        finishRegister={finishRegister}
        error={error}
        visible={infoVisibility}
        src={LoadImage}
        alt="Imagem de carregamento"
      />
      <Paragraph visible={infoVisibility}>{paragraph}</Paragraph>
      {children[0]}{" "}
      <ContainerError error={error}>
        <ErrorImage src={ErrorSymbol} /><P>Verifique a placa e tente novamente!</P>
      </ContainerError>{" "}
      {children[1]}
    </Container>
  );
}

export default CentralContainer;
