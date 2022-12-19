const mongoose = require('mongoose')
const Joi = require('joi')

const neaSchema = new mongoose.Schema({
  
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

const Nea = mongoose.model('Nea', neaSchema)

function validateNea(nea){
  const schema = Joi.object({
    designation: Joi.string().required(),
    discovery_date: Joi.string().required(),
    h_mag: Joi.number().required(),
    moid_au: Joi.number().required(),
    q_au_1: Joi.number().required(),
    q_au_2: Joi.number().required(),
    period_yr: Joi.number().required(),
    i_deg: Joi.number().required(),
    pha: Joi.string().required(),
    orbit_class: Joi.string().required(),
  })


  return schema.validate(nea)
}

exports.Nea = Nea
exports.neaSchema = neaSchema
exports.validate = validateNea

/*  module.exports = Nea ANTIGUO EXPORT */