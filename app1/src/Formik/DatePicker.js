import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ErrorMessage, useFormikContext} from 'formik'
import TextError from './TextError'

function CustomDatePicker(props) {
  const { values, setFieldValue } = useFormikContext();
  const startDateValue = values.release_date ? new Date(values.release_date) : null
  const [startDate, setStartDate] = useState(startDateValue);
  const { label, name } = props

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={date => {
          setStartDate(date)
          let dateFormatted = new Date(date).toISOString().slice(0, 10);
          setFieldValue(name, dateFormatted)
        }}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CustomDatePicker
