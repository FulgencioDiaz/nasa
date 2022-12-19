const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  
    name: String,
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: Number,
    affiliationDate: String,
    occupation: String,
    birthdate: String,
    neas_discovered: [{type: mongoose.Schema.Types.ObjectId, ref: 'Neas'}]

  }
 

  );

const User = mongoose.model('User', userSchema)

function validateUser(user){
  const schema = Joi.object({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().required(),
    picture: Joi.string().required(),
    affiliatedNumber: Joi.number().required(),
    affiliationDate: Joi.string().required(),
    occupation: Joi.string().required(),
    birthdate: Joi.string().required(),
  })

  return schema.validate(user)
}

exports.User = User
exports.uderSchema = userSchema
exports.validate = validateUser

/* module.exports = User ANTIGUO EXPORT  */