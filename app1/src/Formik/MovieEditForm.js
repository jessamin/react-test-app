import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Formik, Form } from 'formik'
import LoadingOverlay from 'react-loading-overlay'
import CustomMovieSelect from "./CustomMovieSelect";
import {editMovieFetchAction, editMovieAction} from "../redux/actions";
import DatePicker from "./DatePicker";
import Input from './Input'
import Textarea from './Textarea'
import { validationSchema } from "../variables/variables";

function MovieEditForm({ movieId, close }) {
  const [movieData, setMovieData] = useState(null);

  const dispatch = useDispatch();
  const reduxMovie = useSelector(state => state.movies.movie)
  const filterQuery = useSelector(state => state.filter.query)
  if(Object.keys(reduxMovie).length !== 0 && movieData === null) {
    setMovieData(reduxMovie)
  }

  useEffect(() => {
    dispatch(editMovieFetchAction(movieId))
  }, [dispatch]);

  const onSubmit = values => {
    dispatch( editMovieAction(values, filterQuery) )
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
              <CustomMovieSelect
                label='Genres'
                name='genres'/>

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
