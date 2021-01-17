import React, { useState } from 'react'
import { ErrorMessage, useFormikContext } from 'formik'
import Select from 'react-select'

import TextError from './TextError'
import { dropdownOptions, selectedValues } from './GenresObject'

function CustomMovieSelect({ label, name }) {
  const { values, setFieldValue } = useFormikContext();
  const [selectValue, setSelectValue] = useState(selectedValues(values.genres));

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        value={selectValue}
        options={dropdownOptions}
        onChange={(option) => {
          setSelectValue(option)
          setFieldValue(
            name,
            option ? (option).map(opt => opt.value) : []
          )
        }}
        isMulti
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CustomMovieSelect
