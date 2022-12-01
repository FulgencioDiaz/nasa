const mongoose = require('mongoose')

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

module.exports = Nea