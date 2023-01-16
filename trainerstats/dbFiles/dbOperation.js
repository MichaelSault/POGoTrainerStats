const { Train } = require('@mui/icons-material');
const config = require('./dbConfig'),
    sql = require('mssql');

const getTrainerProfile = async(trainerName) => {
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`SELECT * from TrainerProfile WHERE TrainerName = '${trainerName}'`);
        //console.log(employees);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}

const createTrainerProfile = async(TrainerProfile) => {
    console.log(TrainerProfile);
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`INSERT INTO TrainerProfile(TrainerName, Email, Firstname, Lastname, Password) VALUES (
            '${TrainerProfile.trainerName}', '${TrainerProfile.email}', '${TrainerProfile.firstName}', '${TrainerProfile.lastName}', '${TrainerProfile.password}'
        )`);
        console.log(TrainerProfile.trainerName, TrainerProfile.email, TrainerProfile.firstName, TrainerProfile.lastName, TrainerProfile.password);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}


module.exports = {
    createTrainerProfile,
    getTrainerProfile
}