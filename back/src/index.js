const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

mongoose.connect('mongodb+srv://daniel:daniel06@cluster0-ghdgm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

app.use(routes)

app.listen(3333)