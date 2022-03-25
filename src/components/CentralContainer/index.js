import React from "react";

import { Container } from "./styles";

function CentralContainer({ children }) {
  return (
    <Container>
      <p>Número da placa:</p>
      {children}
    </Container>
  );
}

export default CentralContainer;
