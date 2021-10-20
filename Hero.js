import React from 'react'
import styled from 'styled-components'
import img from './img/mainshot.png'
import {AiOutlineArrowRight} from "react-icons/ai"


const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                <Title>
                Design, Preview and Track
                the API with the team
                </Title>
                <Sub1>
                Dapi helps streamline API integration for the dev team. OpenAPI, sequence diagram,
                </Sub1>
                <Sub2>API document site and mock server. It aims for faster integration and better tracking.</Sub2>
                <ButtonWrapper>
                    <Button> Try FREE Now <span><AiOutlineArrowRight/></span> </Button>    
                </ButtonWrapper>
                <Image src={img} />
                </Content>
                
            </Wrapper>
        </Container>
    )
}

export default Hero



const Image = styled.img`
width: 850px;
height: 500px;
box-shadow: 0 0 50px #8C75CC;
object-fit: cover;
border-radius: 10px;
margin-bottom: 50px;
`;


const Button = styled.button`
width: 250px;
height: 50px;
postion: absolute;
border: 0;
border-radius: 5px;
background: #070708;
color: #fff;
font-weight: bold;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;


:hover {
    cursor: pointer;
    box-shadow: 0 0 30px #8C75CC;s
}
`;

const ButtonWrapper = styled.div`
  width: 250px;
  padding: 0.08rem;
  position: relative;
  background: linear-gradient(to right, #8C75CC, #E074BD);
  border-radius: 5px;
  box-shadow: 0 0 10px #8C75CC;
  margin-bottom: 90px; 
`;

const Sub1 = styled.div`
width: 780px;
text-align: center;
font-size: 20px;
margin-left: 40px;
color: #8792A2;
`;

const Sub2 = styled.div`
width: 780px;
text-align: center;
font-size: 20px;
margin-bottom: 70px;
color: #8792A2;
`;

const Title = styled.div`
width: 800px;
text-align: center;
font-size: 55px;
font-weight: bold;
margin-bottom: 20px;
font-family: sfrounded;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-top: 200px;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: black;
color: white;
`;