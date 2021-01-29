import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onLoadMoviesListAction} from "../../redux/actions";

export default function useMovieListDefault() {
  const dispatch = useDispatch()
  const filterState = useSelector(state => state.filter.query)

  const result = useSelector(state => ({
    movieReduxList: state.filter.movies,
    totalAmount: state.filter.count,
    error: state.filter.error
  }))

  useEffect(() => {
    dispatch(onLoadMoviesListAction(filterState))
  }, [dispatch]);

  return result
}