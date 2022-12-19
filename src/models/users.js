//SCHEMA - USERS

const mongoose = require('mongoose')
const Joi = require('joi')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: {
        type: Number,
        unique: true,
        required: true
    },
    affiliationDate: Date,
    occupation: String,
    birthdate: Date,
    neas_discovered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'neas'
    }]
    
});

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        nickname: Joi.string(),
        email: Joi.string(),
        picture: Joi.string(),
        affiliatedNumber: Joi.number().required(),
        affiliationDate: Joi.string(),
        occupation: Joi.string(),
        birthdate: Joi.string(),
        neas_discovered: Joi.array()
    })

    return schema.validate(user)
}

//MODELS Y EXPORTAR MODULO

const Users = mongoose.model('Users', usersSchema)

module.exports = Users

module.exports.validate = validateUser  