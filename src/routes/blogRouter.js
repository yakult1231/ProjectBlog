const express = require('express');
const createblog = require('../services/blogServices/createNewBlog')
const isAuthenticated = require('../middlewares/isAuthenticated')
const router = express.Router()

router.post('/createblog', isAuthenticated,  createblog)

module.exports = router;