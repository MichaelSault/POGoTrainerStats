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

export default function TypeStats() {
  const [returnedData, setReturnedData] = useState(
    {
        EntryID: 0, 
        TrainerID: 0,
        Date: new Date('2016-07-10'),
        Schoolkid: 0,
        BlackBelt: 0,
        BirdKeeper: 0,
        PunkGirl: 0,
        RuinManiac: 0,
        Hiker: 0,
        BugCatcher: 0,
        HexManiac: 0,
        RailStaff: 0,
        Kindler: 0,
        Swimmer: 0,
        Gardener: 0,
        Rocker: 0,
        Psychic: 0,
        Skier: 0,
        DragonTamer: 0,
        Delinquent: 0,
        FairyTailGirl: 0
    });

  const [typeStats, setTypeStats] = useState(
    {
        Schoolkid: 0,
        BlackBelt: 0,
        BirdKeeper: 0,
        PunkGirl: 0,
        RuinManiac: 0,
        Hiker: 0,
        BUgCatcher: 0,
        HexManiac: 0,
        RailStaff: 0,
        Kindler: 0,
        Swimmer: 0,
        Gardener: 0,
        Rocker: 0,
        Psychic: 0,
        Skier: 0,
        DragonTamer: 0,
        Delinquent: 0,
        FairyTailGirl: 0
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
        setTypeStats(prevState => ({
            ...prevState,
            [name]: parseInt(value)
        }));
        return;
    }
    setTypeStats(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const createTypeStatEntry = async () => {
    const newData = await fetch('http://localhost:5000/typeInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...typeStats
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
            Type Medals
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 400 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="schoolkid"
                  label="Schoolkid"
                  name="schoolkid"
                  autoComplete="schoolkidMedal"
                  onChange={setInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="blackbelt"
                  label="Black Belt"
                  name="blackbelt"
                  autoComplete="blackbeltMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="birdKeeper"
                  label="Bird Keeper"
                  name="birdkeeper"
                  autoComplete="birdkeeperMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="punkgirl"
                  label="Punk Girl"
                  name="punkgirl"
                  autoComplete="punkgirlMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="ruinmaniac"
                  label="Ruin Maniac"
                  name="ruinmaniac"
                  autoComplete="ruinmaniacMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="hiker"
                  label="Hiker"
                  name="hiker"
                  autoComplete="hikerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="bugcatcher"
                  label="Bug Catcher"
                  name="bugcatcher"
                  autoComplete="bugcatcherMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="hexmaniac"
                  label="Hex Maniac"
                  name="hexmaniac"
                  autoComplete="hexmaniacMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="railstaff"
                  label="Rail Staff"
                  name="railstaff"
                  autoComplete="railstaffMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="kindler"
                  label="Kindler"
                  name="kindler"
                  autoComplete="kindlerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="swimmer"
                  label="Swimmer"
                  name="swimmer"
                  autoComplete="swimmerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="gardener"
                  label="Gardener"
                  name="gardener"
                  autoComplete="gardenerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="rocker"
                  label="Rocker"
                  name="rocker"
                  autoComplete="rockerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="psychic"
                  label="Psychic"
                  name="psychic"
                  autoComplete="psychicMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="skier"
                  label="Skier"
                  name="skier"
                  autoComplete="skierMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="dragontamer"
                  label="Dragon Tamer"
                  name="dragontamer"
                  autoComplete="dragontamerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="delinquent"
                  label="Delinquent"
                  name="delinquent"
                  autoComplete="delinquentMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="fairytalegirl"
                  label="Fairy Tale Girl"
                  name="fairytalegirl"
                  autoComplete="fairytalegirlMedal"
                  onChange={setInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => createTypeStatEntry()}
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