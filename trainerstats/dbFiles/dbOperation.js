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

const getGameplayEntry = async(TrainerProfile) => {
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`SELECT * from GameplayMedals WHERE TrainerID = '${TrainerProfile.TrainerID}'`);
        //console.log("Value returned by query:")
        //console.log(trainers);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}

const getStatHistory = async(StatQuery) => {
    try {
        
        console.log("Column To Query:")
        console.log(StatQuery.Stat);
        console.log(StatQuery.Stat2);
        let pool = await sql.connect(config);
        let statHistory = await pool.request().query(
            `SELECT ${StatQuery.Stat}, ${StatQuery.Stat2}, TrainerStats.Date from TrainerStats 
            INNER JOIN GameplayMedals ON TrainerStats.EntryID = GameplayMedals.EntryID 
            INNER JOIN TypeMedals ON GameplayMedals.EntryID = TypeMedals.EntryID 
            WHERE TrainerStats.TrainerID = '${StatQuery.TrainerID}' 
            ORDER BY TrainerStats.Date`
        );
        console.log("Query Returned");
        return statHistory;
    }
    catch(error) {
        console.log(error);
    }
}

const getTrainerEntry = async(TrainerProfile) => {
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`SELECT * from TrainerStats WHERE TrainerID = '${TrainerProfile.TrainerID}'`);
        console.log("Value returned by query:")
        console.log(trainers);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}

const getTypeEntry = async(TrainerProfile) => {
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`SELECT * from TypeMedals WHERE TrainerID = '${TrainerProfile.TrainerID}'`);
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
        let trainers = await pool.request().query(`INSERT INTO GameplayMedals(TrainerID, Date, Kanto, Collector, Scientist, Breeder, Sightseer, PikachuFan, Johto, GymLeader, PokemonRanger, Idol, GreatLeague, Cameraman, Purifier, Triathlete, RisingStar, Picknicker, VivillonCollector, Jogger, Backpacker, Fisher, BattleGirl, Youngster, Unown, BerryMaster, Hoenn, Gentleman, Sinnoh, UltraLeagueVeteran, MasterLeagueVeteran, Unova, Hero, Kalos, Alola, Successor, RaidExpert, AceTrainer, Champion, BattleLegend, Pilot, UltraHero, RisingStarDuo, MegaEvolutionGuru, Hisui, BestBuddy, Galar, FriendFinder, TinyPokemonCollector, JumboPokemonCollector, Wayfarer) VALUES (
            001, '2022-02-22', '${GameplayEntry.Kanto}', '${GameplayEntry.Collector}', '${GameplayEntry.Scientist}', '${GameplayEntry.Breeder}', '${GameplayEntry.Sightseer}', '${GameplayEntry.PikachuFan}', '${GameplayEntry.Johto}', '${GameplayEntry.GymLeader}', '${GameplayEntry.PokemonRanger}', '${GameplayEntry.Idol}','${GameplayEntry.GreatLeague}', '${GameplayEntry.Cameraman}', '${GameplayEntry.Purifier}', '${GameplayEntry.Triathlete}', '${GameplayEntry.RisingStar}', '${GameplayEntry.Picknicker}', '${GameplayEntry.VivillonCollector}', '${GameplayEntry.Jogger}', '${GameplayEntry.Backpacker}', '${GameplayEntry.Fisher}', '${GameplayEntry.BattleGirl}', '${GameplayEntry.Youngster}', '${GameplayEntry.Unown}', '${GameplayEntry.BerryMaster}', '${GameplayEntry.Hoenn}', '${GameplayEntry.Gentleman}', '${GameplayEntry.Sinnoh}', '${GameplayEntry.UltraLeague}', '${GameplayEntry.MasterLeague}', '${GameplayEntry.Unova}', '${GameplayEntry.Hero}', '${GameplayEntry.Kalos}', '${GameplayEntry.Alola}', '${GameplayEntry.Successor}', '${GameplayEntry.RaidExpert}', '${GameplayEntry.AceTrainer}', '${GameplayEntry.Champion}', '${GameplayEntry.BattleLegend}', '${GameplayEntry.Pilot}', '${GameplayEntry.UltraHero}','${GameplayEntry.RisingStarDuo}', '${GameplayEntry.MegaEvolutionGuru}', '${GameplayEntry.Hisui}', '${GameplayEntry.BestBuddy}', '${GameplayEntry.Galar}', '${GameplayEntry.FriendFinder}', '${GameplayEntry.TinyPokemonCollector}', '${GameplayEntry.JumboPokemonCollector}', '${GameplayEntry.Wayfarer}'
        )`);
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
        let trainers = await pool.request().query(`INSERT INTO TypeMedals(TrainerID, Date, Schoolkid, BlackBelt, BirdKeeper, PunkGirl, RuinManiac, Hiker, BugCatcher, HexManiac, RailStaff, Kindler, Swimmer, Gardener, Rocker, Psychic, Skier, DragonTamer, Delinquent, FairyTaleGirl) VALUES (
            001, '2022-02-22', '${TypeEntry.Schoolkid}', '${TypeEntry.BlackBelt}', '${TypeEntry.BirdKeeper}', '${TypeEntry.PunkGirl}', '${TypeEntry.RuinManiac}','${TypeEntry.Hiker}', '${TypeEntry.BugCatcher}', '${TypeEntry.HexManiac}', '${TypeEntry.RailStaff}', '${TypeEntry.Kindler}', '${TypeEntry.Swimmer}', '${TypeEntry.Gardener}', '${TypeEntry.Rocker}', '${TypeEntry.Psychic}','${TypeEntry.Skier}', '${TypeEntry.DragonTamer}', '${TypeEntry.Delinquent}', '${TypeEntry.FairyTaleGirl}'
        )`);
        //console.log(TypeEntry.trainerName, TypeEntry.email, TypeEntry.firstName, TypeEntry.lastName, TypeEntry.password);
        return trainers;
    }
    catch(error) {
        console.log(error);
    }
}

const createTrainerEntry = async(TrainerStatEntry) => {
    console.log(TrainerStatEntry);
    try {
        let pool = await sql.connect(config);
        let trainers = await pool.request().query(`INSERT INTO TrainerStats(TrainerID, Date, Caught, Seen, DistanceWalked, PokemonCaught, PokestopsVisited, TrainerLevel, TotalXP) VALUES (
            005, '2022-02-22', '${TrainerStatEntry.Caught}', '${TrainerStatEntry.Seen}', '${TrainerStatEntry.DistanceWalked}', '${TrainerStatEntry.PokemonCaught}', '${TrainerStatEntry.PokestopsVisited}','${TrainerStatEntry.TrainerLevel}', '${TrainerStatEntry.TotalXP}'
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
    getGameplayEntry,
    getStatHistory,
    getTrainerProfile,
    getTrainerEntry,
    getTypeEntry,
    createGameplayEntry,
    createTypeEntry,
    createTrainerEntry
}