const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const taskRoutes = require('./routes/backend.routes.js')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes)
app.use(express.urlencoded({extended: false}))

app.use((err, req, res, next) => {
  return res.json(
    {...err}
  )
})

app.listen(3000)
console.log('Server on port', 3000)