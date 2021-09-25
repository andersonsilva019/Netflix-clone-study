import { useEffect, useState } from 'react'
import MovieList from '~/components/MovieList'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import ThumbnailMovie from '~/components/ThumbnailMovie'

import {
  useFetchMovieOfActionQuery,
  useFetchMovieOfComedyQuery,
  useFetchMovieOfDocumentaryQuery,
  useFetchMovieOfHorrorQuery,
  useFetchMovieOfRomanceQuery,
  useFetchMoviesNetflixQuery,
  useFetchMoviesTopRatedQuery,
  useFetchMoviesTrendingQuery
} from '~/app/services/movies'

import * as S from '~/styles/pages/Home'

export default function Home() {

  const [blackHeader, setBlackHeader] = useState(false)
  const [tvId, setTvId] = useState(null)

  const { data: originalNetflix } = useFetchMoviesNetflixQuery()
  const { data: trending } = useFetchMoviesTrendingQuery()
  const { data: topRated } = useFetchMoviesTopRatedQuery()
  const { data: action } = useFetchMovieOfActionQuery()
  const { data: comedy } = useFetchMovieOfComedyQuery()
  const { data: horror } = useFetchMovieOfHorrorQuery()
  const { data: romance } = useFetchMovieOfRomanceQuery()
  const { data: documentary } = useFetchMovieOfDocumentaryQuery()

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 70) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  useEffect(() => {
    if (!originalNetflix) {
      return
    }
    const randomNumber = Math.floor(Math.random() * (originalNetflix?.results.length - 1))
    const chosenMovie = originalNetflix?.results[randomNumber]
    setTvId(chosenMovie?.id)
  }, [originalNetflix])

  return (
    <S.Container>
      <Header backgroundBlack={blackHeader} />
      <ThumbnailMovie tvId={tvId} />
      <MovieList
        originalNetflix={originalNetflix}
        trending={trending}
        topRated={topRated}
        action={action}
        comedy={comedy}
        horror={horror}
        romance={romance}
        documentary={documentary}
      />
      <Footer />
    </S.Container>
  )
}
