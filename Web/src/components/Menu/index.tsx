import Logo from "../../assets/images/logo.svg";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ContainerMenu, ContaiverNav } from "./Menu.style";
import {
  MdExitToApp,
  MdGroups,
  MdManageAccounts,
  MdOutlineTrendingDown,
  MdOutlineTrendingUp,
  MdSpaceDashboard,
} from "react-icons/md";

export const Menu = () => {
  return (
    <ContainerMenu>
      <img className='logo' src={Logo} alt='' />
      <ContaiverNav>
        <NavLink to='/dashboard'>
          <Button variant='text' startIcon={<MdSpaceDashboard />}>
            Dashboard
          </Button>
        </NavLink>
        <NavLink to='/receitas'>
          <Button variant='text' startIcon={<MdOutlineTrendingUp />}>
            Receitas
          </Button>
        </NavLink>
        <NavLink to='/despesas'>
          <Button variant='text' startIcon={<MdOutlineTrendingDown />}>
            Despesas
          </Button>
        </NavLink>
        <NavLink to='/despesas-compartilhadas'>
          <Button variant='text' startIcon={<MdGroups />}>
            Despesas compartilhadas
          </Button>
        </NavLink>
        <NavLink to='/perfil'>
          <Button variant='text' startIcon={<MdManageAccounts />}>
            Meu perfil
          </Button>
        </NavLink>
        <NavLink to='/'>
          <Button variant='text' startIcon={<MdExitToApp />}>
            Sair
          </Button>
        </NavLink>
      </ContaiverNav>
    </ContainerMenu>
  );
};
