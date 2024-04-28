import { PropTypes } from 'prop-types'
import { TableForm } from './TableForm.jsx'
import { TableView } from './TableView.jsx'
import { tables, panelButtons } from '../constants.js'
// import { LoginPage } from './LoginPage.jsx'
import { useCRUD } from '../hooks/useCRUD.js'
import { useState } from 'react'

export function Panel({ tableName }) {
  const CRUDfunctions = useCRUD(tableName)

  const [option, setOption] = useState(null)

  const cancel = (event) => {
    event.preventDefault()

    setOption(null)
  }

  const functions = {
    button1: async (event) => await CRUDfunctions[option](event),
    button2: (event) => cancel(event)
  }

  return (
    <>
      <div className='h-screen w-screen overflow-hidden'>
        {/* <LoginPage></LoginPage> */}
        <header className="relative top-10 flex flex-row justify-center gap-x-14">
          {
            panelButtons[tableName].map(button => {
              return (
                <button key={button.name} className={"w-44 h-12 p-1 border border-gray-600 rounded-lg text-slate-50 text-lg cursor-pointer  hover:scale-105 active:bg-opacity-80 " + button['bg-color']} onClick={() =>setOption(button.name)}>
                  {button.label}
                </button>
              )
            })
          }
        </header>
        <main className="w-full h-fit flex justify-center items-center my-40">
          {
            option === 'crear' ? 
            <TableForm format={tables[tableName]} tableName={tableName} functions={functions}></TableForm> :
            option === 'ver' ? 
            <TableView func={functions.button1}></TableView> :
            option === 'eliminar' ?
            <TableForm format={tables[option]} tableName={option} functions={functions}></TableForm> :
            null
          }
        </main>
         
      </div>
    </>
  )
}

Panel.propTypes = {
  tableName: PropTypes.string.isRequired
}
