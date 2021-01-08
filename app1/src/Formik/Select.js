import React from 'react'
import { ErrorMessage, useField } from 'formik'
import Select from 'react-select'
import TextError from './TextError'
import { dropdownOptions, selectedValues } from './GenresObject'

function CustomSelect(props) {
  const {label, name, ...rest } = props
  const [field, meta, helpers] = useField(props)

  const { options } = props
  const { touched, error, value } = meta
  const { setValue } = helpers

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        value={selectedValues(dropdownOptions, field.value)}
        options={dropdownOptions}
        onChange={(option) => setValue(option.value)}
        isMulti
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CustomSelect
