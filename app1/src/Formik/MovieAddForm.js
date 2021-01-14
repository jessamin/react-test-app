import React from 'react'
import {Formik, Form, ErrorMessage, useFormikContext} from 'formik'
import * as Yup from 'yup'

import { useDispatch, useSelector } from 'react-redux'
import {AddMovieAction} from "../redux/actions";

import CustomSelect from "./Select";
import DatePicker from "./DatePicker";
import Input from './Input'
import Textarea from './Textarea'

function MovieAddForm() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.movies.error)
  const msg = useSelector((state) => state.movies.msg)

  const initialValues = {
    title: '',
    tagline: '',
    vote_average: '',
    vote_count: '',
    release_date: '',
    poster_path: '',
    overview: '',
    budget: '',
    revenue: '',
    runtime: '',
    genres: []
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    poster_path: Yup.string().required('Required'),
    overview: Yup.string().required('Required'),
    runtime: Yup.number().required('Required'),
    genres: Yup.array().required('Required'),
    release_date: Yup.date().nullable(),
    vote_average: Yup.number().max(10),
    vote_count: Yup.number(),
    budget: Yup.number(),
    revenue: Yup.number()
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}

      onSubmit={(values, { setSubmitting }) => {
        dispatch( AddMovieAction(values) )
        window.location.reload()
      }}
    >
      {
        formik => (
          <Form onSubmit={formik.handleSubmit}>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los datos son obligatorios</div> : null}

            <Input
              type='text'
              label='Title'
              name='title' />
            <Input
              type='text'
              label='Tagline'
              name='tagline' />
            <Input
              type='number'
              label='Vote average'
              name='vote_average' />
            <Input
              type='number'
              label='Vote count'
              name='vote_count' />
            <DatePicker
              label='Release date'
              name='release_date'/>
            <Input
              type='text'
              label='Poster path'
              name='poster_path' />
            <Textarea
              label='Overview'
              name='overview' />
            <Input
              type='number'
              label='Budget'
              name='budget' />
            <Input
              type='number'
              label='Revenue'
              name='revenue' />
            <Input
              type='number'
              label='Runtime'
              name='runtime' />
            <CustomSelect
              label='Genres'
              name='genres'/>

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default MovieAddForm
