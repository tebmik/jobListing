import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '100%',
        fontSize: "2rem"
      },
    },
  }));


const Input = ({ 
  type, 
  placeholder, 
  value, 
  handleChange, 
  focusRef, 
  keyDown 
}) => {

    const classes = useStyles();
    return (
        <>
            <TextField 
                classes={{root: classes.root}}
                autoComplete="off"
                id="standard-basic" 
                label={placeholder}
                onChange={handleChange} 
                type={type} 
                value={value} 
                inputRef={focusRef}
                autoFocus
                onKeyPress={keyDown}
            />
        </>
    );
};

export default Input;