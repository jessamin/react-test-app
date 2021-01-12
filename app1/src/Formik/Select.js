import React, { useState } from 'react'
import { ErrorMessage, useField, useFormikContext } from 'formik'
import Select from 'react-select'

// REDDUX
import { useDispatch, useSelector } from 'react-redux'
import {addMovieValidation} from "../redux/actions";

import TextError from './TextError'
import { dropdownOptions, selectedValues } from './GenresObject'

function CustomSelect(props) {
  const { values, submitForm, setFieldValue} = useFormikContext();
  console.log('useFormikContext.VALUES', values)

  const [selectValue, setSelectValue] = useState(values.genres);
  console.log('useSTATE-genres: selectValue', selectValue)

  // REDUX
  const dispatch = useDispatch();

  const {label, name, ...rest } = props
  const [field, meta, helpers] = useField(props)
  //
  // const { options } = props
  // const { touched, error, value } = meta
  // const { setValue } = helpers

  // setSelectValue([{label: 'Comedy', name:'Comedy'}, {label: 'Family', name:'Family'}])

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        value={selectValue}
        options={dropdownOptions}
        onChange={(option) => {
          console.log('VALUES111', values)
          console.log('OPTION111', option)

          let opts = dropdownOptions.filter(option => values.genres.indexOf(option.value) >= 0)
          setSelectValue(opts)

          setFieldValue(
            field.name,
            (option).map(opt => opt.value)
          )

          dispatch(addMovieValidation({option, field: 'custom select'}))  // REDUX
        }}

        isMulti={true}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CustomSelect;
