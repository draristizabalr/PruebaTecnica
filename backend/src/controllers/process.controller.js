const pool = require('../db');


const getRows = async (req, res, next) => {
  const { table, id } = req.params;

  try {
    if (id) {
      const result = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id])

      if (result.rows.length === 0)
        return res
          .status(404)
          .json({ message: "No se encontraron resultados" });
    }else{
      const result = await pool.query(`SELECT * FROM ${table}`)
  
      res.send(result.rows)
    }
  }catch (error) {
      next(error)
  }
}

const createRow = async (req, res, next) => {
    const { table } = req.params

    const { nombre, fecha_ingreso, salario} = req.body;
    
    try {
      const result = await pool.query(`INSERT INTO ${table} (nombre, fecha_ingreso, salario) VALUES ($1, $2, $3) RETURNING *`, [nombre, fecha_ingreso, salario] )

      res.send(result.rows);
    }catch (error) {
      next(error)
    }
}

const updateRow = async (req, res, next) => {
  const { table, id } = req.params;
  const {nombre, fecha_ingreso, salario} = req.body;

  try{
    const result = await pool.query(`UPDATE ${table} SET nombre = $1, fecha_ingreso = $2, salario = $3 WHERE id = $4 RETURNING *`, [nombre, fecha_ingreso, salario, id])

    if (result.rows.length === 0)
      return res.status(404).json({ message: "No se ha obtenido resultados" });

    res.json(result.rows)
  }catch (error) {
    next(error)
  }
}

const deleteRow = async (req, res, next) => {

  const { table, id } = req.params;

  try {
    if(id){
      const result = await pool.query(`DELETE FROM ${table} WHERE id = $1 RETURNING *`, [id])
      
      if (result.rows.length === 0) 
        res
          .status(404)
          .json({ message: "No se encontraron resultados"})
      else{
        res.json(result.rows) 
      }
    }else{
      const result = await pool.query(`DELETE FROM ${table}`)

      res.json(result.rows)
    }


  }catch (error) {
    next(error)
  }
}



module.exports = {
    getRows,
    createRow,
    updateRow,
    deleteRow,
}