import React from 'react';
import styled from 'styled-components';
import ButtonMui from '@material-ui/core/Button';

const MuiButton = styled(ButtonMui)`
&& {
  margin: 10px;
  }
`

const Button = (props) => {
    return <MuiButton variant="contained" color={props.color} >{props.name}</MuiButton>
}


export default Button;