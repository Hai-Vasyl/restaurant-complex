import React from "react"
import { BiError } from "react-icons/bi"
import "../styles/field.scss"

interface IFieldProps {
  field: {
    param: string
    type?: string
    value: string
    title: string
    msg?: string
  }
  change: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  exClass?: string
}

const Field: React.FC<IFieldProps> = ({ field, change, exClass }) => {
  return (
    <label className={`field ${exClass}`} key={field.param}>
      <span className='field__title'>{field.title}</span>
      <input
        className={`field__input ${field.msg?.length && "field__input--error"}`}
        type={field.type}
        name={field.param}
        value={field.value}
        onChange={change}
        autoComplete='off'
      />
      <span
        className={`field__error ${
          field.msg?.length && "field__error--active"
        }`}>
        {field.msg}
        <BiError className='field__error-icon' /> <span>{field.msg}</span>
      </span>
    </label>
  )
}

export default Field
