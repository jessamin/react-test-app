// export default function useMovieListDispatch() {
//   return {
//     movieReduxList: {},
//     totalAmount: 0,
//     error: false
//   }
// }
//
export default function useMovieListDispatch(num) {
  return {
    movieReduxList: [
      {
        id: 2,
        title: 'Test Movie 2' + num,
        vote_average: 5.5,
        release_date: '2019-10-10',
        genres: ['Drama', 'Action'],
        poster_path: 'www'
      },
      {
        id: 3,
          title: 'Test Movie 3',
        vote_average: 7,
        release_date: '2017-1-1',
        genres: ['Horror'],
        poster_path: 'www'
      }
    ],
    totalAmount: 2,
      error: false
  }
}