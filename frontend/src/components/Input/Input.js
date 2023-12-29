import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function Input(props) {
	return (
		<Grid item xs={12}>
			<TextField
				{...props}
			/>
		</Grid>
	)
}

export default Input