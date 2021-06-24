import React from "react";
import { SafeEnviromentConteiner } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentConteiner>
      <Container>
        Ambiente Seguro <i className={'twf-lock'} />
      </Container>
    </SafeEnviromentConteiner>
  );
};

export default SafeEnviroment;
