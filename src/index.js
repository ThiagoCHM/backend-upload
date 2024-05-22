require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async () => {
    return res.json({ mensagem: 'Bigorna Inflável não Afunda' })
})

app.listen(process.env.PORT)