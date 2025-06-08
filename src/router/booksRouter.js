const express = require('express')
const { getBook, addBook, getBookById, updateBook, deleteBook } = require('../controllers/books')
const { blankValidation } = require('../middlewares/middlewares')

const bookRouter = express()

bookRouter.post('/livro', blankValidation, addBook)
bookRouter.get('/livros', getBook)
bookRouter.get('/livros/:id', getBookById)
bookRouter.put('/livro/:id', blankValidation, updateBook)
bookRouter.delete('/livro/:id', deleteBook)

module.exports = {
    bookRouter
}