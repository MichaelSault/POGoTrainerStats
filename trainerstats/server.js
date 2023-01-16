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
    console.log('called api');
    const result = await dbOperation.getTrainerProfile(req.body.name);
    console.log(result.recordset[0]);
    res.send(result.recordset); //sending objects are easier on the front end
});

app.post('/hello', async(req, res) => { 
    await dbOperation.createTrainerProfile(req.body);
    const result = await dbOperation.getTrainerProfile(req.body.Firstname);
    console.log('called hello');
    //res.send(result.recordset);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));