import { TableForm } from './TableForm.jsx'
import { tables } from '../constants.js'

function Forms({ process }) {

  return (
    <>
      <div className='w-full h-full flex flex-col gap-6 py-4 justify-center items-center'>
        {
          Object.keys(tables).map(tableName => {
            return (
              <TableForm format={tables[tableName]} tableName={tableName} key={tableName}></TableForm>
            )
          })
        }
      </div>
    </>
  )
}

export default Forms
