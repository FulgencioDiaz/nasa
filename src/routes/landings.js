
const express = require('express')
const {Landing, validate} = require('../models/landings')
const router = express.Router()
const Joi = require('joi')

router.get('/', async (req, res) => {
  
    if((req.query.minimum_mass)){
        const landings = await Landing.find({mass: {$gte: parseInt(req.query.minimum_mass)}})
        .sort('mass name')
        .select('mass name')
        res.send(landings)
         
    } else if (req.query.from && req.query.to){ 
        const landings = await Landing.find({$and:[{fall: "Fell"}, {year: {$gte: req.query.from, $lte: req.query.to}}]})                                 
        
        .select('name mass year')
        .sort('year')  
        res.send(landings)


    } else if (req.query.from){ const landings = await Landing.find({$and:[{fall: "Fell"}, {year: {$gte: req.query.from}}]})
                                      
        .select('name mass year')
        .sort('year')
        res.send(landings)


    } else if (req.query.to){ const landings = await Landing.find({$and:[{fall: "Fell"}, {year: {$lte: req.query.to}}]})                                 
        
        .select('name mass year')
        .sort('-year')  
        res.send(landings)
}})


router.get('/mass/:mass', async (req, res) => {
   
    const landings = await Landing.find({mass: `${req.params.mass}`}).select('name mass')

    res.send(landings).status(200)

    console.log(landings)
    
})

router.get('/recclass/:recclass', async (req, res) => {
   
    const landings = await Landing.find({recclass: `${req.params.recclass}`})
                                  .select('name recclass')

    res.send(landings).status(200)

    console.log(landings)
    
})

 router.post('/create', async (req, res) => {

    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

     let landing = new Landing(req.body)
     const newLanding = await landing.save()

    res.send(newLanding)
 })

router.put('/edit/:id', async (req, res) => {

    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const landing = await Landing.findOneAndUpdate({id: `${req.params.id}`}, req.body)

    res.send(landing)
})

router.delete('/delete/:id', async (req, res) => {
    const landing = await Landing.findOneAndDelete({id: `${req.params.id}`}, req.body)

    res.send(landing)
})

module.exports = router