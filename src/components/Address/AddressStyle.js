import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiTextField-root': {
        marginBottom: '16px',
        },
    },
    text:{
        alignSelf: 'center',
        margin: ' 28px 0px 20px 0px',
    }

});

export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: fit-content;
    align-self: center;
    width: 90vw;
`
export const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
    height: fit-content;
    justify-content: space-around;
`;