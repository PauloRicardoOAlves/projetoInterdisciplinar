const { DataTypes } = require('sequelize')
const sequelize = require('../connection')


const User = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING
    }
},{
    tableName: 'usuarios',
    timestamps: false
})


module.exports = {
    User
}