import React from 'react';
import { useNavigate  } from 'react-router-dom';
import styled, { css } from "styled-components"
import logo from '../assets/LogoMain.png'
import Button from '../componentes/Button'
import { blue } from '@mui/material/colors';



const HeaderContainer = styled.div`
    background-color: #262626;
    font-size: 32px;
    color: white;
    height: 125px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    min-width:320px;
    border-bottom: 2px solid #2A7AE4;
    
    
`
const Logo = styled.img`
    max-height:40%;
    margin-left:2%;

    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      margin: 0 auto;
      
   ` }  
`

const Header = () => {
  const navigate = useNavigate();
  const volverMain = () =>{

   
navigate('/');

}

  function handleClick() {
    console.log("nada")
    navigate('/formulariovideos');
  }


  return (
    <HeaderContainer>
      <Logo src={logo} onClick={volverMain} alt="Aluraflix Logo" />
    
      <Button onClick={volverMain} bordercolor='#2271D1' > HOME </Button>
      <Button onClick={handleClick} > NUEVO VIDEO </Button>

    </HeaderContainer>
  )
}

export default Header