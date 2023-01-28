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

export default function AllStats() {
  const [returnedData, setReturnedData] = useState({TrainerID: 0, TrainerName: '', Email: '', Firstname: '', Lastname: '', Password: ''});
  const [returnedTrainerData, setReturnedTrainerData] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});
  const [returnedGameplayData, setReturnedGameplayData] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});
  const [returnedTypeData, setReturnedTypeData] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});


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

  const fetchAllData = async () => {
    
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
    console.log("CALLED FETCH ALL.1");
    console.log(newData);
    setReturnedData(newData);
    fetchTrainerProfile(newData.TrainerID);
    fetchGameplayProfile(newData.TrainerID);
    fetchTypeProfile(newData.TrainerID);
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

  const fetchTrainerProfile = async (trainerID) => {
    const newData = await fetch('http://localhost:5000/trainerStatFetch', {
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
    setReturnedTrainerData(newData)
  }

  const fetchGameplayProfile = async (trainerID) => {
    const newData = await fetch('http://localhost:5000/gpFetch', {
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
    setReturnedGameplayData(newData)
  }

  const fetchTypeProfile = async (trainerID) => {
    const newData = await fetch('http://localhost:5000/typeFetch', {
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
    setReturnedTypeData(newData)
    
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => fetchAllData()}
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
            <h3><b>Welcome Trainer: {returnedData.TrainerID}</b></h3>
            <p>Trainer Name: {returnedData.TrainerName} </p>
            <p>Name: {returnedData.Firstname} {returnedData.Lastname}</p>
            <p>Email: {returnedData.Email}</p>
            <Divider variant="middle" />
            <h3><b>Trainer Stats:</b></h3>
            <p>Pokémon Caught: {returnedTrainerData.Caught}</p>
            <p>Pokémon Seen: {returnedTrainerData.Seen}</p>
            <p>Distance Walked: {returnedTrainerData.DistanceWalked}</p>
            <p>Total Pokémon Caught: {returnedTrainerData.PokemonCaught}</p>
            <p>Pokéstops Visited: {returnedTrainerData.PokestopsVisited}</p>
            <p>Trainer Level: {returnedTrainerData.TrainerLevel}</p>
            <p>TotalXP: {returnedTrainerData.TotalXP}</p>
            <Divider variant="middle" />
            <h3><b>Gameplay Stats:</b></h3>
            <p>Kanto: {returnedGameplayData.Kanto}</p>
            <p>Collector: {returnedGameplayData.Collector}</p>
            <p>Scientist: {returnedGameplayData.Scientist}</p>
            <p>Breeder:  {returnedGameplayData.Breeder}</p>
            <p>Sightseer: {returnedGameplayData.Sightseer}</p>
            <p>Pikachu Fan: {returnedGameplayData.PikachuFan}</p>
            <p>Johto: {returnedGameplayData.Johto}</p>
            <p>Gym Leader: {returnedGameplayData.GymLeader}</p>
            <p>Pokemon Ranger: {returnedGameplayData.PokemonRanger}</p>
            <p>Idol: {returnedGameplayData.Idol}</p>
            <p>GreatLeague: {returnedGameplayData.GreatLeague}</p>
            <p>Cameraman: {returnedGameplayData.Cameraman}</p>
            <p>Purifier: {returnedGameplayData.Purifier}</p>
            <p>Triathlete: {returnedGameplayData.Triathlete}</p>
            <p>RisingStar: {returnedGameplayData.RisingStar}</p>
            <p>Picknicker: {returnedGameplayData.Picknicker}</p>
            <p>Vivillon Collector: {returnedGameplayData.VivillonCollector}</p>
            <p>Jogger: {returnedGameplayData.Jogger}</p>
            <p>Backpacker: {returnedGameplayData.Backpacker}</p>
            <p>Fisher: {returnedGameplayData.Fisher}</p>
            <p>Battle Girl: {returnedGameplayData.BattleGirl}</p>
            <p>Youngster: {returnedGameplayData.Youngster}</p>
            <p>Unown: {returnedGameplayData.Unown}</p>
            <p>Berry Master: {returnedGameplayData.BerryMaster}</p>
            <p>Hoenn: {returnedGameplayData.Hoenn}</p>
            <p>Gentleman: {returnedGameplayData.Gentleman}</p>
            <p>Sinnoh: {returnedGameplayData.Sinnoh}</p>
            <p>Ultra League Veteran: {returnedGameplayData.UltraLeagueVeteran}</p>
            <p>Master League Veteran: {returnedGameplayData.MasterLeagueVeteran}</p>
            <p>Unova: {returnedGameplayData.Unova}</p>
            <p>Hero: {returnedGameplayData.Hero}</p>
            <p>Kalos: {returnedGameplayData.Kalos}</p>
            <p>Alola: {returnedGameplayData.Alola}</p>
            <p>Successor: {returnedGameplayData.Successor}</p>
            <p>Raid Expert: {returnedGameplayData.RaidExpert}</p>
            <p>Ace Trainer: {returnedGameplayData.AceTrainer}</p>
            <p>Champion: {returnedGameplayData.Champion}</p>
            <p>Battle Legend: {returnedGameplayData.BattleLegend}</p>
            <p>Pilot: {returnedGameplayData.Pilot}</p>
            <p>Ultra Hero: {returnedGameplayData.UltraHero}</p>
            <p>Rising Star Duo: {returnedGameplayData.RisingStarDuo}</p>
            <p>Mega Evolution Guru: {returnedGameplayData.MegaEvolutionGuru}</p>
            <p>Hisui: {returnedGameplayData.Hisui}</p>
            <p>Best Buddy: {returnedGameplayData.BestBuddy}</p>
            <p>Galar: {returnedGameplayData.Galar}</p>
            <p>Friend Finder: {returnedGameplayData.FriendFinder}</p>
            <p>Tiny Pokemon Collector: {returnedGameplayData.TinyPokemonCollector}</p>
            <p>Jumbo Pokemon Collector: {returnedGameplayData.JumboPokemonCollector}</p>
            <p>Wayfarer: {returnedGameplayData.Wayfarer}</p>
            <Divider variant="middle" />
            <h3><b>Type Stats:</b></h3>
            <p>Normal Pokémon Caught: {returnedTypeData.Schoolkid}</p>
            <p>Fighting Pokémon Caught: {returnedTypeData.BlackBelt}</p>
            <p>Flying Pokémon Caught: {returnedTypeData.BirdKeeper}</p>
            <p>Poison Pokémon Caught: {returnedTypeData.PunkGirl}</p>
            <p>Ground Pokémon Caught: {returnedTypeData.RuinManiac}</p>
            <p>Rock Pokémon Caught: {returnedTypeData.Hiker}</p>
            <p>Bug Pokémon Caught: {returnedTypeData.BugCatcher}</p>
            <p>Ghost Pokémon Caught: {returnedTypeData.HexManiac}</p>
            <p>Steel Pokémon Caught: {returnedTypeData.RailStaff}</p>
            <p>Fire Pokémon Caught: {returnedTypeData.Kindler}</p>
            <p>Water Pokémon Caught: {returnedTypeData.Swimmer}</p>
            <p>Grass Pokémon Caught: {returnedTypeData.Gardener}</p>
            <p>Thunder Pokémon Caught: {returnedTypeData.Rocker}</p>
            <p>Psychic Pokémon Caught: {returnedTypeData.Psychic}</p>
            <p>Ice Pokémon Caught: {returnedTypeData.Skier}</p>
            <p>Dragon Pokémon Caught: {returnedTypeData.DragonTamer}</p>
            <p>Dark Pokémon Caught: {returnedTypeData.Delinquent}</p>
            <p>Fairy Pokémon Caught: {returnedTypeData.FairyTaleGirl}</p>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
