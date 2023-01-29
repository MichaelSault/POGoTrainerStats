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
import { Divider } from '@mui/material';


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

export default function StatHistory() {
  const [returnedData, setReturnedData] = useState({TrainerID: 0, TrainerName: '', Email: '', Firstname: '', Lastname: '', Password: ''});
  const [returnedStatHistory, setReturnedStatHistory] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});
  
  const [trainer, setTrainer] = useState({Email: '', Stat: ''})

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(returnedData);
    console.log({
      TrainerID: data.get('TrainerID'),
      Stat: data.get('Stat')
    });
  };

  const fetchAll = async () => {
    
    const newData = await fetch('http://localhost:5000/fetchAll', {
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
    console.log("CALLED Stat Fetch");
    console.log(newData);
    setReturnedData(newData);
    fetchStatHistory(newData.TrainerID);
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

  const fetchStatHistory = async (trainerID) => {
    const newData = await fetch('http://localhost:5000/fetchStatHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        TrainerID: trainerID
      })
    })
    .then(res => res.json());
    console.log("CALLED PROFILE");
    console.log(newData);
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
              Current Stats
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
                id="stat"
                label="Stat"
                name="Stat"
                autoComplete="stat"
                onChange={setInput}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => fetchAll()}
              >
                Look Up
              </Button>
              
              
            </Box>
            <h3><b>Welcome Trainer: {returnedData.TrainerID}</b></h3>
            <p>Trainer Name: {returnedData.TrainerName} </p>
            <p>Name: {returnedData.Firstname} {returnedData.Lastname}</p>
            <p>Email: {returnedData.Email}</p>
            <Divider variant="middle" />
            <h3>{trainer.Stat}</h3>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}