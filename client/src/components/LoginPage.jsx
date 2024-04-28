import { Forms } from './Forms.jsx'
import { useLogin } from '../hooks/useLogin.js'

export function LoginPage(){
  
  const { login } = useLogin()

  const functions = {
    button1: (event) => login(event),
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