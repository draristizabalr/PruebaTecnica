const pool = require('../db');

const getAllRows = async (req, res) => {
    try{
      const result = await pool.query('SELECT * FROM empleados')

      res.json(result.rows)
    }catch (error) {
      console.log(error.message)
    }
}

const createRow = async (req, res) => {
    const { nombre, fecha_ingreso, salario} = req.body;
    
    try {
      const result = await pool.query('INSERT INTO empleados (nombre, fecha_ingreso, salario) VALUES ($1, $2, $3) RETURNING *', [nombre, fecha_ingreso, salario] )

      res.json(result.rows);
    }catch (error) {
      res.send(error.message)
    }
}

const updateRow = (req, res) => {
    res.send('Updating row(s)');
}

const deleteRow = (req, res) => {
    res.send('Deleting row(s)');
}

module.exports = {
    getAllRows,
    createRow,
    updateRow,
    deleteRow
}