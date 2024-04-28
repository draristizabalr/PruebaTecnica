const { Router } = require('express');
const pool = require('../db');
const { 
  getRows,
  createRow,
  updateRow,
  deleteRow
} = require('../controllers/process.controller');
const { 
  authentication,
  validateToken,
  createUser
 } = require('../controllers/authenticate.controller')

const router = Router();

// Welcome API page
router.get('/', (req, res) => {
  res.send('¡Welcome to the backend API!')
});

// Autenticación de usuario
router.post('/login', authentication)

router.post('/register', createUser)

// Servicios CRUD para tabla empleados
router.get('/:table', validateToken, getRows);

router.get('/:table/:id', getRows);

router.post('/:table', createRow);

router.put('/:table', updateRow);

router.put('/:table/:id', updateRow);

router.delete('/:table', deleteRow);

router.delete('/:table/:id', deleteRow);


module.exports = router;