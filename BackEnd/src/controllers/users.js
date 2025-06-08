const { User } = require("../database/models/users")

async function createUser(req, res) {

    const {
        nome,
        email,
        senha,
        tipo
    } = req.body

    try {
        const newUser = await User.create({
            nome,
            email,
            senha,
            tipo
        })

        return res.status(201).json({"Mensagem": "Usuário criado com sucesso"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "Erro": "Erro interno do servidor" })
    }

}

module.exports = {
    createUser
}