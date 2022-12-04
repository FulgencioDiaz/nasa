const mongoose = require('mongoose')

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

module.exports = User