const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

// These two keys shall be imported by:
// -> ./routes/user.js
// -> ./routes/admin.js
// -> ./middleware/user_auth.js
// -> ./middleware/admin_auth.js

module.exports = {
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
};