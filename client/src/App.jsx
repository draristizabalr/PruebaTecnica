import './App.css'
import { useEffect, useState,  } from 'react'
import { LoginPage } from './components/LoginPage.jsx'
import { Panel } from './components/Panel.jsx'
import Modal from './components/Modal.jsx'

function App() {
  const [auth, setAuth] = useState(false);
  const [table, setTable] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getAuthenticated = (authenticated) => {
    setAuth(authenticated)
    
  }

  const getClose = (close) => {
    setModalOpen(close)
  }

  const handleClick = (event) => {
    setTable(event.target.value)
    setModalOpen(false)
  }

  useEffect(() => {
    if (auth) {
      setModalOpen(true)
    }else{
      setModalOpen(false)
    }
  }, [auth])

  
  return (
    <>
      <div className='h-screen w-screen overflow-hidden flex flex-col gap-6 py-4 justify-center items-center'>
      
      {
        table 
        ? 
        <Panel tableName={table}></Panel>
        :
        <LoginPage getAuthenticated={getAuthenticated}></LoginPage>
      }
      <Modal isOpen={modalOpen} getClose={getClose}>
        <h1 className="mb-6 p-0 text-center text-2xl text-blue-600">Seleccionar Opción</h1>
        <div className="w-full flex flex-row justify-center items-center gap-10 ">
          <button className="w-32 h-12 px-2 py-1 text-lg border rounded border-gray-600 bg-green-400 text-slate-100 hover:opacity-80 active:scale-95" value="empleados" onClick={(event) => handleClick(event)}>
            Empleados
          </button>
          <button className="w-32 h-12 px-2 py-1 text-lg border rounded border-gray-600 bg-red-400 text-slate-100 hover:opacity-80 active:scale-95" value="solicitud" onClick={(event) => handleClick(event)}>
            Solicitud
          </button>
        </div>
      </Modal>

         
      </div>
    </>
  )
}

export default App
