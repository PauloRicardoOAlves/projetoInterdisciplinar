const express = require('express')
const { getBook, addBook, getBookById, updateBook, deleteBook } = require('../controllers/books')

const app = express()

app.get('/livros', getBook)
app.get('/livros/:id', getBookById)
app.put('/livro/:id', updateBook)
app.post('/livro', addBook)
app.delete('/livro/:id', deleteBook)

module.exports = {
    app
}