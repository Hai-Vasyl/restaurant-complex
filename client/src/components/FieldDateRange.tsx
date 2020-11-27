import React, { useState } from "react"
import "../styles/createdaterange.scss"
import "../styles/field.scss"

interface FieldDateRange {
  onChangePicker(event: React.ChangeEvent<HTMLInputElement>): void | undefined
}

const FieldDateRange: React.FC<FieldDateRange> = ({ onChangePicker }) => {
  return (
    <>
      <label className='date-picker field'>
        <span className='field__title'>Поселення:</span>
        <input
          type='date'
          className='field__input picker-settlement'
          name='settlement'
          onChange={onChangePicker}
        />
      </label>
      <label className='date-picker field'>
        <span className='field__title'>Виселення:</span>
        <input
          type='date'
          className='field__input'
          name='eviction'
          onChange={onChangePicker}
        />
      </label>
    </>
  )
}

export default FieldDateRange
