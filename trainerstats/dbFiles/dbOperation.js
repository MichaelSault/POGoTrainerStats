const { Train } = require('@mui/icons-material');
const config = require('./dbConfig'),
    sql = require('mssql');

const getTrainerProfile = async(TrainerProfile) => {
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`SELECT * from TrainerProfile WHERE Email = '${TrainerProfile.Email}'`);
        console.log("Value returned by query:")
        console.log(trainers);
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

const createGameplayEntry = async(GameplayEntry) => {
    console.log(GameplayEntry);
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`INSERT INTO GameplayMedals VALUES (
            '${GameplayEntry.Kanto}', '${GameplayEntry.Collector}', '${GameplayEntry.Scientist}', '${GameplayEntry.Breeder}', '${GameplayEntry.Sightseer}', '${GameplayEntry.PikachuFan}', '${GameplayEntry.Johto}', '${GameplayEntry.GymLeader}', '${GameplayEntry.PokemonRanger}', '${GameplayEntry.Idol}','${GameplayEntry.GreatLeague}', '${GameplayEntry.Cameraman}', '${GameplayEntry.Purifier}', '${GameplayEntry.Triathlete}', '${GameplayEntry.RisingStar}', '${GameplayEntry.Picknicker}', '${GameplayEntry.VivillonCollector}', '${GameplayEntry.Jogger}', '${GameplayEntry.Backpacker}', '${GameplayEntry.Fisher}', '${GameplayEntry.BattleGirl}', '${GameplayEntry.Youngster}', '${GameplayEntry.Unown}', '${GameplayEntry.BerryMaster}', '${GameplayEntry.Hoenn}', '${GameplayEntry.Gentleman}', '${GameplayEntry.Sinnoh}', '${GameplayEntry.UltraLeagueVeteran}', '${GameplayEntry.MasterLeagueVeteran}', '${GameplayEntry.Unova}', '${GameplayEntry.Hero}', '${GameplayEntry.Kalos}', '${GameplayEntry.Alola}', '${GameplayEntry.Successor}', '${GameplayEntry.RaidExpert}', '${GameplayEntry.AceTrainer}', '${GameplayEntry.Champion}', '${GameplayEntry.BattleLegend}', '${GameplayEntry.Pilot}', '${GameplayEntry.UltraHero}','${GameplayEntry.RisingStarDuo}', '${GameplayEntry.MegaEvolutionGuru}', '${GameplayEntry.Hisui}', '${GameplayEntry.BestBuddy}', '${GameplayEntry.Galar}', '${GameplayEntry.FriendFinder}', '${GameplayEntry.TinyPokemonCollector}', '${GameplayEntry.JumboPokemonCollector}', '${GameplayEntry.Wayfarer}'
        )`);
        //console.log(GameplayEntry.trainerName, GameplayEntry.email, GameplayEntry.firstName, GameplayEntry.lastName, GameplayEntry.password);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}

const createTypeEntry = async(TypeEntry) => {
    console.log(TypeEntry);
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`INSERT INTO TypeMedals(Schoolkid, BlackBelt, BirdKeeper, PunkGirl, RuinManiac, Hiker, BugCatcher, HexManiac, RailStaff, Kindler, Swimmer, Gardener, Rocker, Psychic, Skier, DragonTamer, Delinquent, FairyTaleGirl) VALUES (
            '${TypeEntry.Schoolkid}', '${TypeEntry.BlackBelt}', '${TypeEntry.BirdKeeper}', '${TypeEntry.PunkGirl}', '${TypeEntry.RuinManiac}','${TypeEntry.Hiker}', '${TypeEntry.BugCatcher}', '${TypeEntry.HexManiac}', '${TypeEntry.RailStaff}', '${TypeEntry.RuinManiac}','${TypeEntry.Kindler}', '${TypeEntry.Swimmer}', '${TypeEntry.Gardener}', '${TypeEntry.Rocker}', '${TypeEntry.Psychic}','${TypeEntry.Skier}', '${TypeEntry.DragonTamer}', '${TypeEntry.Delinquent}', '${TypeEntry.FairyTailGirl}'
        )`);
        //console.log(TypeEntry.trainerName, TypeEntry.email, TypeEntry.firstName, TypeEntry.lastName, TypeEntry.password);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}


module.exports = {
    createTrainerProfile,
    getTrainerProfile,
    createGameplayEntry,
    createTypeEntry
}