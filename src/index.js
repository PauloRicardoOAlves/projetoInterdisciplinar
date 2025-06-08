require('dotenv').config()


const express = require('express')
const { router } = require('./router/router')
const sequelize = require('./database/connection')

const app = express()

app.use(express.json())

app.use(router)

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados!');
  })
  .catch(err => {
    console.error('Erro ao sincronizar:', err);
  });

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Banco de dados conectado com sucesso!')

        app.listen(process.env.PORT, () => {
            console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
        })

    } catch (error) {
        console.log('Falha ao iniciar o servidor: ', error);
    }
}

startServer()