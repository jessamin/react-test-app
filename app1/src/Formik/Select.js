import React from 'react'
import { Field, ErrorMessage, useField, useFormikContext } from 'formik'
import Select from 'react-select'
import TextError from './TextError'
import { dropdownOptions, selectedValues } from './GenresObject'

function CustomSelect(props) {
  const {label, name, ...rest } = props
  const [field, meta] = useField(props)

  const dropdownOptionsSeleted = (options, value) => {
    return options ? options.find(option => option.value === value) : ''
  }

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
