import dotenv from 'dotenv';
const enviroment = process.env.NODE_ENV || 'development';
const envFile = `.env.${enviroment}`;
dotenv.config({
  path: envFile
});

const config = {
  Express: {
    Port: Number(process.env.EXPRESS_PORT) || 5000,
    Host: process.env.HOST
  },
  Database: {
    URI: process.env.DATABASE_URI,
    Port: Number(process.env.DATABASE_PORT)
  }
};

export default config;