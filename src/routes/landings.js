//RUTAS DE LANDINGS

const asyncRoutes = require('../middleware/async')
const Landings = require('../models/landings')
const express = require('express')
const router = express.Router()
const winston = require('winston')

//1_GET_NOMBRE Y MASA DE OBJETOS CON MASA SUPERIOR A LA ESPECIFICADA.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/landings/mass/minimo/50

router.get('/mass/minimo/:mass', async (req, res) => {
    
    res.send (await Landings.find({mass: {$gte: `${req.params.mass}`}}).select('name mass'))
    
})

//2_GET_OBTENER NOMBRE Y MASA DE LOS METEORITOS CON UNA MASA CONCRETA ESPECIFICADA.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/landings/mass/21

router.get('/mass/:mass', async (req, res) => {
    
    res.send (await Landings.find({mass: `${req.params.mass}`}).select('name mass'))

})

//3_GET_OBTENER NOMBRE Y CLASE DE LOS METEORITOS CON UNA CLASE CONCRETA ESPECIFICADA.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/landings/class/H6

router.get('/class/:recclass', async (req, res) => {
    
    res.send (await Landings.find({recclass: `${req.params.recclass}`}).select('name recclass'))

})

//4_GET_OBTENER NOMBRE, MASA Y FECHA DE LOS METEORITOS CAIDOS EN DETERMINADAS FECHAS.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/landings?from=1985&to=2022

router.get('/', async (req, res) => {
   

    if (req.query.from && req.query.to){
        const result =  await Landings.find({year: {$gt: req.query.from, $lt: req.query.to}})
        .select('name mass year').sort('year')
        res.send(result)

    }
})

//5_POST_CREAR UN NUEVO LANDING EN LA BD.

router.post('/create', async (req, res) => {
    const landing = new Landings(req.body) 
    const newLanding = await landing.save()
    res.send(newLanding)
    winston.info('Nuevo Landing añadido a la base de datos.')
})

//6_PUT_EDITAR UN LANDING, BUSQUEDA POR ID.

router.put('/edit/:id', async (req, res) => {
    const landing = await Landings.findOneAndUpdate({id: req.params.id}, req.body)
    res.send(landing)
    winston.info(`Editado Landing con id: ${req.params.id}`)
})

//6_DELETE_BORRAR UN LANDING, BUSQUEDA POR ID.

router.delete('/delete/:id', async (req, res) => {
    const landing = await Landings.findOneAndDelete({id: req.params.id})
    res.send(landing)
    winston.info(`Eliminado Landing con id: ${req.params.id}`)
})

module.exports = router