const express = require('express')
const { bookRouter } = require('./booksRouter')

const router = express()

router.use('/', bookRouter)


module.exports = {
    router
}