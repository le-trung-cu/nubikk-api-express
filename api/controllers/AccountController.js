const bcrypt = require('bcrypt')
const User = require('../models/user');
const createTokenFromUserHelper = require('../helpers/createTokenFromUserHelper');
const createUserHelperAsync = require('../helpers/createUserHelper');

async function signup(req, res, next) {
    try {
        const existsUser = await User.exists({ email: req.body.email });
        if (existsUser) {
            return res.status(409).json({
                message: "Mail exists"
            })
        } else {
            const { email, password, address } = req.body;

            let newUser = await createUserHelperAsync(email, password, address);
            console.log(newUser)
            await newUser.save();

            const token = createTokenFromUserHelper(newUser);

            return res.status(201).json({
                message: "User created",
                user: {
                    token,
                    address: newUser.address,
                    email: newUser.email
                }
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error });
    }
}

async function signin(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        const compareResult = await bcrypt.compare(req.body.password, user.password);
        if (!compareResult) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }

        const token = createTokenFromUserHelper(user);

        return res.status(200).json({
            message: "Auth successfull",
            user: {
                token,
                address: user.address,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error });
    }

}

const AccountController = {
    signup,
    signin
}

module.exports = AccountController;