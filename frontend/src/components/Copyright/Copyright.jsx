// Importing libraries
import * as React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

const Copyright = (props) => {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<MuiLink
				color="inherit" href="https://github.com/DebadritaGhosh/todo-application-v2">
				stackexplorer
			</MuiLink>
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export default Copyright;