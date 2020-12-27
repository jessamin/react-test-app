import React from 'react'
import { ErrorMessage, useField } from 'formik'
import Select from 'react-select'
import TextError from './TextError'
import { dropdownOptions, selectedValues } from './GenresObject'

function CustomSelect(props) {
  const {label, name, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        value={selectedValues(dropdownOptions, field.value)}
        options={dropdownOptions}
        isMulti
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CustomSelect
