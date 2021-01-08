import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import FormikControl from "./FormikControl";
import {AddMovieAction} from "../redux/actions";

function MovieAddForm() {
  const dispatch = useDispatch();
  // const addMovie = movie => dispatch( AddMovieAction(movie) )
  const error = useSelector((state) => state.movies.error)
  const errorMsg = useSelector((state) => state.movies.errorMsg)

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
    // genres: Yup.array().required('Required'),
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
        values = {...values, release_date: values['release_date'].getFullYear().toString()}
        dispatch( AddMovieAction(values) )
        setSubmitting(false)
      }}
    >
      {
        formik => (
          <Form>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los datos son obligatorios</div> : null}
            <FormikControl
              control='input'
              type='text'
              label='Title'
              name='title'
            />
            <FormikControl
              control='input'
              type='text'
              label='Tagline'
              name='tagline'
            />
            <FormikControl
              control='input'
              type='number'
              label='Vote average'
              name='vote_average'
            />
            <FormikControl
              control='input'
              type='number'
              label='Vote count'
              name='vote_count'
            />
            <FormikControl
              control='date'
              label='Release date'
              name='release_date'
            />
            <FormikControl
              control='input'
              type='text'
              label='Poster path'
              name='poster_path'
            />
            <FormikControl
              control='textarea'
              label='Overview'
              name='overview'
            />
            <FormikControl
              control='input'
              type='number'
              label='Budget'
              name='budget'
            />
            <FormikControl
              control='input'
              type='number'
              label='Revenue'
              name='revenue'
            />
            <FormikControl
              control='input'
              type='number'
              label='Runtime'
              name='runtime'
            />
            <FormikControl
              control='select'
              label='Genres'
              name='genres'
            />

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default MovieAddForm