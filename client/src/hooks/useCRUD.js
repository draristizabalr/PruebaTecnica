import { PropTypes } from 'prop-types'
import { API_URL } from '../constants'

export function useCRUD( tableName ) {
  const url = API_URL + tableName
  const token = window.sessionStorage.getItem('token')
  const role = window.sessionStorage.getItem('role')

  const ver = async () => {
    const response = await fetch(url, {
      headers:{'Authorization': token}
    })
    const data = await response.json()

    return data
  }

  

  const crear = async (event, keys) => {
    event.preventDefault()

    if(role !== 'empleado' && tableName !== 'solicitud') return console.log('No tienes permisos para realizar esta acción')

    const form = new FormData(event.target)

    let body = {}

    console.log(keys)

    keys.forEach((key) => {
      body[key] = form.get(key)
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    return data
  }

  const eliminar = async (event) => {
    event.preventDefault()

    if(role === 'empleado') return console.log('No tienes permisos para realizar esta acción')

    const form = new FormData(event.target)
    const id = form.get('id')

    const response = await fetch(url + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        id: id
      })
    })

    const data = await response.json()

    return data
  }

  const functions = {
    ver: () => ver(),
    crear: (event, keys) => crear(event, keys),
    eliminar: (event) => eliminar(event),
  }

  return functions
}

useCRUD.propTypes = {
  tableName: PropTypes.string,
}