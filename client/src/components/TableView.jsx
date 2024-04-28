import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

export function TableView({ func }){
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await func();
      setData(result);
    };

    fetchData();
  }, [func]);

  const formateador = (key, value) => {
    const formatos = {
      'fecha_ingreso': formatoFecha,
      'salario': formatoSalario,
    }
    if(formatos[key]) return formatos[key](value)
    else return value
  }

  const formatoFecha = (fecha) => {
    const date = new Date(fecha).toISOString().split('T')[0]
    
    return date
  }

  const formatoSalario = (salario) => {
    return '$' + salario.toLocaleString()
  }


  return data.length == 0 ? <h1>Loading...</h1> : (
    <div className="max-h-[500px] overflow-auto w-[600px] max-w-[700px] border-2 border-gray-800 bg-slate-50">
      <table className="w-full">
        <thead className="sticky top-0 bg-blue-400">
          <tr>
          {
            Object.keys(data[0]).map((key) => {
              return (
              <th key={key} className="lowercase first-letter:uppercase border border-gray-600 px-4 py-1">
                {key.replaceAll('_', ' ')}
              </th>)
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item) => {
              return (
                <tr key={item.id}>
                  {Object.keys(item).map((key) =>{
                    return (
                      <td key={item.id + '-' + key} className="border border-gray-400 text-center">
                        {formateador(key, item[key])}
                      </td>
                    )
                  })}
                  {/* <td className="py-1 border border-gray-400 text-center">{item.id}</td>
                  <td className="text-nowrap overflow-hidden text-ellipsis py-1 border border-gray-400 ">{item.nombre}</td>
                  <td className="py-1 border border-gray-400 text-center">{formatoFecha(item.fecha_ingreso)}</td>
                  <td className="py-1 border border-gray-400 text-end">${item.salario.toLocaleString()}</td> */}
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )

}

TableView.propTypes = {
  func: PropTypes.func.isRequired
}