import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          exact
          to="/"
          activeClassName="current"
          activeStyle={{
            borderBottom: '2px solid #A88D2D',
            paddingBottom: '10px',
          }}
        >
          Listagem
        </NavLink>
        <NavLink
          exact
          to="/import"
          activeClassName="current"
          activeStyle={{
            borderBottom: '2px solid #A88D2D',
            paddingBottom: '10px',
          }}
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
