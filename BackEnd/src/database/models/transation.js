const {DataTypes} = require('sequelize')
const sequelize = require('../connection')

const Transaction = sequelize.define('Emprestimo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data_retirada: {
        type: DataTypes.TIME
    },
    data_devolucao: {
        type: DataTypes.TIME
    }
}, {
    tableName: 'emprestimos',
    timestamps: false
})

module.exports = {
    Transaction
}