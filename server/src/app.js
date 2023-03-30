const express = require("express");
const path = require('path')
const cors = require('cors');
const morgan = require('morgan')

const planetRouter = require('./router/planets/planets.router');

const app = express();

app.use(morgan('tiny'))
app.use(cors({
    origin: 'http://localhost:3000',
}));


app.use(express.json());

app.use(planetRouter)

app.use(express.static(path.join(__dirname,'..','public')))
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'..','public','index.html'))
// })

module.exports = app;
