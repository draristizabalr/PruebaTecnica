const { Router } = require('express');
const pool = require('../db');
const { 
  getRows,
  createRow,
  updateRow,
  deleteRow
} = require('../controllers/process.controller');

const router = Router();

// Welcome API page
router.get('/', (req, res) => {
  res.send('¡Welcome to the backend API!')
});

// Servicios CRUD para tabla empleados
router.get('/:table', getRows);

router.get('/:table/:id', getRows);

router.post('/:table', createRow);

router.put('/:table', updateRow);

router.put('/:table/:id', updateRow);

router.delete('/:table', deleteRow);

router.delete('/:table/:id', deleteRow);


module.exports = router;