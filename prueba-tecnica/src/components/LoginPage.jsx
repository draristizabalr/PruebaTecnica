import { Forms } from './Forms.jsx'
import { useState } from 'react'

export function LoginPage(){
  
  const [usuario, setUsuario] = useState({USUARIO: '', CONTRASEÑA: ''})
  const functions = {
    button1: (event) => {
      event.preventDefault()
      const form = new FormData(event.target)
      const credenciales = {
        USUARIO: form.get('USUARIO'),
        CONTRASEÑA: form.get('CONTRASEÑA')
      }
      setUsuario(credenciales)

      console.log(usuario)
    },
    button2: (event) => {
      event.preventDefault()
      console.log('button2')
    },
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="text-5xl text-blue-500 my-6 font-sans">Login</span>        
        <Forms table="login" functions={functions}></Forms>

      </div>
    </>
  )
}