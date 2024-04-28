import './App.css'
import { useEffect, useState,  } from 'react'
import { LoginPage } from './components/LoginPage.jsx'
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
        
      <LoginPage getAuthenticated={getAuthenticated}></LoginPage>

      <Modal isOpen={modalOpen} getClose={getClose}>
        <button value="empleados" onClick={(event) => handleClick(event)}>
          Empleados
        </button>
        <button value="solicitud" onClick={(event) => handleClick(event)}>
          Solicitud
        </button>
      </Modal>
         
      </div>
    </>
  )
}

export default App
