import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import styled from 'styled-components'

const ProfilePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const FooterContainer = styled.div`
    width: 100vw;
    height: 7vh;
`
const H1 = styled.h1`
    width: 100vw;
    height: 86.3vh;
`

export default function ProfilePage() {

    return (

        <ProfilePageContainer>
            <H1>ProfilePage incompleta</H1>
            <FooterContainer>
                <FooterMenu />
            </FooterContainer>
        </ProfilePageContainer>
    )
}