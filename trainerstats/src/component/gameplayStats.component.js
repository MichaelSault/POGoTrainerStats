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

export default function GameplayStats() {
  const [returnedData, setReturnedData] = useState(
    {
      EntryID: 0, 
      TrainerID: 0,
      Date: new Date('2016-07-10'),
      Kanto: 0, 
      Collector: 0, 
      Scientist: 0, 
      Breeder: 0, 
      Sightseer: 0,
      PikachuFan: 0,
      Johto: 0,
      GymLeader: 0,
      PokemonRanger: 0,
      Idol: 0,
      GreatLeague: 0,
      Cameraman: 0,
      Purifier: 0,
      Triathlete: 0,
      RisingStar: 0,
      Picknicker: 0,
      VivillonCollector:0,
      Jogger: 0,
      Backpacker: 0,
      Fisher: 0,
      BattleGirl: 0,
      Youngster: 0,
      Unown: 0,
      BerryMaster: 0,
      Hoenn: 0,
      Gentleman: 0,
      Sinnoh: 0,
      UltraLeagueVeteran: 0,
      MasterLeagueVeteran: 0,
      Unova: 0,
      Hero: 0,
      Kalos: 0,
      Alola: 0,
      Successor: 0,
      RaidExpert: 0,
      AceTrainer: 0,
      Champion: 0,
      BattleLegend: 0,
      Pilot: 0,
      UltraHero: 0,
      RisingStarDuo: 0,
      MegaEvolutionGuru: 0,
      Hisui: 0,
      BestBuddy: 0,
      Galar: 0,
      FriendFinder: 0,
      TinyPokemonCollector: 0,
      JumboPokemonCollector: 0,
      Wayfarer: 0
    });

  const [gameplayStats, setGameplayStats] = useState(
    {
      Kanto: 0, 
      Collector: 0, 
      Scientist: 0, 
      Breeder: 0, 
      Sightseer: 0,
      PikachuFan: 0,
      Johto: 0,
      GymLeader: 0,
      PokemonRanger: 0,
      Idol: 0,
      GreatLeague: 0,
      Cameraman: 0,
      Purifier: 0,
      Triathlete: 0,
      RisingStar: 0,
      Picknicker: 0,
      VivillonCollector:0,
      Jogger: 0,
      Backpacker: 0,
      Fisher: 0,
      BattleGirl: 0,
      Youngster: 0,
      Unown: 0,
      BerryMaster: 0,
      Hoenn: 0,
      Gentleman: 0,
      Sinnoh: 0,
      UltraLeagueVeteran: 0,
      MasterLeagueVeteran: 0,
      Unova: 0,
      Hero: 0,
      Kalos: 0,
      Alola: 0,
      Successor: 0,
      RaidExpert: 0,
      AceTrainer: 0,
      Champion: 0,
      BattleLegend: 0,
      Pilot: 0,
      UltraHero: 0,
      RisingStarDuo: 0,
      MegaEvolutionGuru: 0,
      Hisui: 0,
      BestBuddy: 0,
      Galar: 0,
      FriendFinder: 0,
      TinyPokemonCollector: 0,
      JumboPokemonCollector: 0,
      Wayfarer: 0
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
        setGameplayStats(prevState => ({
            ...prevState,
            [name]: parseInt(value)
        }));
        return;
    }
    setGameplayStats(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const createGameplayStatEntry = async () => {
    const newData = await fetch('http://localhost:5000/gpInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...gameplayStats
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
            Gameplay Medals
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 400 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="kanto"
                  label="Kanto"
                  name="kanto"
                  autoComplete="kantoMedal"
                  onChange={setInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="collector"
                  label="Collector"
                  name="collector"
                  autoComplete="collectorMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="scientist"
                  label="Scientist"
                  name="scientist"
                  autoComplete="scientistMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="breederMedal"
                  name="breeder"
                  fullWidth
                  id="breeder"
                  label="Breeder"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="sightseer"
                  label="Sightseer"
                  name="sightseer"
                  autoComplete="sightseerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="pikachu"
                  label="Pikachu Fan"
                  name="pikachu"
                  autoComplete="pikachuMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="johtoMedal"
                  name="johto"
                  
                  fullWidth
                  id="johto"
                  label="Johto"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="gymleader"
                  label="Gym Leader"
                  name="gymleader"
                  autoComplete="gymleaderMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="ranger"
                  label="Pokémon Ranger"
                  name="ranger"
                  autoComplete="rangerMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="idolMedal"
                  name="idol"
                  
                  fullWidth
                  id="idol"
                  label="Idol"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="glv"
                  label="Great League Veteran"
                  name="glv"
                  autoComplete="glvMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="cameraman"
                  label="Cameraman"
                  name="cameraman"
                  autoComplete="cameramanMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="purifierMedal"
                  name="purifier"
                  fullWidth
                  id="purifier"
                  label="Purifier"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="triathlete"
                  label="Triathlete"
                  name="triathlete"
                  autoComplete="triathleteMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="risingStar"
                  label="Rising Star"
                  name="risingStar"
                  autoComplete="risingStarMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="picknickerMedal"
                  name="picknicker"
                  
                  fullWidth
                  id="picknicker"
                  label="Picknicker"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="vivillon"
                  label="Vivillon Collector"
                  name="vivillon"
                  autoComplete="vivillonMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="jogger"
                  label="Jogger"
                  name="jogger"
                  autoComplete="joggerMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="backpackerMedal"
                  name="backpacker"
                  
                  fullWidth
                  id="backpacker"
                  label="Backpacker"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="fisher"
                  label="Fisher"
                  name="fisher"
                  autoComplete="fisherMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="battleGirlMedal"
                  name="battleGirl"
                  
                  fullWidth
                  id="battleGirl"
                  label="Battle Girl"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="youngster"
                  label="Youngster"
                  name="youngster"
                  autoComplete="youngsterMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="unown"
                  label="Unown"
                  name="unown"
                  autoComplete="unownMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="berryMasterMedal"
                  name="berryMaster"
                  
                  fullWidth
                  id="berryMaster"
                  label="Berry Master"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="hoenn"
                  label="Hoenn"
                  name="hoenn"
                  autoComplete="hoennMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="gentleman"
                  label="Gentleman"
                  name="gentleman"
                  autoComplete="gentlemanMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="sinnohMedal"
                  name="sinnoh"
                  
                  fullWidth
                  id="sinnoh"
                  label="Sinnoh"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="ulv"
                  label="Ultra League Veteran"
                  name="ulv"
                  autoComplete="ulvMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="mlv"
                  label="Master League Veteran"
                  name="mlv"
                  autoComplete="mlvMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="unovaMedal"
                  name="unova"
                  
                  fullWidth
                  id="unova"
                  label="Unova"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="hero"
                  label="Hero"
                  name="hero"
                  autoComplete="heroMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="kalos"
                  label="Kalos"
                  name="kalos"
                  autoComplete="kalosMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="alolaMedal"
                  name="alola"
                  
                  fullWidth
                  id="alola"
                  label="Alola"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="successor"
                  label="Successor"
                  name="successor"
                  autoComplete="successorMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="raidExpert"
                  label="Raid Expert"
                  name="raidExpert"
                  autoComplete="raidExpertMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="aceTrainerMedal"
                  name="aceTrainer"
                  
                  fullWidth
                  id="aceTrainer"
                  label="Ace Trainer"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="champion"
                  label="Champion"
                  name="champion"
                  autoComplete="championMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="battleLegend"
                  label="Battle Legend"
                  name="battleLegend"
                  autoComplete="battleLegendMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="pilotMedal"
                  name="pilot"
                  
                  fullWidth
                  id="pilot"
                  label="Pilot"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="ultraHero"
                  label="Ultra Hero"
                  name="ultraHero"
                  autoComplete="ultraHeroMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="risingStarDuo"
                  label="Rising Star Duo"
                  name="risingStarDuo"
                  autoComplete="risingStarDuoMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="megaMedal"
                  name="mega"
                  
                  fullWidth
                  id="mega"
                  label="Mega Evolution Guru"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="hisui"
                  label="Hisui"
                  name="hisui"
                  autoComplete="hisuiMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="bestBuddy"
                  label="Best Buddy"
                  name="bestBuddy"
                  autoComplete="bestBuddyMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="galarMedal"
                  name="galar"
                  
                  fullWidth
                  id="galar"
                  label="Galar"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="friendFinder"
                  label="Friend Finder"
                  name="friendFinder"
                  autoComplete="friendFinderMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="tiny"
                  label="Tiny Pokémon Collector"
                  name="tiny"
                  autoComplete="tinyMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="jumboMedal"
                  name="jumbo"
                  
                  fullWidth
                  id="jumbo"
                  label="Jumbo Pokémon Collector"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  
                  fullWidth
                  id="wayfarer"
                  label="Wayfarer"
                  name="wayfarer"
                  autoComplete="wayfarerMedal"
                  onChange={setInput}
                />
              </Grid>
              

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => createGameplayStatEntry()}
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
