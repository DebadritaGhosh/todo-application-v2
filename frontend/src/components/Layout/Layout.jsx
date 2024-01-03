// Importing libraries
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function Layout({children}) {
  return (
	<ThemeProvider theme={defaultTheme}>
		{children}
	</ThemeProvider>
  )
}

export default Layout