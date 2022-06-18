const connectToMongo = require("./config/database");
const express = require('express')
const path = require('path')
var cors = require('cors')

connectToMongo();

const app = express()
const { PORT } = process.env;
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/item', require('./routes/itemRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

// app.get('/', (req, res) => {
//   res.json({ name: "Dibyendu" })
// })


if (process.env.NODE_ENV == "production") {

  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  })

}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})