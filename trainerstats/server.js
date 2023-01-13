const { response } = require('express');
const express = require('express'),
    TrainerProfile = require('./src/dbFiles/trainerProfile'),
    dbOperation = require('./src/dbFiles/dbOperation'),
    cors = require('cors');

/* const API_PORT = process.env.PORT || 5000; */
/* const app = express(); //starts the server */
/*  */
/*  */
/* app.use(cors()); */
/*  */
/* app.get('/api', function(req,res) { */
/*     console.log('Called'); */
/*     res.send({result:'Hello Server'}) //sending objects are easier on the  front end*/
/* }) */
/*  */
/* app.get('/quit', function(req,res) { */
/*     console.log('Called it quits'); */
/*     res.send({result:'Au Revoir'}) */
/* }) */
/*  */

let Ash = new TrainerProfile('Brock', 'Ash123@pokemail.com', 'Ash', 'Ketchem', 'pikachuiscool');

dbOperation.createTrainerProfile(Ash);

dbOperation.getTrainerProfile().then(res => {
    console.log(res.recordset);
})

/* app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)); */