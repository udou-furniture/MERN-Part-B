const jwt = require("jsonwebtoken")

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || 
                req.headers['authorization'] ||
                ""

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    success: false,
                    message: "Token is not valid"
                })
            } else {
                req.decoded = decoded
                console.log(decoded)
                next()
            }
        })
    } else {
        return res.status(401).json({
            success: false,
            message: "Authorisation token has not been supplied"
        })
    }
}

module.exports = {checkToken: checkToken}