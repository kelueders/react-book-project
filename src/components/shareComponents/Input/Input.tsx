import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'; 

// this will allow material-UI designs to still be useful, but will have more control
// over the props we need as well as where we can place our newly minted input

interface InputType {
    name: string;
    placeholder: string
}

export const Input = forwardRef((props: InputType, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef= {ref}
            fullWidth
            label={props.placeholder}
            type='text'
            {...props}>
        </TextField>
    )
})

export const InputPassword = forwardRef((props: InputType, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef = {ref}
            fullWidth
            label={props.placeholder}
            type='password'
            {...props}>
        </TextField>
    )
})