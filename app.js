const landings = require('./routes/landings')
const neas = require('./routes/neas')
const users = require('./routes/users')

const express = require('express')

const app = express()

require('./db')()

app.use(express.json())

app.use('/api/astronomy/landings', landings)
app.use('/api/astronomy/neas', neas)
app.use('/api/users', users)


app.get('/ping', (req, res) => {
    res.send('pong')
})

const port = 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))