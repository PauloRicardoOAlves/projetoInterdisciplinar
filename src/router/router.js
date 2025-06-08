const express = require('express')
const { bookRouter } = require('./booksRouter')
const { userRouter } = require('./usersRouter')
const { tokenValidation } = require('../middlewares/middlewares')

const router = express()

router.use('/', userRouter)
router.use(tokenValidation)
router.use('/', bookRouter)


module.exports = {
    router
}