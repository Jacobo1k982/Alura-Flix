import React from 'react'
import styled, { css } from "styled-components"
import slider1 from "../assets/Slider/slider1.png"
import BannerText from './BannerText';
import bannerCard from '../assets/thumbnails/bannerCard.png';
import Button from '../componentes/Button'

import { colorGreyLight, colorBlackDark } from '../ui/colores';


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  
  /* border-top: 2px solid #2A7AE4; */
  min-width:320px;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }

    
`;


const BannerImage = styled.div`
    position: relative;
    background-image: url(${slider1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 832px;
    
    
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }

    
`


const Overlay = styled.div`
  content: "normal";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.3); 
  z-index:10;
  

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }


`;

const Titulo = styled.div`
   background-color: #6BD1FF;
   color: #F5F5F5;
   height: 60px; 
   width: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: Roboto;
   border-radius: 15px;
   font-size: 48px;
   ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: 'none';
      
   ` }




`;
const SubTitulo = styled.div`
  font-family: Roboto;
  color: #F5F5F5;
  font-size: 2.5rem;
  margin-top:1.5rem;
 
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
   
      font-size: 2.5rem;
      min-width:320px;
      font-weight:203;
      margin-left:8%;      
   ` }
`;

const TextoBanner = styled.div`
    color: #F5F5F5;
    margin-top: 1rem;
    font-family: Roboto;
    font-weight: light;
    font-size: 1.2rem;
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: none;
   
   ` }
`

const BannerContent = styled.div`
position: absolute;
height: 333px;
top: 343px;
width: 96%;
left: 2%;
z-index:1000;
display: flex;
justify-content: space-between;


${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      top:60%;
      left: 0%;
      position:relative;
      margin:0 auto;
      max-width:320px;    
   ` }
`;

const BannerTexContent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:45%;
    height:20vh;
    justify-content:space-between;
    

    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 20vh;
      min-width:320px;
 ` }
`;

const BannerCard = styled.img`
  width: 800px;
  height: 415px;
  left: '756.09px';
  border: 5px solid  #6BD1FF;
  border-radius: 15px;
  position: relative;
  top: -30px;
 

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: none;  
   ` }
`;


const BotonVer = styled(Button)`

align-self:center;
      
${props => css`
    @media (min-width: ${props.theme.breakpoints.laptop}) {
      display: none;   
   ` }
`



const Banner = () => {
  return (
    <Container>

      <BannerImage>
        <BannerContent>
          <BannerTexContent>
            <Titulo>FRONT END</Titulo>
            <SubTitulo>
              Challenge React
            </SubTitulo>
            <BotonVer inputColor={colorBlackDark} bordercolor={colorGreyLight} backgroundColor={colorGreyLight} fontSize="1.5em" btnwidth="9rem" height="3rem"  >Ver</BotonVer>


            <TextoBanner>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </TextoBanner>


          </BannerTexContent>
          <BannerCard src={bannerCard} alt="Aluraflix Logo" />
        </BannerContent>

      </BannerImage>




      <Overlay />


    </Container>
  )
}

export default Banner


