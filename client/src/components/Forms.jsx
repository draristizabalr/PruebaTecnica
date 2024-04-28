import { PropTypes } from 'prop-types'
import { TableForm } from './TableForm.jsx'
import { tables } from '../constants.js'

export function Forms({ table, functions }) {

  return (
    <>
      <div className='flex flex-col gap-6 py-4 justify-center items-center'>
        <TableForm format={tables[table]} tableName={table} key={table} functions={functions}></TableForm>
      </div>
    </>
  )
}


Forms.propTypes = {
  table: PropTypes.string,
  functions: PropTypes.object,
}