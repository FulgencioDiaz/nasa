
const express = require('express')
const {Nea, validate} = require('../models/neas')
const router = express.Router()
const Joi = require('joi')

router.get('/', async (req, res) => {

if (req.query.from && req.query.to){ const result = await Nea.find({discovery_date: {$gte: req.query.from, $lte: req.query.to}})                                 
    
    .select('designation discovery_date period_yr ')
    .sort('discovery_date')

    res.send(result)
        
} else if (req.query.from) { const result = await Nea.find({discovery_date: {$gte: req.query.from}})                                 
    
    .select('designation discovery_date period_yr ')
    .sort('discovery_date')

    res.send(result)


} else if (req.query.to) { const result = await Nea.find({discovery_date: {$lte: req.query.to}})                                 
    
    .select('designation discovery_date period_yr ')
    .sort('discovery_date')

    res.send(result)


} else if (req.query.orbit_class) { const result = await Nea.find({orbit_class: req.query.orbit_class})                                 
    
    .select('designation period_yr ')
    .sort('discovery_date')

    res.send(result)


}})

router.post('/create', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let nea = new Nea(req.body)
    const newNea = await nea.save()

    res.send(newNea)
})
router.put('/edit/:designation', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const RP = req.params.designation.replaceAll("-"," ")
    res.send(await Nea.findOneAndUpdate({designation: RP}, req.body))
 

    
})

router.delete('/delete/:designation', async (req, res) => {
    const RP = req.params.designation.replaceAll("-"," ")
    res.send(await Nea.findOneAndDelete({designation: RP }, req.body))

   
})

module.exports = router