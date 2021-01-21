import * as Yup from "yup";

export const menuList = [
  {id: 'all', name: 'ALL'},
  {id: 'documentary', name: 'DOCUMENTARY'},
  {id: 'horror', name: 'HORROR'},
  {id: 'crime', name: 'CRIME'}
]

export const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  tagline: Yup.string().required('Required'),
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

export const formInitialValues = {
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