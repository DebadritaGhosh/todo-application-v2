// Importing libraries
import React from 'react'
import Grid from '@mui/material/Grid';

function GridContainer({ children, ...props }) {
	return (
		<Grid {...props}>
			{children}
		</Grid>
	)
}

export default GridContainer;