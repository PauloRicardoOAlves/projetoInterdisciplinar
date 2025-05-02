let { library } = require("../database/database")
const { Book } = require('../database/models/books')


async function getBook(req, res) {
    try {
        const allBooks = await Book.findAll({
            raw: true
        })

        return res.status(200).json(allBooks)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ Mensagem: 'Erro interno do servidor' })
    }
}

async function getBookById(req, res) {
    const { id } = req.params

    try {
        const bookById = await Book.findOne({
            where: {
                id: id
            }
        })

        if (!bookById) {
            return res.status(404).json({ 'Erro': 'Nenhum livro encontrado!' })
        }

        return res.status(200).json(bookById)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Mensagem: 'Erro interno no servidor' })
    }
}

async function addBook(req, res) {

    const {
        titulo,
        autor,
        descricao,
        genero,
        quatidade
    } = req.body

    try {
        const newBook = await Book.create({
            titulo,
            autor,
            descricao,
            genero,
            quatidade
        })

        return res.status(201).json({ Mensagem: 'Livro inserido com sucesso' })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Mensagem: 'Erro interno do servidor' })
    }
}


async function updateBook(req, res) {

    const { id } = req.params
    const {
        titulo,
        autor,
        descricao,
        genero,
        quantidade
    } = req.body
    
    try {
        
        const book = await Book.update(
            {
                titulo: titulo,
                autor: autor,
                descricao: descricao,
                genero: genero,
                quantidade: quantidade
            },
            {
                where: { id: id }
            }
        )

        if(!book[0]){
            console.log('aqui')
            return res.status(404).json({erro: 'Livro não encontrado!'})
        }
        
        return res.status(200).json(book)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'Erro': 'Erro interno do servidor!' })
    }

}


async function deleteBook(req, res) {
    const { id } = req.params

    try {
        const deleteBook = await Book.destroy(
            {
                where: {id: id}
            }
        )

        if(!deleteBook){
            return res.status(404).json({'Erro': 'Livro não encontrado!'})
        }

        return res.status(200).json({'Mensagem': 'Livro excluído!'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({'Erro': 'Erro interno do servidor'})
    }
    

}

module.exports = {
    getBook,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}