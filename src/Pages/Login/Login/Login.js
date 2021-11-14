import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation()

    const handleLoginData = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ mt: 8 }}>
                        login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"

                            variant="standard"
                            onBlur={handleLoginData}
                            sx={{ m: 1, width: "75%" }}
                        />
                        <TextField
                            id="standard"
                            label="Your Password"
                            name="password"
                            variant="standard"
                            type="password"
                            onBlur={handleLoginData}

                            sx={{ m: 1, width: "75%" }}
                        />

                        <Button sx={{ m: 1, width: "75%" }} variant="contained" type="submit">Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/registration"><Button variant="text">New User? please Register</Button></NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">logged in successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>

                    <p>---------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Login with Google</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%", height: "100%" }} src="https://w0.peakpx.com/wallpaper/761/707/HD-wallpaper-cameras-retro-lens-vintage-technology.jpg" alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;