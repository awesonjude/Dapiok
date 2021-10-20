import React from 'react'
import styled from 'styled-components'
import img from './img/design-section.png'

const CompOne = () => {
    return(
        <Container>
            <Wrapper>
                <Content>
                    <Vertical></Vertical>
                    <Title>Design</Title>
                    <Sub>More than just editing an openAPI doc, you can define the model relationship,

draw sequence diagram to understand better the logic behind each API.
                    </Sub>
                    <Image src={img} />
                    <Vertical2></Vertical2>
                </Content>
            </Wrapper>
        </Container>
    )
}
export default CompOne

const Vertical2 = styled.div`
border-left: 1px solid gray;
height: 100px;
left: 50%;
margin-left: -3px;
margin-bottom: 50px;
`;

const Image = styled.img`
width: 650px;
height: 500px;
object-fit: contain;
border-radius: 10px;
margin-bottom: 30px;
`

const Sub = styled.div`
width: 800px;
text-align: center;
font-size: 17px;
color: #8792A2;
margin-bottom: 50px;
`

const Title = styled.div`
margin-bottom: 20px;
font-size: 60px;
text-align: center;
font-weight: bold;
background: -webkit-linear-gradient(45deg, #8C75CC, #E074BD);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
`

const Vertical = styled.div`
    border-left: 1px solid gray;
    height: 100px;
    left: 50%;
    margin-left: -3px;
    margin-bottom: 50px;

`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 150px;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: black;
`