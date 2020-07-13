const jwt = require('jsonwebtoken')

module.exports = function createTokenFromUserHelper(user) {
    const token = jwt.sign(
        {
            email: user.email,
            uid: user._id
        },
        process.env.JWT_KEY,
        {
            expiresIn: "10days"
        }
    );
    return token;
}