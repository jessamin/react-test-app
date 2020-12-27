import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import CustomSelect from './Select'
import DatePicker from './DatePicker'

function FormikControl(props) {
  const {control, ...rest} = props

  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <CustomSelect {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl