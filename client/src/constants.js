export const tables ={
  empleados: [
    {name: 'nombre', type: 'text', id:'1-2'},
    {name: 'salario', type: 'number', id:'1-3'},
    {name: 'fecha_ingreso', type: 'date', id:'1-1'},
  ],
  solicitud: [
    {name: 'resumen', type: 'text', id:'2-1'},
    {name: 'descripcion', type: 'textarea', id:'2-2'},
  ],
  login: [
    {name: 'usuario', type: 'text', id:'3-1'},
    {name: 'contraseña', type: 'password', id:'3-2'},
  ],
  eliminar: [
    {name: 'id', type: 'number', id:'4-1'},
  ],
}

export const panelButtons = {
  empleados: [
    {
      label: 'Ver Empleados',
      name: 'ver',
      'bg-color': 'bg-cyan-400'
    },
    {
      label: 'Registrar Empleado',
      name: 'crear',
      'bg-color': 'bg-green-400'
    },
    {
      label: 'Eliminar Empleado',
      name: 'eliminar',
      'bg-color': 'bg-red-400'
    }
  ],
  solicitud: [
    {
      label: 'Ver Solicitudes',
      name: 'ver',
      'bg-color': 'bg-cyan-400'
    },
    {
      label: 'Enviar Solicitud',
      name: 'crear',
      'bg-color': 'bg-green-400'
    }
  ]
}

export const API_URL = 'http://localhost:3000/'