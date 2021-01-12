import React, { useState } from 'react'
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

// REDDUX
import { useDispatch, useSelector } from 'react-redux'
import {addMovieValidation} from "../redux/actions";

function DatePicker(props) {
  // REDUX
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const onChange = value => setValue(value)

  const {label, name, ...rest } = props

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} >
        {
          ({form, field}) => {
            const { setFieldValue } = form
            const { value } = field

            return (
              <DateView
                dateFormat="yyyy"
                showYearPicker
                yearItemNumber={10}
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => {
                  // let val1 = val.getFullYear().toString()
                  setFieldValue(name, val)
                  dispatch(addMovieValidation({val, field: 'DatePicker'}))  // REDUX
                }}
              />
            )
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>

  )
}

export default DatePicker