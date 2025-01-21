import { border, borderRadius, fontSize, padding } from '@mui/system';
import React from 'react'
import styled , {css}from "styled-components"

const Button = styled.button`
display: inline-block;
color: ${props => props.inputColor };
background-color: ${props => props.backgroundColor || "transparent"};
width: ${props => props.btnwidth || 'none'};
height: ${props => props.height || '54px'};

font-size:${props=> props.fontSize};
font-family: 'Roboto', sans-serif;

margin-right: ${props => props.marginR  || '30px'};
margin-left: ${props=>props.ml || '0'};
border: 3px solid ${props =>props.bordercolor};
border-radius: 10px;
display: block;



${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display:${props=> props.display};
      
   ` }
`;

export default Button;
