const path = require('path')
const express = require('express')

const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

<<<<<<< HEAD
server.use('/api/v1/', routes)
=======
server.use('/api/v1', learnerRoutes)
>>>>>>> main

module.exports = server
