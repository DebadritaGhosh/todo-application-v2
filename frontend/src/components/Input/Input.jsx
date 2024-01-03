// Importing libraries
import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function Input(props) {
	const { InputHandler, ...otherProps } = props;

	return (
			<TextField
				{...otherProps}
				{...InputHandler}
			/>
	)
}

export default Input