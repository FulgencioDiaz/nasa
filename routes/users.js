
const express = require('express')
const User = require('../models/users')
const router = express.Router()


/* router.get('/', async (req, res) => {
   
    const users = await User.find({})

    res.send(users).status(200)

    console.log(users)
    
}) */

 router.get('/', async (req, res) => {

if (req.query.email){ const result = await User.find({email: req.query.email})                                 
    
    .select('email')


    res.send(result)
  
}


})

router.post('/create', async (req, res) => {
    let user = new User(req.body)
    const newUSer = await user.save()

    res.send(newUSer)
    console.log(res.send(newUSer))
})


router.put('/edit/:email', async (req, res) => {
    const result =  await User.findOneAndUpdate({email: `${req.params.email}`}, req.body)

    res.send(result)
 

    
})
router.delete('/delete/:email', async (req, res) => {
    const result = await User.findOneAndDelete({email: `${req.params.email}`}, req.body)

    res.send(result) 
})


module.exports = router