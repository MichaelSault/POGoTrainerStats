const config = require('./dbConfig'),
    sql = require('mssql');

const getTrainerProfile = async() => {
    try {
        let pool = await sql.connect(config);
        let trainer = pool.request().query("SELECT * from Trainers")
        console.log(trainer);
        return trainer;
    }
    catch(error) {
        console.log(error);
    }
}

const createTrainerProfile = async(TrainerProfile) => {
    try {
        let pool = await sql.connect(config);
        let trainer = pool.request().query(`INSERT INTO Trainers VALUES ('${TrainerProfile.TrainerName}', '${TrainerProfile.Email}', '${TrainerProfile.Firstname}', '${TrainerProfile.Lastname}', '${TrainerProfile.Password}')`)
        console.log(trainer);
        return trainer;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    createTrainerProfile,
    getTrainerProfile
}