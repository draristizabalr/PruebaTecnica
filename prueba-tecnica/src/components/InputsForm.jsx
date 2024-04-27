import { PropTypes } from 'prop-types'

export function InputsForm({ info }) {
  const { name, type, id } = info

  return (
    <div className="flex justify-between align-center my-2" key={id}>
      <label htmlFor={name} className="mr-4 text-md lowercase first-letter:uppercase">{name.replaceAll('_', ' ')}</label>
      {
        type === 'textarea' ? 
        <textarea name={name} id={id} className="w-60 h-24 rounded-md p-2 border border-gray-800 text-xs"></textarea> :   
        <input type={type} name={name} id={id}
        className="w-60 rounded-md h-8 p-2 border border-gray-800 text-sm"/>
      }
    </div>
  )
}

InputsForm.propTypes = {
  info: PropTypes.object
}