//BASE DE DATOS

const winston = require('winston')
const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true})
   .then(() => winston.info("Conectado a MongoDB/nasa_DB..."))
}