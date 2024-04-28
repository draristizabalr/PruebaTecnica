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
      <div className="absolute -z-10 h-screen w-screen bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
      
      <div className="h-screen w-screen overflow-hidden flex flex-col gap-6 py-4 justify-center items-center bg-opacity-0">
      
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
