import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovieData } from '~/components/MovieList/MovieRow'


export interface IMovie {
  results: IMovieData[]
}

interface MovieDetails {
  id: number
  number_of_seasons: number
  original_name: string
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  genres: Array<{ id: number, name: string }>
}

export const tmdbApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints(builder) {
    return {
      fetchMoviesNetflix: builder.query<IMovie, number | void>({
        query(page = 1) {
          return `/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
        },
      }),
      fetchMoviesTrending: builder.query<IMovie, number | void>({
        query() {
          return `/trending/all/week?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMoviesTopRated: builder.query<IMovie, number | void>({
        query() {
          return `/movie/top_rated?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieDetails: builder.query<MovieDetails, number | void>({
        query(movieId: number) {
          return `/tv/${movieId}?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieOfAction: builder.query<IMovie, number | void>({
        query() {
          return `/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieOfComedy: builder.query<IMovie, number | void>({
        query() {
          return `/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieOfHorror: builder.query<IMovie, number | void>({
        query() {
          return `/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieOfRomance: builder.query<IMovie, number | void>({
        query() {
          return `/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }),
      fetchMovieOfDocumentary: builder.query<IMovie, number | void>({
        query() {
          return `/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        }
      })
    }
  }
})

export const {
  useFetchMoviesNetflixQuery,
  useFetchMoviesTrendingQuery,
  useFetchMoviesTopRatedQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieOfActionQuery,
  useFetchMovieOfComedyQuery,
  useFetchMovieOfHorrorQuery,
  useFetchMovieOfRomanceQuery,
  useFetchMovieOfDocumentaryQuery
} = tmdbApi
