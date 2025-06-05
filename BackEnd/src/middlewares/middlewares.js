function blankValidation(req, res, next) {
    for (i in req.body) {
        if (!req.body[i]) {
            return res.status(400).json({ 'Erro': `o campo ${i} não pode estar em branco!` })
        }
    }

    next()
}

async function login(req, res, next) {

    const user = await Book.findOne({
            where: {
                id: id
            }
        })

        if (!bookById) {
            return res.status(404).json({ 'Erro': 'Nenhum usuário encontrado!' })
        }

    if (user) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        return res.json({ token })
    }
    return res.status(401).send('Credenciais inválidas.');
}

module.exports = {
    blankValidation,
    login
}