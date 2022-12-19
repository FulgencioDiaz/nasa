const Joi = require('joi')
const mongoose = require('mongoose')

const landingSchema = new mongoose.Schema({
  name: String,
  id: Number,
  nametype: String,
  recclass: String,
  mass: Number,
  fall: String,
  year: String,
  reclat: Number,
  reclong: Number,
  geolocation: {
  latitude: Number, longitude: Number}
  });

const Landing = mongoose.model('Landing', landingSchema)


function validateLanding(landing){
  const schema = Joi.object({
    name: Joi.string().required(),
    id: Joi.number().required(),
    nametype: Joi.string().required(),
    recclass: Joi.string().required(),
    mass: Joi.number().required(),
    fall: Joi.string().required(),
    year: Joi.string().required(),
    reclat: Joi.number().required(),
    reclong: Joi.number().required(),
  
    })
  
  return schema.validate(landing)
}

exports.Landing = Landing
exports.landingSchema = landingSchema
exports.validate = validateLanding

