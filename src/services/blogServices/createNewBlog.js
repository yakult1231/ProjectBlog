const createblog = require('../../repository/Blog/createblog');

const createNewBlog = async (req, res) => {
    // try {
        console.log(req.user);
        const blog = await createblog(
            req.body.Title,
            req.body.Content,
            req.user,
        );
        
        if (!blog) throw new Error();
        return res.status(201).json({
            message: 'Blog Created Successfully',
            data: blog
        })  
    // }

    // catch(err) {
        console.log(err.message)
        return res.status(500).json({
            message: 'Failed creating blog'
        });
    // }
}

module.exports = createNewBlog