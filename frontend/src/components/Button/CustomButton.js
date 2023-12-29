import React from 'react'
import Button from '@mui/material/Button';

function CustomButton({ children, type, fullWidth, variant, sx }) {
	return (
		<Button
			type={type}
			fullWidth={fullWidth}
			variant={variant}
			sx={sx}
		>
			{children}
		</Button>
	)
}

export default CustomButton;