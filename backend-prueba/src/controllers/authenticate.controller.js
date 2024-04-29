const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const pool = require('../db')
const { config } = require('dotenv')
config()

const createUser = async (req, res, next) => {
  const { username, password, id_empleado } = req.body;

  // const saltRounds = 5;
  // const passwordHash = await bcrypt.hash(password, saltRounds);

  try{
    const user = [
      username,
      // passwordHash,
      password,
      id_empleado
    ]

    await pool.query("INSERT INTO users (username, password, id_empleado, role) VALUES ($1, $2, $3, 'empleado')", user)

    res.send('La cuenta ha sido registrada')
  }catch (error){
    next(error)
  }
}

const authentication = async (req, res, next) => {
  const { username, password } = req.body;

  const user = {username: username}

  try{
    const response = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password])

    if(response.rows.length == 0) return res.status(401).json({message: false})

    
    // const checkUser = async (password, hash) => {
    //   const match = await bcrypt.compare(password, hash)

    //   return match
    // }

    // const correct_password = await checkUser(password, response.rows[0].password)

    // if(!correct_password) return res.status(401).json({message: false})

    user.id_empleado = response.rows[0].id_empleado
    user.role = response.rows[0].role

    const accessToken = generateAccessToken(user)
  
    res.header('authorization', accessToken).json({
      message: {username: username, role: response.rows[0].role},
      token: accessToken
    })
  }catch (error){
    next(error)
  }
}

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, {expiresIn: '30m'})
}

const validateToken = (req, res, next) => {
  const accessToken = req.headers['authorization']
  if(!accessToken) res.send('Acceso denegado');

  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if(err){
      res.status(401).send('Acceso denegado, el token expiró o es incorrecto')
    }else{
      next()
    }
  })
}

module.exports = {
  authentication,
  createUser,
  validateToken
}