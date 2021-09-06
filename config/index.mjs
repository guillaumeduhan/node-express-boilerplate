const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URI,
}
