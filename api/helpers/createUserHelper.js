const bcrypt = require('bcrypt')
const User = require('../models/user')
const mongoose = require('mongoose')

async function createUserHelperAsync(email, password, address) {
    const hash = await bcrypt.hash(password, 10);

    return new User({
        _id: new mongoose.Types.ObjectId(),
        email,
        password: hash,
        address
    });
}

module.exports = createUserHelperAsync

