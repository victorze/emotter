require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const ORIGIN = process.env.ORIGIN

module.exports = {
  MONGODB_URI,
  PORT,
  ORIGIN,
}
