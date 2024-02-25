const jwt = require('jsonwebtoken');
const finduserbyid = require('../repository/authrepository/findUserById')


const isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({
        message: 'Not logged in'
    });

    try {
        const { userId } = jwt.verify(token, process.env.TOKEN);
        console.log(userId);
        const user = await finduserbyid(userId);
        if(!user) return res.status(404).json({
            message: "User not found"
        });

        const { password, ...userData } = user;
        req.user = userData;
        next()
    }

    catch(err) {
        console.log(err.message);
        return res.status(401).json({
            message: 'Token Expired'
        });
    }
}

module.exports = isAuthenticated;