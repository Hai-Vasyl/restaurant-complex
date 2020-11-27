import React from "react"
import "../styles/field.scss"

interface IOption {
  title: string
  value: string
}

interface ISortFieldProps {
  title: string
  options: IOption[]
  selectedValue: string
  handleChangeSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void | undefined
}

const SortField: React.FC<ISortFieldProps> = ({
  title,
  options,
  selectedValue,
  handleChangeSelect,
}) => {
  return (
    <div className='select'>
      <div className='select__title'>{title}</div>
      <select
        className='select__options'
        value={selectedValue}
        onChange={handleChangeSelect}>
        {options.map((option) => {
          return (
            <option
              key={option.value}
              className='select__option'
              value={option.value}>
              {option.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SortField
