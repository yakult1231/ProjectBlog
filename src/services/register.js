const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const login = require('./login');
const User = require('../userModel.js')


// const user = new mongoose.Schema({
//     username: { 
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required : true,
//     },
// });

const register = async (req, res) => {
    try {
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ 
            ...req.body,
            password: hashedPassword
        })
        await user.save();
        if(!user) throw new Error();
        return login(req, res);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Failed creating user'
        });
    }
}

module.exports = register;