import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height: 6vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`

export default function HeaderTitle() {

    return (
        <HeaderContainer>
            <span>FutureEats</span>
        </HeaderContainer>
    )
}