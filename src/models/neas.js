//SCHEMA - NEAS

const mongoose = require('mongoose');
const Joi = require('joi')

const neasSchema = new mongoose.Schema({
    designation: String,
    discovery_date: String,
    h_mag: Number,
    moid_au: Number,
    q_au_1: Number,
    q_au_2: Number,
    period_yr: Number,
    i_deg: Number,
    pha: String,
    orbit_class: String

});

function validateNea(neas){
    const schema = Joi.object({
        designation: Joi.string(),
        discovery_date: Joi.string(),
        h_mag: Joi.number(),
        moid_au: Joi.number(),
        q_au_1: Joi.number(),
        q_au_2: Joi.number(),
        period_yr: Joi.number(),
        i_deg: Joi.number(),
        pha: Joi.string(),
        orbit_class: Joi.string()
    })

    return schema.validate(neas)
}

//MODELS Y EXPORTAR MODULO

const Neas = mongoose.model('Neas', neasSchema)

module.exports = Neas

module.exports.validate = validateNea;