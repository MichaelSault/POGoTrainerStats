import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import { Divider } from '@mui/material';


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

export default function StatHistory() {
  const [returnedData, setReturnedData] = useState({TrainerID: 0, TrainerName: '', Email: '', Firstname: '', Lastname: '', Password: ''});
  const [returnedStatHistory, setReturnedStatHistory] = useState({EntryID: 0, Date: "2022-02-22" });
  
  const [trainer, setTrainer] = useState({Email: '', Stat: ''})

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["", "","",""],
      datasets: [
        {
          label: "",
          data: [0, 0, 0, 0],
          borderColor: "black",
          backgroundColor: "grey",
        },
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
          text: ""
        }
      }
    })
  }, []);

  function displayStatData(stat, statName){
    console.log(stat[0][statName])
    var statArray = stat.map(buildStatArray);
    var printArray = statArray.map(printStatArray);
    var dateArray = statArray.map(dateStatArray);

    setChartData({
      labels: dateArray,
      datasets: [
        {
          label: "",
          data: printArray,
          borderColor: "firebrick",
          backgroundColor: "black",
        },
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
          text: "Trainer Stats over time"
        }
      }
    })
  
    document.getElementById('ParsedStatArray').innerHTML = printArray;
  }
  
  function buildStatArray(item){
    console.log(item[trainer.Stat], item.Date);
    var statValue = item[trainer.Stat];
    var dateValue = item.Date;
    var statsArrayEntry = [statValue, dateValue];
    return statsArrayEntry;
  }

  function printStatArray(item){
    return item[0];
  }

  function dateStatArray(item){
    return item[1];
  }


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
        TrainerID: trainerID,
        Stat: trainer.Stat
      })
    })
    .then(res => res.json());
    console.log("CALLED PROFILE");
    console.log(newData[0].Caught);
    setReturnedStatHistory(newData);
    displayStatData(newData, trainer.Stat);
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

            <p>{returnedStatHistory.length}</p>
            
            <Line options={chartOptions} data={chartData}/>
            
            <p id='ParsedStatArray' />

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
