const express = require('express');
const login = require('../services/login.js')
const register = require('../services/register.js')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)

module.exports = router;