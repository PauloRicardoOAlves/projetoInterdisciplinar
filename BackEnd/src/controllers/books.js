let { library } = require("../database/database")



function getBook(req, res) {
    res.status(200).json(library)
}

function getBookById(req, res) {
    const { id } = req.params

    const filter = library.filter((e) => {
        return e.id == id
    })

    if (filter.length > 0) {
        res.status(200).json(filter[0])
    } else {
        res.status(404).json("Livro não encontrado")
    }
}

function addBook(req, res) {

    const book = req.body
    library.push(book)

    res.status(200).json({"Mensagem": "Livro inserido com sucesso!"})
}

function updateBook(req, res) {

    const { id } = req.params
    const {
        titulo,
        autor,
        descricao,
        genero,
        quantidade
    } = req.body

    let book = library.find(e => {
        return e.id == id
    })

    if(!book){
        return res.status(404).json({"Mensagem": "Livro não encontrado"})
    }

    book.titulo = titulo
    book.autor = autor
    book.descricao = descricao
    book.genero = genero
    book.quantidade = Number(quantidade)

    return res.status(200).json({ "Mensagem": "Livro atualizado com sucesso!" })
}

function deleteBook(req, res) {
    const {id} = req.params

    let book = library.filter(e => {
        return e.id == id
    })

    if (book.length == 0){
        return res.status(404).json({"Mensagem": "Registro não encontrado"})
    }

    library = library.filter(e => {
        return e.id != id
    })

    return res.status(200).json({"Mensagem": "Registro apagado com sucesso!"})

}

module.exports = {
    getBook,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}