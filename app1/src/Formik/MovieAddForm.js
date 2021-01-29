import React from 'react'
import {Formik, Form, ErrorMessage, useFormikContext} from 'formik'

import { useDispatch, useSelector } from 'react-redux'
import {AddMovieAction} from "../redux/actions";

import CustomMovieSelect from "./CustomMovieSelect";
import DatePicker from "./DatePicker";
import Input from './Input'
import Textarea from './Textarea'
import { validationSchema, formInitialValues } from "../variables/variables";

function MovieAddForm({ close }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.movies.error)
  const msg = useSelector((state) => state.movies.msg)
  const filterQuery = useSelector(state => state.filter.query)

  return (
    <>
      <h2 className='header-add'> Add Movie </h2>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}

        onSubmit={(values, { setSubmitting }) => {
          dispatch( AddMovieAction(values, filterQuery) )
          close()
        }}
      >
        {
          formik => (
            <Form onSubmit={formik.handleSubmit}>
              {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Error</div> : null}

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
              <CustomMovieSelect
                label='Genres'
                name='genres'/>

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </>
  )
}

export default MovieAddForm
