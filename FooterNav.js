import React from 'react'
import styled from 'styled-components'
import img from './img/favicon.png'


const FooterNav = () => {
    return (
        <Container>
            <Wrapper>
                <Image src={img} />
                <Navigation>
                    <Nav>Github</Nav>
                    <Nav>Twitter</Nav>
                    <Nav>Changelog</Nav>
                    <Nav>Pricing</Nav>
                    <Nav>Contact</Nav>
                    <Nav>Private Policy</Nav>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default FooterNav


const Container = styled.div`
width: 100%;
height: 100%;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
// const LogoHolder = styled.div``;
const Image = styled.img`
margin-bottom: 20px;
`;
const Navigation = styled.div`
width: 700px;
display: flex;
justify-content: center;
color: #8792A2;
margin-bottom: 20px;
`;

const Nav = styled.div`
display: flex;
flex: 1;
font-size: 14px;
font-family: Simsun;

`;