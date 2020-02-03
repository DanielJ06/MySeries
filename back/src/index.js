const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

app.use(cors())

mongoose.connect('mongodb+srv://daniel:daniel06@cluster0-ghdgm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

app.use(routes)

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.listen(3333)