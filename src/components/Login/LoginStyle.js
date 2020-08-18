import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
        display: 'flex',
        flexFlow: 'column wrap',

        '& .MuiTextField-root': {
            marginBottom: '16px',
        },
    },

});

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 50vh;
    padding: 0 16px;
    flex-flow: column wrap;
`;

export const TextContainer = styled.div`
            align-self: center;
            margin:  0 0 20px 0;
 `

export const BottomTextContainer = styled.div`
            align-self: center;
            margin: 16px 0;
 `
