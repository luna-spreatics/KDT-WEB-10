require('dotenv').config();
// console.log(process.env.DB_USERNAME);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_DATABASE);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_DIALECT);

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = { development };
