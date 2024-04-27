import PropTypes from 'prop-types'
import { InputsForm } from './InputsForm'

export function TableForm({ format, tableName }) {
  
  return (
      <form className="w-[400px] flex flex-col justify-center align-center">
        <fieldset className="border border-dashed border-gray-500 rounded-md p-4">
          <legend className="text-sm lowercase first-letter:uppercase px-2">{tableName}</legend>
          {
            format.map(column => {
              return (
                <InputsForm info={column} key={column.id}></InputsForm>
              )
            })
          }
        </fieldset>
        <div className="w-full flex justify-center items-center gap-14 my-2">
          <button type="submit" className="w-20 p-1 border rounded-lg border-gray-600 bg-cyan-400 text-slate-50">
            {tableName === 'empleados' ? 'Registrar' : 'Enviar'}
          </button>
          <button className="w-20 p-1 border rounded-lg border-gray-600 bg-red-400 text-slate-50">
            Cancelar
          </button>
        </div>
      </form>
  )
}

TableForm.propTypes = {
  format: PropTypes.array
}