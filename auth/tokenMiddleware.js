const jwt = require("jsonwebtoken")

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if(token !== undefined) {
        if(token.startsWith('Bearer ')) {
            token = token.slice(7, token.length)
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err) {
                return res.status(401)
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(401).end()
    }
}

const createToken = (inputEmail) => {
    return jwt.sign({
        email: inputEmail},
        process.env.SECRET_KEY,
        {expiresIn: '1hr'})
}

module.exports = {checkToken, createToken}