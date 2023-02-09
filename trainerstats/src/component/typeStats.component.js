import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
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
        FairyTaleGirl: 0
    });

  const [typeStats, setTypeStats] = useState(
    {
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
        FairyTaleGirl: 0
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
                  id="Schoolkid"
                  label="Schoolkid"
                  name="Schoolkid"
                  autoComplete="SchoolkidMedal"
                  onChange={setInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BlackBelt"
                  label="Black Belt"
                  name="BlackBelt"
                  autoComplete="BlackBeltMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BirdKeeper"
                  label="Bird Keeper"
                  name="BirdKeeper"
                  autoComplete="BirdKeeperMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="PunkGirl"
                  label="Punk Girl"
                  name="PunkGirl"
                  autoComplete="PunkGirlMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="RuinManiac"
                  label="Ruin Maniac"
                  name="RuinManiac"
                  autoComplete="RuinManiacMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Hiker"
                  label="Hiker"
                  name="Hiker"
                  autoComplete="HikerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BugCatcher"
                  label="Bug Catcher"
                  name="BugCatcher"
                  autoComplete="BugCatcherMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="HexManiac"
                  label="Hex Maniac"
                  name="HexManiac"
                  autoComplete="HexManiacMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="RailStaff"
                  label="Rail Staff"
                  name="RailStaff"
                  autoComplete="RailStaffMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Kindler"
                  label="Kindler"
                  name="Kindler"
                  autoComplete="KindlerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Swimmer"
                  label="Swimmer"
                  name="Swimmer"
                  autoComplete="SwimmerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Gardener"
                  label="Gardener"
                  name="Gardener"
                  autoComplete="GardenerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Rocker"
                  label="Rocker"
                  name="Rocker"
                  autoComplete="RockerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Psychic"
                  label="Psychic"
                  name="Psychic"
                  autoComplete="PsychicMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Skier"
                  label="Skier"
                  name="Skier"
                  autoComplete="SkierMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="DragonTamer"
                  label="Dragon Tamer"
                  name="DragonTamer"
                  autoComplete="DragonTamerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Delinquent"
                  label="Delinquent"
                  name="Delinquent"
                  autoComplete="DelinquentMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="FairyTaleGirl"
                  label="Fairy Tale Girl"
                  name="FairyTaleGirl"
                  autoComplete="FairyTaleGirlMedal"
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