// Importing libraries
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Avatar, Container, Typography, CssBaseline, Link as MuiLink } from '@mui/material';

// Importing components
import Layout from '../../components/Layout/Layout';
import Copyright from '../../components/Copyright/Copyright';
import CustomButton from '../../components/Button/CustomButton';
import GridContainer from '../../components/GridContainer/GridContainer';
import TextInput from '../../components/TextInput/TextInput';

// const defaultTheme = createTheme();

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log("values", watch());
	console.log("errors", errors);


	return (
		<Layout>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
						<GridContainer container spacing={2}>

							{/* FirstName */}
							<TextInput
								xs={12}
								sm={6}
								id="firstName"
								name="firstName"
								label="First Name"
								autoComplete="given-name"
								InputHandler={register("firstName", { required: true })}
							/>

							{/* LastName */}
							<TextInput
								xs={12}
								sm={6}
								id="lastName"
								name="lastName"
								label="Last Name"
								autoFocus={false}
								autoComplete="family-name"
								InputHandler={register("lastName", { required: true })}
							/>

							{/* Email */}
							<TextInput
								id="email"
								name="email"
								label="Email Address"
								autoFocus={false}
								autoComplete="email"
								InputHandler={register("email", { required: true })}
							/>

							{/* Password */}
							<TextInput
								id="password"
								name="password"
								label="Password"
								type="password"
								autoFocus={false}
								autoComplete="new-password"
								InputHandler={register("password", { required: true })}
							/>

						</GridContainer>

						{/* Button component */}
						<CustomButton
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</CustomButton>

						<GridContainer container justifyContent="center">
							<MuiLink
								component={RouterLink}
								to="/login"
								color="primary"
								underline="hover"
							>
								Already have an account? Sign in
							</MuiLink>
						</GridContainer>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</Layout>
	);
}


export default RegisterPage;