import { useState } from 'react'

export function useLogin() {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async (event) => {
    event.preventDefault()

    const form = new FormData(event.target)
    
    setUser(form.get('usuario'))
    setPassword(form.get('contraseña'))

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: password
      })
    })

    const data = await response.json()

    return data
  }

  return { login }
}