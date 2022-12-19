const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

module.exports = function () {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a mongodb..."))
    .catch((err) => console.log("ERROR FATAL: ", err))
}

