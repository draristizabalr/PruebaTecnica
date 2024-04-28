import { PropTypes } from 'prop-types'
import { API_URL } from '../constants'

export function useCRUD( tableName ) {
  const url = API_URL + tableName

  const ver = async () => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  

  const crear = async (event) => {
    event.preventDefault()

    const form = new FormData(event.target)
    const nombre = form.get('nombre')
    const fecha_ingreso = form.get('fecha_ingreso')
    const salario = form.get('salario')


    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        fecha_ingreso: fecha_ingreso,
        salario: salario
      })
    })

    const data = await response.json()

    return data
  }

  const eliminar = async (event) => {
    event.preventDefault()

    const form = new FormData(event.target)
    const id = form.get('id')

    const response = await fetch(url + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
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
    crear: (event) => crear(event),
    eliminar: (event) => eliminar(event),
  }

  return functions
}

useCRUD.propTypes = {
  tableName: PropTypes.string,
}