function blankValidation(req, res, next) {

    for (i in req.body) {
        if (!req.body[i]) {
            return res.status(400).json({ 'Erro': `o campo ${i} não pode estar em branco!` })
        }
    }

    next()
}

module.exports = {
    blankValidation
}