import { Button, ContainerHeader } from "./Header.style";

import Logo from "../../../../assets/images/logo.svg";

export default function Header() {
  return (
    <ContainerHeader>
      <img className='logo' src={Logo} alt='' />
      <Button variant='contained'>Acessar conta</Button>
    </ContainerHeader>
  );
}
