const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: "Unauthorized", error: error.message });
    }
}

module.exports = { adminMiddleware };