import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://michaelsault.ca/">
        Michael Sault
      </Link>{' '}
      {' 2023.'}
    </Typography>
  );
}

const theme = createTheme();

export default function TrainerStats() {
  const [returnedData, setReturnedData] = useState(
    {
        EntryID: 0, 
        TrainerID: 0,
        Date: new Date('2016-07-10'),
        Caught: 0,
        Seen: 0,
        DistanceWalked: 0,
        PokemonCaught: 0,
        PokestopsVisited: 0,
        TrainerLevel: 0,
        TotalXP: 0,
    });

  const [trainerStats, setTrainerStats] = useState(
    {
        Caught: 0,
        Seen: 0,
        DistanceWalked: 0,
        PokemonCaught: 0,
        PokestopsVisited: 0,
        TrainerLevel: 0,
        TotalXP: 0,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      trainerName: data.get('trainerName'),
      email: data.get('email'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'), 
      password: data.get('password'),
    });
  };

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name !== 'Date'){
        setTrainerStats(prevState => ({
            ...prevState,
            [name]: parseInt(value)
        }));
        return;
    }
    setTrainerStats(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const createTrainerStatEntry = async () => {
    const newData = await fetch('http://localhost:5000/trainerStatInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...trainerStats
        })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'firebrick' }}>
            <CatchingPokemonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Trainer Stats
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 400 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  id="Caught"
                  label="Caught"
                  name="Caught"
                  autoComplete="Caught"
                  onChange={setInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  id="Seen"
                  label="Seen"
                  name="Seen"
                  autoComplete="seen"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="DistanceWalked"
                  label="Distance Walked"
                  name="DistanceWalked"
                  autoComplete="distanceWalked"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="PokemonCaught"
                  label="Pokémon Caught"
                  name="PokemonCaught"
                  autoComplete="pokemonCaught"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="PokestopsVisited"
                  label="Pokéstops Visited"
                  name="PokestopsVisited"
                  autoComplete="pokestopsVisited"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <TextField
                  fullWidth
                  id="TrainerLevel"
                  label="Level"
                  name="TrainerLevel"
                  autoComplete="trainerLevel"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={9} sm={9}>
                <TextField
                  fullWidth
                  id="TotalXp"
                  label="Total XP"
                  name="TotalXP"
                  autoComplete="xp"
                  onChange={setInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => createTrainerStatEntry()}
            >
              Record Stats
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}