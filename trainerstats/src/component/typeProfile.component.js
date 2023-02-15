import '../App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {Line} from 'react-chartjs-2';
import { maxWidth } from '@mui/system';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

export default function TypeProfile() {
  const [returnedData, setReturnedData] = useState({EntryID: 0, TrainerID: 0, Date: "2022-02-22", Caught: '', Seen: '', DistanceWalked: '', PokemonCaught: '', PokestopsVisited: '', TrainerLevel: 1, TotalXP: 0});
  const [returnedStatHistory, setReturnedStatHistory] = useState({EntryID: 0, Date: "2022-02-22" });
  
  const [trainer, setTrainer] = useState({TrainerID: 0})

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["", "","",""],
      datasets: [
        
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Number of Pokémon Caught By Type"
        }
      }
    })
  }, []);


  function displayStatData(stat){
    console.log("Displaying Stats:")
    console.log(stat[0].EntryID[0]);
    //stat.EntryID = stat.EntryID[0];
    console.log(stat);
    var statArray = stat.map(buildStatArray); //because EntryID has 2 columns, it is coming in as an array.  I need to prevent this somehow, or replace the array with the first value
    console.log(statArray);

    //parse all values from statArray
    
    var printArray = statArray.map(statArray => statArray[0]);
    var printArray1 = statArray.map(statArray => statArray[1]);
    var printArray2 = statArray.map(statArray => statArray[2]);
    var printArray3 = statArray.map(statArray => statArray[3]);
    var printArray4 = statArray.map(statArray => statArray[4]);
    var printArray5 = statArray.map(statArray => statArray[5]);
    var printArray6 = statArray.map(statArray => statArray[6]);
    var printArray7 = statArray.map(statArray => statArray[7]);
    var printArray8 = statArray.map(statArray => statArray[8]);
    var printArray9 = statArray.map(statArray => statArray[9]);
    var printArray10 = statArray.map(statArray => statArray[10]);
    var printArray11 = statArray.map(statArray => statArray[11]);
    var printArray12 = statArray.map(statArray => statArray[12]);
    var printArray13 = statArray.map(statArray => statArray[13]);
    var printArray14 = statArray.map(statArray => statArray[14]);
    var printArray15 = statArray.map(statArray => statArray[15]);
    var printArray16 = statArray.map(statArray => statArray[16]);
    var printArray17 = statArray.map(statArray => statArray[17]);
    
    var dateArray = stat.map(printArray => printArray.Date.slice(0, 10));
    console.log(statArray);

    setChartData({
      labels: dateArray,
      datasets: [
        {
          yAxisID: 'y1',
          label: 'Schoolkid',
          data: printArray,
          borderColor: "DarkGrey",
          backgroundColor: "Gainsboro",
        },
        {
          yAxisID: 'y1',
          label: 'BlackBelt',
          data: printArray1,
          borderColor: "Peru",
          backgroundColor: "SandyBrown",
        },
        {
          yAxisID: 'y1',
          label: 'BirdKeeper',
          data: printArray2,
          borderColor: "LightGrey",
          backgroundColor: "AliceBlue",
        },
        {
          yAxisID: 'y1',
          label: 'PunkGirl',
          data: printArray3,
          borderColor: "MediumOrchid",
          backgroundColor: "Plum",
        },
        {
          yAxisID: 'y1',
          label: 'RuinManiac',
          data: printArray4,
          borderColor: "SaddleBrown",
          backgroundColor: "Sienna",
        },
        {
          yAxisID: 'y1',
          label: 'Hiker',
          data: printArray5,
          borderColor: "Peru",
          backgroundColor: "Tan",
        },
        {
          yAxisID: 'y1',
          label: 'BugCatcher',
          data: printArray6,
          borderColor: "Olive",
          backgroundColor: "YellowGreen",
        },
        {
          yAxisID: 'y1',
          label: 'HexManiac',
          data: printArray7,
          borderColor: "DarkSlateBlue",
          backgroundColor: "Indigo",
        },
        {
          yAxisID: 'y1',
          label: 'RailStaff',
          data: printArray8,
          borderColor: "Silver",
          backgroundColor: "LightGrey",
        },
        {
          yAxisID: 'y1',
          label: 'Kindler',
          data: printArray9,
          borderColor: "Maroon",
          backgroundColor: "FireBrick",
        },
        {
          yAxisID: 'y1',
          label: 'Swimmer',
          data: printArray10,
          borderColor: "DodgerBlue",
          backgroundColor: "CornflowerBlue",
        },
        {
          yAxisID: 'y1',
          label: 'Gardener',
          data: printArray11,
          borderColor: "Green",
          backgroundColor: "SeaGreen",
        },
        {
          yAxisID: 'y1',
          label: 'Rocker',
          data: printArray12,
          borderColor: "GoldenRod",
          backgroundColor: "Yellow",
        },
        {
          yAxisID: 'y1',
          label: 'Psychic',
          data: printArray13,
          borderColor: "LightCoral",
          backgroundColor: "LightPink",
        },
        {
          yAxisID: 'y1',
          label: 'Skier',
          data: printArray14,
          borderColor: "LightBlue",
          backgroundColor: "LightCyan",
        },
        {
          yAxisID: 'y1',
          label: 'DragonTamer',
          data: printArray15,
          borderColor: "DarkSlateBlue",
          backgroundColor: "MidnightBlue",
        },
        {
          yAxisID: 'y1',
          label: 'Delinquent',
          data: printArray16,
          borderColor: "Black",
          backgroundColor: "#333333",
        },
        {
          yAxisID: 'y1',
          label: 'FairyTaleGirl',
          data: printArray17,
          borderColor: "HotPink",
          backgroundColor: "Pink",
        }
      ],
    });
    setChartOptions({
      scales: {
        y1: {
          type: 'linear',
          position: 'left',
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Number of Pokémon Caught By Type"
        }
      }
    })
  
    //document.getElementById('ParsedStatArray').innerHTML = printArray;
  }

  function buildStatArray(item){
    //console.log(item[trainer.Stat], item.Date);
    var statsArrayEntry = [item.Schoolkid, item.BlackBelt, item.BirdKeeper, item.PunkGirl, item.RuinManiac, item.Hiker, item.BugCatcher, item.HexManiac, item.RailStaff, item.Kindler, item.Swimmer, item.Gardener, item.Gardener, item.Rocker, item.Psychic, item.Skier, item.DragonTamer, item.Delinquent, item.FairyTale, item.Date];
    console.log(statsArrayEntry);
    return statsArrayEntry;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(trainer.TrainerID);
    console.log(returnedData);
    console.log({
      TrainerID: data.get('TrainerID')
    });
  };

  const fetchTrainerProfile = async () => {
    
    const newData = await fetch('http://localhost:5000/typeFetch', {
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
    setReturnedStatHistory(newData);
    console.log(newData);
    displayStatData(newData);
    
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
              Type Medals
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
            
            <div className='typeChart'>
              <Line options={chartOptions} data={chartData}/>
            </div>
            
            {/* <p><b>Welcome Trainer:</b> {returnedData.TrainerID}</p>
            <p>Entry Number: {returnedData.EntryID} </p>
            <p>Entry Date: {returnedData.Date} </p>
            <p>Normal Pokémon Caught: {returnedData.Schoolkid}</p>
            <p>Fighting Pokémon Caught: {returnedData.BlackBelt}</p>
            <p>Flying Pokémon Caught: {returnedData.BirdKeeper}</p>
            <p>Poison Pokémon Caught: {returnedData.PunkGirl}</p>
            <p>Ground Pokémon Caught: {returnedData.RuinManiac}</p>
            <p>Rock Pokémon Caught: {returnedData.Hiker}</p>
            <p>Bug Pokémon Caught: {returnedData.BugCatcher}</p>
            <p>Ghost Pokémon Caught: {returnedData.HexManiac}</p>
            <p>Steel Pokémon Caught: {returnedData.RailStaff}</p>
            <p>Fire Pokémon Caught: {returnedData.Kindler}</p>
            <p>Water Pokémon Caught: {returnedData.Swimmer}</p>
            <p>Grass Pokémon Caught: {returnedData.Gardener}</p>
            <p>Thunder Pokémon Caught: {returnedData.Rocker}</p>
            <p>Psychic Pokémon Caught: {returnedData.Psychic}</p>
            <p>Ice Pokémon Caught: {returnedData.Skier}</p>
            <p>Dragon Pokémon Caught: {returnedData.DragonTamer}</p>
            <p>Dark Pokémon Caught: {returnedData.Delinquent}</p>
            <p>Fairy Pokémon Caught: {returnedData.FairyTaleGirl}</p> */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
      </Container>
      
      
    </ThemeProvider>
    
  );
}
