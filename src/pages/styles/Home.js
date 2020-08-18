import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 90vw;
    height: 100vh;
`
export const CardFoodContainer = styled.div`
    height: 68vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`
export const FoodTypeBarContainer = styled.div`
    height: 8vh;
    width: 90vw;
    display: flex;
    align-items: center;
    overflow: auto;
    margin-left: 32px;
`
export const ActiveFilter = styled.button`
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    color: #5cb646;
    margin: 4px;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
`
export const InativeFilter = styled.button`
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    margin: 4px;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
`
export const CardActiveOrderContainer = styled.div`
    position: fixed;
    bottom: 7vh;
`

export const Rectangle = styled.div`
    width: 90vw;
    height: 8vh;
    border-radius: 2px;
    border: solid 1px lightgrey;
    display: flex;
    align-items: center;
    margin: 8px 16px;
`
export const RastauranteInput = styled.input`
    outline: none;
    border: none;
`
export const SearchIcon = styled(SearchOutlinedIcon)`
    margin-left: 8px;
`