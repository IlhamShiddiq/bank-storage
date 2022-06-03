const express = require('express')
const app = express()

const CONFIG = require('./globals/config.js')
const routes = require('./routes/general.js')

app.use('/api/', routes)

app.listen(CONFIG.port, () => {
    console.log(`Server is running on port ${CONFIG.port}`)
})
