const landings = require('./routes/landings')
const express = require('express')

const app = express()

require('./db')()

app.use(express.json())

app.use('/api/astronomy/landings', landings)




app.get('/ping', (req, res) => {
    res.send('pong')
})

const port = 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))