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
      </form>
  )
}

TableForm.propTypes = {
  format: PropTypes.array
}