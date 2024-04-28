import './App.css'
import { Panel } from './components/Panel.jsx'

function App() {
  
  return (
    <>
      <div className='h-screen w-screen overflow-hidden flex flex-col gap-6 py-4 justify-center items-center'>
        {/* <LoginPage></LoginPage> */}
       
        <Panel tableName="empleados"></Panel>
         
      </div>
    </>
  )
}

export default App
