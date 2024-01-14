const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
// const cors = require('cors')
// const bcrypt = require('bycyrpt')
// const User = require('./userModel.js')
require('dotenv').config()

const app = express();

const dbUrl = process.env.DB_URL
const PORT = 8000;
mongoose.connect(dbUrl, { useNewUrlParser: true })
  .then(console.log('CONNECTED TO DATABASE'))
  .catch(err => console.log(err))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/data', async (req, res) => {

})

app.use(express.json())
app.use('/api', routes);




