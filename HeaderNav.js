import React from 'react'
import Styled from 'styled-components'
import img from './img/favicon.png'

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <LogoHolder>
                    <Image src={img} />
                    <Name>Dapi</Name>
                </LogoHolder>
                <Navigation>                    
                    <Nav> Changelog </Nav>
                    <Nav> Pricing </Nav>
                    <Nav> Contact </Nav>  
                </Navigation>
                <ButtonHolder>                       
                    <Nav clr> Login </Nav>
                    <Button> Sign Up </Button>   
                </ButtonHolder>              
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Button = Styled.button`
margin: 0 10px;
background: #568EF2;
color: #fff;
text-align: center;
border: 0;
outline: none;
padding: 5px 20px;
font-weight: bold;
border-radius: 5px;
transition: all 350ms;

:hover {
    cursor: pointer;
    background: #426cb6;
}
`;

const Nav = Styled.div`
margin: 0 20px;
color: ${({clr}) =>(
    clr ? "#568EF2":"#fff"
)};
font-weight: 600;
transition: all 350ms;

:hover {
    cursor: pointer;
    color: ${({clr}) =>(
        clr ? "#345590":"#fff"
    )};
}
`;

const ButtonHolder = Styled.div`
display: flex;
margin-right: 160px;
`;

const Container = Styled.div`
width: 100%;
height: 80px;
background-color: black;
color: white;
position: fixed;
background: rgba( 255, 255, 255, 0 );

backdrop-filter: blur( 7px );
-webkit-backdrop-filter: blur( 7px );


`;
const Wrapper = Styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
`;
const LogoHolder = Styled.div`
display: flex;
align-items: center;
margin-left: 167px;

`;
const Image = Styled.img``;
const Name = Styled.div`
font-weight: bold;
margin: 0 10px;
`;

const Navigation = Styled.div`
display: flex;
align-items: center;
margin-left: 6px;
flex: 1;
font-family: Simsun;
`;



