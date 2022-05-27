import { Cabecalho } from "../../components/Cabecalho";
import { Menu } from "../../components/Menu";
import { Container, ContainerConteudo } from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <Container>
      <Menu />
      <ContainerConteudo>
        <Cabecalho title='Dashboard' name='OR' />
      </ContainerConteudo>
    </Container>
  );
};
