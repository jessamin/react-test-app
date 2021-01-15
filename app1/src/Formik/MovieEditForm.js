import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Formik, Form, errorMessage} from 'formik'
import * as Yup from 'yup'
import LoadingOverlay from 'react-loading-overlay'
import CustomSelect from "./Select";
import {editMovieFetchAction, editMovieAction} from "../redux/actions";
import DatePicker from "./DatePicker";
import Input from './Input'
import Textarea from './Textarea'

function MovieEditForm({ mid, close }) {
  const [movieData, setMovieData] = useState(null);

  const dispatch = useDispatch();
  const reduxMovie = useSelector(state => state.movies.movie)
  if(Object.keys(reduxMovie).length !== 0 && movieData === null) {
    setMovieData(reduxMovie)
  }

  useEffect(() => {
    dispatch(editMovieFetchAction(mid))
  }, [dispatch]);

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

  const onSubmit = (values, actions) => {
    dispatch( editMovieAction(values) )
    close()
  }

  return (
    <div>
    {
      (movieData !== null) ?
      <Formik
        initialValues={movieData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
            <Form>
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
        )}
      </Formik>
      : <LoadingOverlay />
    }
    </div>
  )
}

export default MovieEditForm
