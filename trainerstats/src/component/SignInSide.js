import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://michaelsault.ca/">
        Michael Sault
      </Link>
      {' 2023.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [returnedData, setReturnedData] = useState({TrainerID: 0, TrainerName: '', Email: '', Firstname: '', Lastname: '', Password: ''});
  const [trainer, setTrainer] = useState({Email: '', Password: ''})

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(returnedData);
    console.log({
      Email: data.get('Email'),
      Password: data.get('Password'),
    });
  };

  const fetchTrainerData = async () => {
    
    const newData = await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Email: trainer.Email
      })
    })
    .then(res => res.json());
    console.log("CALLED API2");
    console.log(newData);
    setReturnedData(newData)
  }


  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'TrainerID'){
      setTrainer(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setTrainer(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?pokemon)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'firebrick', fontSize: 'large' }}>
              <CatchingPokemonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="Email"
                autoComplete="email"
                onChange={setInput}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={setInput}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => fetchTrainerData()}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            <p>Welcome Trainer: {returnedData.TrainerID}</p>
            <p>Trainer Name: {returnedData.TrainerName} </p>
            <p>Name: {returnedData.Firstname} {returnedData.Lastname}</p>
            <p>Email: {returnedData.Email}</p>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
