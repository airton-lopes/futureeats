import styled from 'styled-components'


export const CardInfo = styled.div`
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    padding-bottom: 8px;
    margin: 4px;
`
export const Image = styled.div`
    border-radius: 8px 8px 0px 0px;
    background-image: url(${props => props.bg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 7.5rem;
`
export const Restaurante = styled.p`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #5cb646;
    margin: 16px;
`
export const TempoDeEntrega = styled.span`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-left: 16px;
`
export const TaxaDeEntrega = styled.span`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-left: 136px;
`