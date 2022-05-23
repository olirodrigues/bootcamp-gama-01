import { Button, ContainerHeader } from "./Header.style";

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ContainerHeader>
      <img className='logo' src={Logo} alt='' />
      <Link to='/login'>
        <Button variant='contained'>Acessar conta</Button>
      </Link>
    </ContainerHeader>
  );
}
