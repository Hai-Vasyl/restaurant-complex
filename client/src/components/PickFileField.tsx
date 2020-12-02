import React from "react"

interface PickFileFieldProps {
  file: any
  handleChangeFileField(event: React.ChangeEvent<HTMLInputElement>): void
  title: string
}

const PickFileField: React.FC<PickFileFieldProps> = ({
  file,
  title,
  handleChangeFileField,
}) => {
  return (
    <div className='file-picker select'>
      <div className='select__title'>{title}</div>
      <label className='file-picker__picker select__options'>
        <span>{file ? "Файл вибрано" : "Вибрати файл"}</span>
        <input
          className='file-picker__pick'
          type='file'
          onChange={handleChangeFileField}
        />
      </label>
    </div>
  )
}

export default PickFileField
