module.exports = {
    HOST: "localhost",
    PORT: "1433",
    USER: "TSAdmin",
    PASSWORD: "temp",
    DB: "TrainerStats",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };