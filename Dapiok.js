import React from 'react'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'
import Hero from './Hero'
import CompOne from './CompOne'
import CompTwo from './CompTwo'
import FooterNav from './FooterNav'



const Dapiok = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderNav />
                <Hero />
                <CompOne />
                <CompTwo />
                <FooterNav />
            </Wrapper>
        </Container>
    )
}

export default Dapiok

const Wrapper = styled.div``

const Container = styled.div``