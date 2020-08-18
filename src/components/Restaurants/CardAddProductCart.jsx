import React, {useState} from 'react'

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { StyledButton, Frase } from './CardAddProductCartStyle'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const tema = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main:"#5cb646"
    }
  }
})

export default function CardAddProductCard(props) {

  const classes = useStyles();
  const [quantity, setQuantity] = useState("");
  const [open, setOpen] = useState(true)

  const handleChange = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <MuiThemeProvider theme={tema}>
      <Dialog
        open={open}
        onClose={props.onClickCloseAddCart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Frase>Selecione a quantidade desejada</Frase>
        </DialogTitle>
        <DialogContent>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">0</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={quantity}
                    onChange={handleChange}
                    label="quantity"
                >
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <StyledButton color="secondary" onClick={() => props.onClickCloseAddCart(quantity)}>
            ADICIONAR AO CARRINHO
          </StyledButton>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}