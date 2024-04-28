import PropTypes from 'prop-types'
import { InputsForm } from './InputsForm'

export function TableForm({ format, tableName, functions }) {

  const labelButton = {
    empleados: 'Registrar',
    solicitud: 'Enviar',
    login: 'Ingresar'
  }
  
  return (
      <form className="w-[400px] flex flex-col justify-center align-center" onSubmit={functions.button1}>
        <fieldset className="border border-dashed border-gray-500 rounded-md p-4">
          {
            tableName !== 'login' &&
            <legend className="text-sm lowercase first-letter:uppercase px-2">{tableName}</legend>}
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
  )
}

TableForm.propTypes = {
  format: PropTypes.array,
  tableName: PropTypes.string,
  functions: PropTypes.object,
}