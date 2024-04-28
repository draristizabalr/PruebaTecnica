import { API_URL } from '../constants'

export function useLogin() {

  const login = async (event) => {
    event.preventDefault()

    const url = API_URL + 'login'

    const form = new FormData(event.target)
    
    const username = form.get('usuario')
    const passwordNotHash = form.get('contraseña')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: passwordNotHash
      })
    })

    const data = await response

    return data
  }

  const register = async (event) => {
    event.preventDefault()

    const url = API_URL + 'register'

    const form = new FormData(event.target)

    const username = form.get('usuario')
    const password = form.get('contraseña')
    const id_empleado = form.get('numero de empleado')

    const response = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        id_empleado: id_empleado
      })
    })
    const data = await response

    return data
  }

  return { login, register }
}