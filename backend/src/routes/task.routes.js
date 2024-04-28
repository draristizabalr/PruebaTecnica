const { Router } = require('express');
const pool = require('../db');
const { 
  getAllRows,
  createRow,
  updateRow,
  deleteRow
} = require('../controllers/process.controller');

const router = Router();

// Servicios CRUD para tabla empleados

router.get('/empleados', getAllRows);

router.post('/empleados', createRow);

router.put('/empleados', updateRow);

router.delete('/empleados', deleteRow);


module.exports = router;