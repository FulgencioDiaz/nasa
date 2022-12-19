//SCHEMA - LANDINGS

const mongoose = require('mongoose');
const Joi = require('joi')

const landingsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    nametype: String,
    recclass: String,
    mass: Number,
    fall: String,
    year: Number, 
    reclat: Number,
    reclong: Number,
    geolocation: { "latitude": Number, "longitude": Number }

});

function validateLanding(landings){
    const schema = Joi.object({
        name: Joi.string(),
        id: Joi.number(),
        nametype: Joi.string(),
        recclass: Joi.string(),
        mass: Joi.number(),
        fall: Joi.string(),
        year: Joi.number(),
        reclat: Joi.number(),
        reclong: Joi.number(),
        geolocation: { latitude: Joi.number(), longitude: Joi.number()}
    })

    return schema.validate(landings)
}

//MODELS Y EXPORTAR MODULO

const Landings = mongoose.model('Landings', landingsSchema)

module.exports = Landings

module.exports.validate = validateLanding;