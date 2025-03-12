const express = require('express')
const { app } = require('./booksRouter')

const router = express()

router.use('/', app)

module.exports = {
    router
}