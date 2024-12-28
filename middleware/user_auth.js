const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: "Unauthorized", error: error.message });
    }
}

module.exports = { userMiddleware };
