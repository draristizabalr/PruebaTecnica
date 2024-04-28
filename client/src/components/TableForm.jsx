import PropTypes from 'prop-types'
import { InputsForm } from './InputsForm'
import { useEffect, useState } from 'react'

export function TableForm({ format, tableName, functions }) {

  const [data, setData] = useState([])

  const handleSubmit = async (event) => {
    const response = await functions.button1(event)

    setData(response)
  }

  useEffect(() => setData([]), [tableName])

  const labelButton = {
    empleados: 'Registrar',
    solicitud: 'Enviar',
    login: 'Ingresar',
    register: 'Registrar',
    eliminar: 'Eliminar'
  }
  
  return (
    <div className="w-fit flex flex-col justify-center align-center p-4 ">
      <form className="w-[450px] flex flex-col justify-center align-center border border-dashed border-gray-500 rounded-md bg-slate-50 p-4" onSubmit={handleSubmit}>
          {
            format.map(column => {
              return (
                <InputsForm info={column} key={column.id}></InputsForm>
              )
            })
          }
        
        <div className="w-full flex justify-center items-center gap-14 my-2">
          <button type="submit" className="w-20 p-1 border rounded-lg border-gray-600 bg-cyan-400 text-slate-50">
            {labelButton[tableName]}
          </button>
          {
            tableName === 'login' ? 
            <button className="w-20 p-1 border rounded-lg border-gray-600 bg-green-400 text-slate-50" onClick={(event) => functions.button2(event)}>
              Registrar
            </button> :
            <button className="w-20 p-1 border rounded-lg border-gray-600 bg-red-400 text-slate-50" onClick={(event) => functions.button2(event)}>
              Cancelar
            </button>
          }
        </div>
      </form>     
    </div>
  )
}

TableForm.propTypes = {
  format: PropTypes.array,
  tableName: PropTypes.string,
  functions: PropTypes.object,
}