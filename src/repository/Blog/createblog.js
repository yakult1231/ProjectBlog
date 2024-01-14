const Blog = require('../../blogModel')

const createblog = async (Title, Body, Creator) => {
    // try {
        const blog = new Blog({ 
            Title: Title,
            Body: Body,
            Creator: Creator,
        })

        await blog.save()
        return blog;
    // }
    // catch (err) {
        return null
    // }
}

module.exports = createblog;