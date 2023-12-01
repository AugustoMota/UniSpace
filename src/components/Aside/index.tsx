import React from 'react';

import logoImg from '../../assets/logo.svg';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExplicit
} from 'react-icons/md';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
 } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
          <Header>
            <LogImg src={logoImg} alt="Logo UniSpace"/>

            <Title>UniSpace</Title>
          </Header>
          
          <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">

                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                <MdArrowUpward/>
                    Saidas
                </MenuItemLink>

                <MenuItemLink href="#">
                    < MdExplicit/>
                    Sair
                </MenuItemLink>
          </MenuContainer>
        </Container>
    );
}

export default Aside;