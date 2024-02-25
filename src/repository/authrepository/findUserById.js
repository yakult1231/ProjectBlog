const User = require('../../userModel.js')


const finduserbyid = async (id) => {  
    try {
        const user = await User.findById(id);
        return user;
    }

    catch(err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Failed finding user'
        });
    }
}

module.exports = finduserbyid;