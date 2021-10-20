import React from 'react'
import styled from 'styled-components'
import img from './img/preview.png'
import img2 from './img/track.png'
import {AiOutlineArrowRight} from "react-icons/ai"



const CompTwo = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>Preview</Title>
                    <Sub>Deploy a password-protected API doc site and mock API server whenever you want.</Sub>
                    <Sub2>Let others in the team to do the integration and review before the API is ready.
                    </Sub2>
                    <Image src={img}/>
                    <Vertical></Vertical>
                    <Title2>Track</Title2>
                    <Sub3>Follow the updates and always keeping everybody aligned on the latest API.</Sub3>
                    <Sub4>Review the API designing before the performance issue happens.</Sub4>
                    <Image2 src={img2} />
                    <Title3>Ready to work on your API?</Title3>
                    <Sub5>Dapi keeps everyone in the dev team aligned. Backend, Frontend</Sub5>
                    <Sub6>and PM, collaborative working in one platform.</Sub6>
                    <Button>Try FREE Now <span><AiOutlineArrowRight/></span> </Button>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default CompTwo



const Button = styled.button`
font-weight: bold;
background-color: #568ef2;
color: white;
width: 200px;
height: 40px;
postion: absolute;
border: 0;
border-radius: 5px;
margin-bottom: 200px;

:hover {
    cursor: pointer;
    background: #426cb6;
}
`;


const Sub6 = styled.div`
font-size: 16px;
color: #8792A2;
margin-bottom: 35px;
text-align: center;
font-family: Simsun;
`;

const Sub5 = styled.div`
font-size: 16px;
color: #8792A2;
font-family: Simsun;
`;

const Title3 = styled.div`
width: 700px;
font-size: 45px;
font-weight: bold;
margin-bottom: 20px;
text-align: center;
`;


const Sub4 = styled.div`
font-size: 16px;
margin-bottom: 80px;
color: #8792A2;
font-family: Simsun;
`;

const Sub3 = styled.div`
font-size: 16px;
color: #8792A2;
font-family: Simsun;
`;

const Vertical = styled.div`
    border-left: 1px solid gray;
    height: 100px;
    left: 50%;
    margin-left: -3px;
    margin-bottom: 50px;
`;

const Image = styled.img`
width: 720px;
height: 280px;
object-fit: contain;
margin-bottom: 220px;
`;

const Image2 = styled.img`
width: 550px;
height: 350px;
object-fit: contain;
margin-bottom: 220px;
`;

const Sub2 = styled.div`
font-family: Simsun;
font-size: 16px;
text-align: center;
margin-bottom: 50px;
color: #8792A2;
`;

const Sub = styled.div`
font-family: Simsun;
font-size: 16px;
text-align: center;
color: #8792A2;
`;

const Title2 = styled.div`
font-size: 50px;
font-weight: bold;
margin-bottom: 20px;
background: -webkit-linear-gradient(45deg, #FF8E27, #FF6B45);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
`;

const Title = styled.div`
font-size: 50px;
font-weight: bold;
margin-bottom: 20px;
background: -webkit-linear-gradient(45deg, #62C2BC, #7489E6);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
background-color: black;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;