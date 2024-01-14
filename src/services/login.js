// const express = require('express');
// const mongoose = require('mongoose')
// const cors = require('cors')
const bcrypt = require('bcrypt')
const User = require('../userModel.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async(req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if(!user) return res.status(404).json('Wrong password')
  
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) res.status(400).json('Wrong Password')
  
  const { password, ...userData} = user._doc
  
  const token = jwt.sign({ _id: userData._id}, process.env.TOKEN)
  const refreshToken = jwt.sign({ _id: userData._id}, process.env.REFRESH_TOKEN)
  res.status(200).json({ token: token, refreshToken: refreshToken, user: userData})
}

module.exports = login;

// app.post('/login', async (req, res) => {
  
//   })