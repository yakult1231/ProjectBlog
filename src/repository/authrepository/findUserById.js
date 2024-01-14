const User = require('../userModel.js')


const finduserbyid = async (req, res) => {  
    try {
        await User.findById();
    }

    catch(err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Failed finding user'
        });
    }
}

module.exports = finduserbyid;