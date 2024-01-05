// Importing libraries
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Paper, Avatar, Checkbox, Typography, CssBaseline, FormControlLabel } from '@mui/material';
import { loginUser } from '../../redux/userSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from 'react-redux';

// Importing components
import Layout from '../../components/Layout/Layout';
import TextInput from '../../components/TextInput/TextInput';
import Copyright from '../../components/Copyright/Copyright';
import CustomButton from '../../components/Button/CustomButton';
import GridContainer from '../../components/GridContainer/GridContainer';

// Importing utils
import { signInSchema } from '../../utils/validation';


const LoginPage = () => {
  const { status, error, user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = async(data) => {
    const response = await dispatch((loginUser({ ...data })));
    console.log("RESPONSE !!!!!!!!!!!!!!!!!!!!> ",response );
    // if(response.payload.status = "ok"){
    //   navigate("/");
    // }
  }


  return (
    <Layout>
      <GridContainer container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <GridContainer
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <GridContainer item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>

              {/* Email */}
              <TextInput
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputHandler={register("email")}
                error={errors?.email?.message}
              />

              {/* Password */}
              <TextInput
                autoFocus={false}
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputHandler={register("password")}
                error={errors?.email?.password}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              {/* Button */}
              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </CustomButton>

              <GridContainer container>
                <GridContainer item xs sx={{ marginRight: '10px' }}>
                  <MuiLink
                    component={RouterLink}
                    to="/register"
                    color="primary"
                    underline="hover"
                  >
                    Forgot password?
                  </MuiLink>
                </GridContainer>
                <GridContainer item>
                  <MuiLink
                    component={RouterLink}
                    to="/register"
                    color="primary"
                    underline="hover"
                  >
                    {"Don't have an account? Sign Up"}
                  </MuiLink>
                </GridContainer>
              </GridContainer>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </GridContainer>
      </GridContainer>
    </Layout>
  );
}

export default LoginPage;