// import { TableForm } from './components/TableForm.jsx'
// import { tables } from './constants.js'
import { LoginPage } from './components/LoginPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='h-screen w-screen overflow-hidden flex flex-col gap-6 py-4 justify-center items-center'>
        <LoginPage></LoginPage>
        {/* {
          Object.keys(tables).map(tableName => {
            return (
              <TableForm format={tables[tableName]} tableName={tableName} key={tableName}></TableForm>
            )
          })
        } */}
      </div>
    </>
  )
}

export default App
