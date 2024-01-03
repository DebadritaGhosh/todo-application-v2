// Importing libraries
import React from 'react';
import { Typography } from '@mui/material';

// Importing components
import Input from '../Input/Input';
import GridContainer from '../GridContainer/GridContainer';

function TextInput({ xs = 12, sm = 12, required = true, fullWidth = true, autoFocus = true, error, ...otherProps }) {
	return (
		<GridContainer item xs={xs} sm={sm}>
			<Input
				required={required}
				fullWidth={fullWidth}
				autoFocus={autoFocus}
				{...otherProps}
			/>
			{
				error && <Typography variant="body1" color="error" align="left" sx={{ fontSize: '12px' }}>
					{error}
				</Typography>
			}

		</GridContainer>
	);
}

export default TextInput;
