const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
    Title: { 
        type: String,
        required: true,
    },
    Body: {
        type: String,
        required : true,
    },
    Creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

module.exports = mongoose.model('blog', blogschema);