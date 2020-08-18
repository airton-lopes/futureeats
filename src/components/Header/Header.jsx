import React from 'react';

import {useStyles, } from './HeaderStyle'
import { useHistory } from 'react-router-dom';


import {IconButton, Paper, } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default props =>{
    const classes = useStyles();
    const history = useHistory();
    const {path} = props;

    return (
        <Paper 
            elevation={1}
            className={classes.root}    
        >
            <IconButton onClick={ ()=> history.push(path)}>
                <ChevronLeftIcon />
            </IconButton>
        </Paper>
    );
}