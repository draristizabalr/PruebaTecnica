import './App.css'
import { useState, useEffect } from 'react'
import { LoginPage } from './components/LoginPage.jsx'
import { Panel } from './components/Panel.jsx'

function App() {
  const [auth, setAuth] = useState(false)

  const getAuthenticated = (authenticated) => {
    setAuth(authenticated)
  }

  useEffect(() => console.log(auth), [auth])
  
  return (
    <>
      <div className='h-screen w-screen overflow-hidden flex flex-col gap-6 py-4 justify-center items-center'>
        
       
      {
        auth 
        ?
        <Panel tableName="empleados"></Panel>
        :
        <LoginPage getAuthenticated={getAuthenticated}></LoginPage>
      }
         
      </div>
    </>
  )
}

export default App
