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
import Container from '@mui/material/Container';
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

export default function GameplayProfile() {
  const [returnedData, setReturnedData] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});
  const [trainer, setTrainer] = useState({trainerID: 0})

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(returnedData);
    console.log({
      TrainerID: data.get('TrainerID')
    });
  };

  const fetchTrainerProfile = async () => {
    
    const newData = await fetch('http://localhost:5000/gpFetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        TrainerID: trainer.TrainerID
      })
    })
    .then(res => res.json());
    console.log("CALLED PROFILE");
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              Gameplay Medals
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="TrainerID"
                label="Trainer ID#"
                name="TrainerID"
                autoComplete="TrainerID"
                onChange={setInput}
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => fetchTrainerProfile()}
              >
                View Stats
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
            <p>Welcome Trainer: {returnedData.TrainerID}</p>
            <p>Entry Number: {returnedData.EntryID} </p>
            <p>Entry Date: {returnedData.Date} </p>
            <p>Kanto: {returnedData.Kanto}</p>
            <p>Collector: {returnedData.Collector}</p>
            <p>Scientist: {returnedData.Scientist}</p>
            <p>Breeder:  {returnedData.Breeder}</p>
            <p>Sightseer: {returnedData.Sightseer}</p>
            <p>Pikachu Fan: {returnedData.PikachuFan}</p>
            <p>Johto: {returnedData.Johto}</p>
            <p>Gym Leader: {returnedData.GymLeader}</p>
            <p>Pokemon Ranger: {returnedData.PokemonRanger}</p>
            <p>Idol: {returnedData.Idol}</p>
            <p>GreatLeague: {returnedData.GreatLeague}</p>
            <p>Cameraman: {returnedData.Cameraman}</p>
            <p>Purifier: {returnedData.Purifier}</p>
            <p>Triathlete: {returnedData.Triathlete}</p>
            <p>RisingStar: {returnedData.RisingStar}</p>
            <p>Picknicker: {returnedData.Picknicker}</p>
            <p>Vivillon Collector: {returnedData.VivillonCollector}</p>
            <p>Jogger: {returnedData.Jogger}</p>
            <p>Backpacker: {returnedData.Backpacker}</p>
            <p>Fisher: {returnedData.Fisher}</p>
            <p>Battle Girl: {returnedData.BattleGirl}</p>
            <p>Youngster: {returnedData.Youngster}</p>
            <p>Unown: {returnedData.Unown}</p>
            <p>Berry Master: {returnedData.BerryMaster}</p>
            <p>Hoenn: {returnedData.Hoenn}</p>
            <p>Gentleman: {returnedData.Gentleman}</p>
            <p>Sinnoh: {returnedData.Sinnoh}</p>
            <p>Ultra League Veteran: {returnedData.UltraLeagueVeteran}</p>
            <p>Master League Veteran: {returnedData.MasterLeagueVeteran}</p>
            <p>Unova: {returnedData.Unova}</p>
            <p>Hero: {returnedData.Hero}</p>
            <p>Kalos: {returnedData.Kalos}</p>
            <p>Alola: {returnedData.Alola}</p>
            <p>Successor: {returnedData.Successor}</p>
            <p>Raid Expert: {returnedData.RaidExpert}</p>
            <p>Ace Trainer: {returnedData.AceTrainer}</p>
            <p>Champion: {returnedData.Champion}</p>
            <p>Battle Legend: {returnedData.BattleLegend}</p>
            <p>Pilot: {returnedData.Pilot}</p>
            <p>Ultra Hero: {returnedData.UltraHero}</p>
            <p>Rising Star Duo: {returnedData.RisingStarDuo}</p>
            <p>Mega Evolution Guru: {returnedData.MegaEvolutionGuru}</p>
            <p>Hisui: {returnedData.Hisui}</p>
            <p>Best Buddy: {returnedData.BestBuddy}</p>
            <p>Galar: {returnedData.Galar}</p>
            <p>Friend Finder: {returnedData.FriendFinder}</p>
            <p>Tiny Pokemon Collector: {returnedData.TinyPokemonCollector}</p>
            <p>Jumbo Pokemon Collector: {returnedData.JumboPokemonCollector}</p>
            <p>Wayfarer: {returnedData.Wayfarer}</p>

            <Copyright sx={{ mt: 5 }} />
          </Box>
      </Container>
    </ThemeProvider>
  );
}
