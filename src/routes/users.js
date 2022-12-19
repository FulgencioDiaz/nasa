//RUTAS DE USERS

const asyncRoutes = require('../middleware/async')
const winston = require('winston')
const Users = require('../models/users')
const express = require('express')
const router = express.Router()

//1_GET_OBTERNER UNA LISTA DE TODOS LOS USUARIOS.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/users/all

router.get('/all', async (req,res) => {
    const result = await Users.find({})
        res.send(result)
}
)

//2_GET_OBTENER UN USARIO POR E-MAIL.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/users?email=allamas@thebridgeschool.es

router.get('/', async (req,res) => {
    if(req.query.email){
        const result = await Users.find({email: req.query.email})
        res.send(result) 
    }
})

//3_POST_CREAR UN NUEVO USUARIO.

router.post('/create', async (req, res) => {
    const user = new Users(req.body) 
    const newuser = await user.save()
    res.send(newuser)
    winston.info('Nuevo usuario añadido a la base de datos.')
})

//4_PUT_EDITAR UN USARIO, SELECCIONAR POR E-MAIL.

router.put('/edit/:email', async (req, res) => {
    const user = await Users.findOneAndUpdate({email: req.params.email}, req.body)
    res.send(user)
    winston.info(`Editado usuario con email: ${req.params.email}`)
})

//5_DELETE_ELIMINAR UN USUARIO, SELECCIONAR POR E-MAIL.

router.delete('/delete/:email', async (req, res) => {
    const user = await Users.findOneAndDelete({email: req.params.email})
    res.send(user)
    winston.info(`Eliminado usuario con email: ${req.params.email}`)
})

module.exports = router