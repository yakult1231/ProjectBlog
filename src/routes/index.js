const express = require('express');
const authRouter = require('./authRouter');
const blogRouter = require('./blogRouter')

const router = express.Router()

router.use('/auth', authRouter)
router.use('/blog', blogRouter)

module.exports = router;