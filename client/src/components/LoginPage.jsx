import { PropTypes } from 'prop-types'
import { Forms } from './Forms.jsx'
import { useLogin } from '../hooks/useLogin.js'
import { useState } from 'react'

export function LoginPage({ getAuthenticated }){
  const [createUser, setCreateUser] = useState(false)

  const { login, register} = useLogin()

  const functions = {
    button1: async (event) => {
      if(createUser) {
        register(event)
        setCreateUser(false)
      }
      else{
        
        const authentication = await login(event)
        const token = await authentication.json()

        const auth = authentication.status == 200 ? true : false

        window.sessionStorage.setItem('token', token['token'] )

        await getAuthenticated(auth)
        
      }
    },
    button2: (event) => {
      event.preventDefault()
      if(createUser) setCreateUser(false)
      else setCreateUser(true)
    },
  }

  return (
    <>
    {
      createUser 
        ? 
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span className="text-5xl text-blue-500 my-6 font-sans">Registro</span>        
          <Forms table="register" functions={functions}></Forms>
        </div>
        :
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span className="text-5xl text-blue-500 my-6 font-sans">Login</span>        
          <Forms table="login" functions={functions}></Forms>
        </div>
    }
    
    </>
  )
}

LoginPage.propTypes = {
  getAuthenticated: PropTypes.func
}