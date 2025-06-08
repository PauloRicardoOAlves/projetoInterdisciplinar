const { DataTypes } = require('sequelize')
const sequelize = require('../connection')

const Book = sequelize.define('Livro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'livros',
    timestamps: false
})

module.exports = {
    Book
}