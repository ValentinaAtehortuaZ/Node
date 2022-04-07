const express = require('express')
const app = express()

require('dotenv').config()


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
    res.send('Hola, soy frailejon ')
  })

app.listen(process.env.PORT,function(){
    console.log("Servidor encendido")
})

