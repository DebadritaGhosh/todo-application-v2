// Importing libraries
import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<Button {...otherProps}>
			{children}
		</Button>
	);
};

export default CustomButton;
