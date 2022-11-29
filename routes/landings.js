
const express = require('express')
const Landing = require('../models/landings')
const router = express.Router()

/* router.get('/', async (req, res) => {
    const landings = await Landing.find({})  

    res.send(landings) 
})
 */
router.get('/', async (req, res) => {

    console.log(req.query);
   
    const landings = await Landing.find({mass: {$gte: parseInt(req.query.minimum_mass)}})
                                 .sort('mass name')
                                 .select('mass name')

    res.send(landings)
    
})



/*  router.post('/', async (req, res) => {
     const landing​ = new Landing(req.body)

     const newLanding = await landing.save()

    res.send(newLanding)
 }) */

router.put('/:id', async (req, res) => {
    const landing = await Landing.findOneAndUpdate({_id: req.params.id}, req.body)

    res.send(landing)
})

router.delete('/:id', async (req, res) => {
    const landing = await Landing.findOneAndDelete({_id: req.params.id})

    res.send(landing)
})

module.exports = router