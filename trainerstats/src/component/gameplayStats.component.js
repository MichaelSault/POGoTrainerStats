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
      UltraLeague: 0,
      MasterLeague: 0,
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
      UltraLeague: 0,
      MasterLeague: 0,
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
                  id="Kanto"
                  label="Kanto"
                  name="Kanto"
                  autoComplete="kantoMedal"
                  onChange={setInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Collector"
                  label="Collector"
                  name="Collector"
                  autoComplete="collectorMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Scientist"
                  label="Scientist"
                  name="Scientist"
                  autoComplete="scientistMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Breeder"
                  label="Breeder"
                  name="Breeder"
                  autoComplete="breederMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Sightseer"
                  label="Sightseer"
                  name="Sightseer"
                  autoComplete="sightseerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="PikachuFan"
                  label="Pikachu Fan"
                  name="PikachuFan"
                  autoComplete="pikachuMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth                
                  id="Johto"
                  label="Johto"
                  name="Johto"
                  autoComplete="johtoMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="GymLeader"
                  label="Gym Leader"
                  name="GymLeader"
                  autoComplete="gymleaderMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="PokemonRanger"
                  label="Pokémon Ranger"
                  name="PokemonRanger"
                  autoComplete="rangerMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Idol"
                  label="Idol"
                  name="Idol"
                  autoComplete="idolMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="GreatLeague"
                  label="Great League Veteran"
                  name="GreatLeague"
                  autoComplete="glvMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Cameraman"
                  label="Cameraman"
                  name="Cameraman"
                  autoComplete="cameramanMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Purifier"
                  label="Purifier"
                  name="Purifier"
                  autoComplete="purifierMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Triathlete"
                  label="Triathlete"
                  name="Triathlete"
                  autoComplete="triathleteMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="RisingStar"
                  label="Rising Star"
                  name="RisingStar"
                  autoComplete="risingStarMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Picknicker"
                  label="Picknicker"
                  name="Picknicker"
                  autoComplete="picknickerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="VivillonCollector"
                  label="Vivillon Collector"
                  name="VivillonCollector"
                  autoComplete="vivillonMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Jogger"
                  label="Jogger"
                  name="Jogger"
                  autoComplete="joggerMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Backpacker"
                  label="Backpacker"
                  name="Backpacker"
                  autoComplete="backpackerMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Fisher"
                  label="Fisher"
                  name="Fisher"
                  autoComplete="fisherMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BattleGirl"
                  label="Battle Girl"
                  name="BattleGirl"
                  autoComplete="battleGirlMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Youngster"
                  label="Youngster"
                  name="Youngster"
                  autoComplete="youngsterMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Unown"
                  label="Unown"
                  name="Unown"
                  autoComplete="unownMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BerryMaster"
                  label="Berry Master"
                  name="BerryMaster"
                  autoComplete="berryMasterMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Hoenn"
                  label="Hoenn"
                  name="Hoenn"
                  autoComplete="hoennMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Gentleman"
                  label="Gentleman"
                  name="Gentleman"
                  autoComplete="gentlemanMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Sinnoh"
                  label="Sinnoh"
                  name="Sinnoh"
                  autoComplete="sinnohMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="UltraLeague"
                  label="Ultra League Veteran"
                  name="UltraLeague"
                  autoComplete="ulvMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="MasterLeague"
                  label="Master League Veteran"
                  name="MasterLeague"
                  autoComplete="mlvMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Unova"
                  label="Unova"
                  name="Unova"
                  autoComplete="unovaMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Hero"
                  label="Hero"
                  name="Hero"
                  autoComplete="heroMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Kalos"
                  label="Kalos"
                  name="Kalos"
                  autoComplete="kalosMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Alola"
                  label="Alola"
                  name="Alola"
                  autoComplete="alolaMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Successor"
                  label="Successor"
                  name="Successor"
                  autoComplete="successorMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="RaidExpert"
                  label="Raid Expert"
                  name="RaidExpert"
                  autoComplete="raidExpertMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="AceTrainer"
                  label="Ace Trainer"
                  name="AceTrainer"
                  autoComplete="aceTrainerMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Champion"
                  label="Champion"
                  name="Champion"
                  autoComplete="championMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BattleLegend"
                  label="Battle Legend"
                  name="BattleLegend"
                  autoComplete="battleLegendMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Pilot"
                  label="Pilot"
                  name="Pilot"
                  autoComplete="pilotMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="UltraHero"
                  label="Ultra Hero"
                  name="UltraHero"
                  autoComplete="ultraHeroMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="RisingStarDuo"
                  label="Rising Star Duo"
                  name="RisingStarDuo"
                  autoComplete="risingStarDuoMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="MegaEvolutionGuru"
                  label="Mega Evolution Guru"
                  name="MegaEvolutionGuru"
                  autoComplete="megaMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Hisui"
                  label="Hisui"
                  name="Hisui"
                  autoComplete="hisuiMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="BestBuddy"
                  label="Best Buddy"
                  name="BestBuddy"
                  autoComplete="bestBuddyMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Galar"
                  label="Galar"
                  name="Galar"
                  autoComplete="galarMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="FriendFinder"
                  label="Friend Finder"
                  name="FriendFinder"
                  autoComplete="friendFinderMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="TinyPokemonCollector"
                  label="Tiny Pokémon Collector"
                  name="TinyPokemonCollector"
                  autoComplete="tinyMedal"
                  onChange={setInput}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="JumboPokemonCollector"
                  label="Jumbo Pokémon Collector"
                  name="JumboPokemonCollector"
                  autoComplete="jumboMedal"
                  onChange={setInput}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="Wayfarer"
                  label="Wayfarer"
                  name="Wayfarer"
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
