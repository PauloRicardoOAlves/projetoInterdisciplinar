const express = require('express')
const { blankValidation, login } = require('../middlewares/middlewares')
const { createUser } = require('../controllers/users')

const userRouter = express()

userRouter.post('/cadastrar', blankValidation, createUser)
userRouter.post('/login', blankValidation, login)

module.exports = {
    userRouter
}