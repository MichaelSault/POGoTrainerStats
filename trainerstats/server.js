const express = require('express'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');

const API_PORT = process.env.PORT || 5000; 
const app = express(); //starts the server

//define variables for mongoDB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); 

app.post('/api', async(req, res) => {
    const result = await dbOperation.getTrainerProfile(req.body);
    console.log(result.recordset[0]);
    res.send(result.recordset[0]); //sending objects are easier on the front end
});

app.post('/profile', async(req, res) => { 
    const result = await dbOperation.getTrainerProfile(req.body);
    console.log(result.recordset[0]);
    res.send(result.recordset[0]);
});

app.post('/hello', async(req, res) => { 
    await dbOperation.createTrainerProfile(req.body);
    const result = await dbOperation.getTrainerProfile(req.body.Firstname);
    console.log('called hello');
});

app.post('/gpInput', async(req, res) => { 
    await dbOperation.createGameplayEntry(req.body);
    const result = await dbOperation.createGameplayEntry(req.body);
    console.log('called gpInput');
});

app.post('/typeInput', async(req, res) => { 
    await dbOperation.createTypeEntry(req.body);
    const result = await dbOperation.createTypeEntry(req.body);
    console.log('called type input');
});

app.post('/trainerStatInput', async(req, res) => { 
    await dbOperation.createTrainerEntry(req.body);
    const result = await dbOperation.createTrainerEntry(req.body);
    console.log('called trainer stat input');
});

app.post('/gpFetch', async(req, res) => { 
    await dbOperation.getGameplayEntry(req.body);
    const result = await dbOperation.getGameplayEntry(req.body);
    console.log('called gpFetch');
    res.send(result.recordset[0]);
});

app.post('/typeFetch', async(req, res) => { 
    await dbOperation.getTypeEntry(req.body);
    const result = await dbOperation.getTypeEntry(req.body);
    console.log('called typeFetch');
    res.send(result.recordset[0]);
});

app.post('/trainerStatFetch', async(req, res) => { 
    await dbOperation.getTrainerEntry(req.body);
    const result = await dbOperation.getTrainerEntry(req.body);
    console.log("req.body:")
    console.log(req.body);
    res.send(result.recordset[0]);
});

app.post('/fetchAll', async(req, res) => { 
    const result = await dbOperation.getTrainerProfile(req.body);
    console.log(result.recordset[0]);
    res.send(result.recordset[0]);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));