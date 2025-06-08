const jwt = require('jsonwebtoken')
const { User } = require("../database/models/users")

function blankValidation(req, res, next) {
    for (i in req.body) {
        if (!req.body[i]) {
            return res.status(400).json({ 'Erro': `o campo ${i} não pode estar em branco!` })
        }
    }

    next()
}

async function login(req, res, next) {
    try {
        const { email, senha } = req.body;

        const user = await User.findOne({
            where: { email }
        })

        if (!user || user.senha != senha) {
            return res.status(400).json({ Erro: 'E-mail ou senha inválido!' })
        }

        const token = jwt.sign(
            { email: user.email, id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        return res.json({ token })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ Erro: 'Erro interno do servidor' })
    }
}

async function tokenValidation(req, res, next) {

    const authHeader = req.headers.authorization

    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token) {
        return res.status(403).json({ error: 'Token não fornecido.' });
    }


    try {
        const dados = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = dados;

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({Erro: 'Token inválido.'});
    }
}

module.exports = {
    blankValidation,
    login,
    tokenValidation
}